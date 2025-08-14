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

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  
  // Optimized spring physics for smoother progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    mass: 0.1,
    restDelta: 0.0001
  });

  // Smoother parallax effects with reduced movement range
  const backgroundY = useTransform(scrollY, [0, 2000], [0, -50]);
  const midgroundY = useTransform(scrollY, [0, 2000], [0, -100]);
  const foregroundY = useTransform(scrollY, [0, 2000], [0, -150]);

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
      {/* Enhanced Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 origin-left z-50 shadow-lg"
        style={{ scaleX }}
      />
      
      {/* Floating Action Button - Only show after hero section */}
      <motion.button
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg z-40 flex items-center justify-center text-white"
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, y: 100, scale: 0 }}
        animate={{ 
          opacity: showBackToTop ? 1 : 0,
          y: showBackToTop ? 0 : 100,
          scale: showBackToTop ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ↑
        </motion.div>
      </motion.button>
      
      <main className="relative overflow-hidden">
        {/* Optimized Parallax Background Layers */}
        <motion.div 
          className="fixed inset-0 z-0 pointer-events-none will-change-transform"
          style={{ y: backgroundY }}
        >
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-200/8 to-purple-200/8 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-20 w-96 h-96 bg-gradient-to-r from-indigo-200/8 to-cyan-200/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-gradient-to-r from-purple-200/8 to-pink-200/8 rounded-full blur-2xl" />
        </motion.div>

        <motion.div 
          className="fixed inset-0 z-0 pointer-events-none will-change-transform"
          style={{ y: midgroundY }}
        >
          <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-300/4 to-indigo-300/4 rounded-full blur-xl" />
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-300/4 to-blue-300/4 rounded-full blur-xl" />
        </motion.div>

        {/* Header */}
        <Header />
        
        {/* Seamless Page Sections */}
        <motion.div className="relative z-10 space-x-2" style={{ y: foregroundY }}>
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            id="home"
          >
            <Hero />
          </motion.div>

          {/* About Section */}
          <SectionTransition id="about">
            <AboutSection />
          </SectionTransition>

          {/* Products Section */}
          <SectionTransition id="products" delay={0.1}>
            <ProductsSection />
          </SectionTransition>

          {/* Why Choose Us Section */}
          <SectionTransition id="why-choose-us" delay={0.2}>
            <WhyChooseUsSection />
          </SectionTransition>

          {/* Contact Section */}
          <SectionTransition id="contact" delay={0.1}>
            <ContactSection />
          </SectionTransition>

          {/* Footer - Direct without SectionTransition to prevent extra space */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Footer />
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}
