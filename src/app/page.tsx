"use client";

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SectionTransition from '@/components/SectionTransition';
import VideoSection from '@/components/VideoSection';

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Optimized spring physics for smoother progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    mass: 0.1,
    restDelta: 0.0001
  });

  // Reduced parallax effects for mobile performance
  const backgroundY = useTransform(scrollY, [0, 2000], isMobile ? [0, -20] : [0, -100]);
  const midgroundY = useTransform(scrollY, [0, 2000], isMobile ? [0, -40] : [0, -200]);
  const contentY = useTransform(scrollY, [0, 2000], isMobile ? [0, 10] : [0, 50]);
  
  // Scroll-based opacity for sections (reduced for mobile)
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.3]);
  const sectionScale = useTransform(scrollY, [0, 300], isMobile ? [1, 1] : [1, 0.95]);
  // main content vertical parallax transform (reduced for mobile)
  const mainY = useTransform(scrollY, [0, 1000], isMobile ? [0, -5] : [0, -20]);

  // Navigation sections and precomputed motion heights
  const navSections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'products', label: 'Products' },
    { id: 'contact', label: 'Contact' }
  ];

  // Precompute MotionValues for the vertical fill of each nav indicator.
  // Call hooks explicitly and in a stable order to satisfy rules-of-hooks.
  const sectionHeight0 = useTransform(scrollYProgress, [0 * 0.33, (0 + 1) * 0.33], ["0%", "100%"]);
  const sectionHeight1 = useTransform(scrollYProgress, [1 * 0.33, (1 + 1) * 0.33], ["0%", "100%"]);
  const sectionHeight2 = useTransform(scrollYProgress, [2 * 0.33, (2 + 1) * 0.33], ["0%", "100%"]);
  const sectionHeight3 = useTransform(scrollYProgress, [3 * 0.33, (3 + 1) * 0.33], ["0%", "100%"]);

  const sectionHeights = [sectionHeight0, sectionHeight1, sectionHeight2, sectionHeight3];

  useEffect(() => {
    // Enhanced smooth scrolling behavior
    const smoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.href && target.href.includes('#')) {
        e.preventDefault();
        const targetId = target.href.split('#')[1];
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const headerOffset = 80;
          const elementPosition = targetElement.offsetTop;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Throttled scroll handler for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const heroHeight = window.innerHeight;
          setShowBackToTop(window.scrollY > heroHeight);
          ticking = false;
        });
        ticking = true;
      }
    };

    document.addEventListener('click', smoothScroll);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      document.removeEventListener('click', smoothScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Mobile-optimized reading progress indicator */}
      <motion.div
        className={`fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 z-50 ${isMobile ? '' : 'backdrop-blur-sm'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 origin-left shadow-lg"
          style={{ scaleX }}
        />
      </motion.div>
      
      {/* Desktop scroll progress indicator */}
      {!isMobile && (
        <motion.div
          className="fixed right-6 top-1/2 -translate-y-1/2 z-30 space-y-3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: showBackToTop ? 1 : 0, x: showBackToTop ? 0 : 50 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {navSections.map((section, index) => (
            <motion.div
              key={section.id}
              className="group relative w-2 h-8 rounded-full bg-slate-300/20 overflow-hidden backdrop-blur-sm cursor-pointer border border-slate-400/10"
              onClick={() => {
                const element = document.getElementById(section.id);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              whileHover={{ 
                scale: 1.2, 
                backgroundColor: "rgba(59, 130, 246, 0.2)",
                borderColor: "rgba(59, 130, 246, 0.3)"
              }}
              title={section.label}
            >
              <motion.div
                className="w-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
                style={{
                  height: sectionHeights[index]
                }}
              />
              
              {/* Tooltip */}
              <motion.div
                className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-slate-900/80 backdrop-blur-sm text-white text-xs rounded-md opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap"
                initial={{ opacity: 0, x: 10 }}
                whileHover={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                {section.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Mobile-optimized back-to-top button */}
      <motion.button
        className={`fixed ${isMobile ? 'bottom-6 right-6 w-12 h-12' : 'bottom-8 right-8 w-16 h-16'} ${isMobile ? 'bg-white/90 border border-slate-200/50' : 'bg-white/90 backdrop-blur-xl border border-slate-200/50'} rounded-2xl shadow-2xl z-40 flex items-center justify-center text-slate-700 hover:text-blue-600`}
        whileHover={!isMobile ? { 
          scale: 1.05, 
          y: -2,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
        } : {}}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, y: isMobile ? 50 : 100, scale: 0 }}
        animate={{ 
          opacity: showBackToTop ? 1 : 0,
          y: showBackToTop ? 0 : (isMobile ? 50 : 100),
          scale: showBackToTop ? 1 : 0
        }}
        transition={{ 
          duration: isMobile ? 0.3 : 0.4, 
          ease: isMobile ? "easeOut" : [0.25, 0.46, 0.45, 0.94],
          type: isMobile ? "tween" : "spring",
          stiffness: isMobile ? undefined : 300,
          damping: isMobile ? undefined : 20
        }}
      >
        <motion.div
          animate={!isMobile ? { y: [0, -2, 0] } : {}}
          transition={!isMobile ? { 
            duration: 2, 
            repeat: Infinity, 
            ease: [0.25, 0.46, 0.45, 0.94] 
          } : {}}
          className={`${isMobile ? 'text-lg' : 'text-2xl'} font-bold`}
        >
          ↑
        </motion.div>
      </motion.button>
      
      <main className="relative overflow-hidden">
        {/* Optimized background for mobile */}
        {!isMobile ? (
          <>
            {/* Apple-inspired layered parallax background */}
            <motion.div 
              className="fixed inset-0 z-0 pointer-events-none will-change-transform"
              style={{ y: backgroundY }}
            >
              <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-200/4 to-purple-200/4 rounded-full blur-3xl" />
              <div className="absolute top-1/3 right-10 w-80 h-80 bg-gradient-to-r from-indigo-200/4 to-cyan-200/4 rounded-full blur-3xl" />
              <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-purple-200/4 to-pink-200/4 rounded-full blur-3xl" />
            </motion.div>

            <motion.div 
              className="fixed inset-0 z-0 pointer-events-none will-change-transform"
              style={{ y: midgroundY }}
            >
              <div className="absolute top-1/4 left-1/3 w-48 h-48 bg-gradient-to-r from-blue-300/2 to-indigo-300/2 rounded-full blur-2xl" />
              <div className="absolute bottom-1/2 right-1/3 w-56 h-56 bg-gradient-to-r from-purple-300/2 to-blue-300/2 rounded-full blur-2xl" />
              <div className="absolute top-2/3 left-1/6 w-32 h-32 bg-gradient-to-r from-cyan-300/2 to-teal-300/2 rounded-full blur-xl" />
            </motion.div>

            {/* Floating particles for depth - desktop only */}
            <motion.div 
              className="fixed inset-0 z-0 pointer-events-none will-change-transform"
              style={{ y: contentY }}
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400/15 rounded-full"
                  style={{
                    left: `${20 + (i * 12)}%`,
                    top: `${30 + (i * 10)}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.15, 0.4, 0.15],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3
                  }}
                />
              ))}
            </motion.div>
          </>
        ) : (
          /* Simple mobile background */
          <div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-200/6 to-purple-200/6 rounded-full blur-lg opacity-50" />
            <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-indigo-200/6 to-cyan-200/6 rounded-full blur-lg opacity-50" />
          </div>
        )}

        {/* Header */}
        <Header />
        
        {/* Apple-inspired continuous sections flow */}
        <motion.div 
          className="relative z-10"
          style={{ y: mainY }}
        >
          {/* Hero Section - Enhanced with scroll triggers */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            id="home"
            className="relative"
            style={{ opacity: heroOpacity, scale: sectionScale }}
          >
            <Hero />
            
            {/* Seamless transition element */}
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-50/60 pointer-events-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </motion.section>

          {/* About Section - Scroll triggered */}
          <SectionTransition id="about" className="relative -mt-16">
            <motion.div 
              className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-50/60 to-transparent pointer-events-none"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            />
            <AboutSection />
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-50/80 pointer-events-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </SectionTransition>

          {/* Products Section - Enhanced scroll triggers */}
          <SectionTransition id="products" delay={0.1} className="relative -mt-16">
            <motion.div 
              className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-50/80 to-transparent pointer-events-none"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <ProductsSection />
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-50/90 pointer-events-none"
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            />
          </SectionTransition>

          {/* Video Section - Advertisement/Experience */}
          <SectionTransition id="video" delay={0.1} className="relative -mt-16">
            <VideoSection 
              title="We Are Truelens International"
              videoSrc="/about.mp4"
              posterImage="/sample.jpg"
            />
          </SectionTransition>


          {/* Contact Section - Advanced scroll triggers */}
          <SectionTransition id="contact" delay={0.1} className="relative -mt-16">
            <motion.div 
              className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-50/90 to-transparent pointer-events-none"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
            <ContactSection />
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-slate-900/10 to-slate-900/30 pointer-events-none"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            />
          </SectionTransition>

          {/* Footer - Seamless dark transition */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative -mt-12"
          >
            <Footer />
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}
