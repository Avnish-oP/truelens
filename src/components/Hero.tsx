"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Eye, Shield, Globe, Award, ArrowRight, Clock, PhoneCall, } from "lucide-react";
import Link from "next/link";
import { Span } from "next/dist/trace";
import { useRef, useState, useEffect } from "react";

const Hero = () => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Reduced parallax effects for mobile performance
  const y = useTransform(scrollYProgress, [0, 1], isMobile ? ["0%", "10%"] : ["0%", "25%"]);
  const yFast = useTransform(scrollYProgress, [0, 1], isMobile ? ["0%", "15%"] : ["0%", "40%"]);
  const ySlow = useTransform(scrollYProgress, [0, 1], isMobile ? ["0%", "5%"] : ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0.8, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 1], isMobile ? [1, 1.02] : [1, 1.05]);
  const blur = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0.5] : [0, 2]);

  return (
    <motion.section 
      ref={ref}
      style={{ y: ySlow, opacity }}
      className={`relative z-10 min-h-screen flex items-center justify-center overflow-hidden ${isMobile ? '' : 'will-change-transform'}`}
    >
      {/* Background Image Layer */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: ySlow, scale }}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700"
          style={{
            backgroundImage: "url('/sample.jpg')",
            transform: isMobile ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-slate-50/55 to-blue-50/50" />
        
        {/* Additional overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/40" />
        
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/10 via-transparent to-slate-900/10" />
      </motion.div>
      {/* Optimized background elements for mobile */}
      {!isMobile && (
        <motion.div 
          className="absolute inset-0 overflow-hidden" 
          style={{ y: yFast, scale, filter: `blur(${blur}px)` }}
        >
          <motion.div
            className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-200/4 to-purple-200/4 rounded-full blur-3xl"
            animate={{
              x: [0, 20, 0],
              y: [0, -10, 0],
              scale: [1, 1.02, 1]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-indigo-200/4 to-cyan-200/4 rounded-full blur-3xl"
            animate={{
              x: [0, -15, 0],
              y: [0, 15, 0],
              scale: [1, 0.98, 1]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      )}
      
      {/* Simplified mobile-friendly background */}
      {isMobile && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-200/6 to-purple-200/6 rounded-full blur-xl opacity-50" />
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-indigo-200/6 to-cyan-200/6 rounded-full blur-xl opacity-50" />
        </div>
      )}
      
      {/* Reduced floating elements for better mobile performance */}
      {!isMobile && (
        <motion.div className="absolute inset-0 pointer-events-none" style={{ y }}>
          {[...Array(1)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${40 + i * 20}%`,
                top: `${40 + i * 10}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-blue-300/30 flex items-center justify-center shadow-sm">
                <Eye className="w-6 h-6 text-blue-500/40" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Simplified lens effects for mobile */}
      {!isMobile && (
        <motion.div className="absolute inset-0" style={{ y: ySlow }}>
          <motion.div
            className="absolute top-1/3 left-1/3 w-32 h-32 rounded-full border border-blue-200/15"
            animate={{
              scale: [1, 1.03, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
      )}

      {/* Main Content with optimized mobile performance */}
      <motion.div 
        className={`relative top-2 z-20 container-custom text-center px-4 sm:px-6 lg:px-8`}
        style={{ opacity, y: isMobile ? undefined : ySlow }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: isMobile ? 0.5 : 0.8, 
            delay: isMobile ? 0.1 : 0.2,
            ease: "easeOut"
          }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Headline with animated box effect */}
          <motion.div
            className="relative inline-block mb-6 sm:mb-4"
            initial={{ opacity: 0, y: isMobile ? 20 : 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: isMobile ? 0.4 : 0.8, 
              delay: isMobile ? 0.2 : 0.6,
              ease: "easeOut"
            }}
          >
            {/* Animated border box */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: [0.7, 1, 0.7], 
                scale: [0.98, 1.02, 0.98],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-indigo-500/30 blur-sm" />
              <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-r from-white/80 via-blue-50/60 to-white/80 backdrop-blur-sm" />
              
              {/* Corner highlights */}
              <motion.div
                className="absolute top-0 left-0 w-6 h-6 border-l-4 border-t-4 border-blue-500 rounded-tl-2xl"
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute top-0 right-0 w-6 h-6 border-r-4 border-t-4 border-purple-500 rounded-tr-2xl"
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-6 h-6 border-l-4 border-b-4 border-indigo-500 rounded-bl-2xl"
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-6 h-6 border-r-4 border-b-4 border-cyan-500 rounded-br-2xl"
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              />
              
              {/* Scanning line effect */}
              {!isMobile && (
                <motion.div
                  className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-transparent via-blue-400 to-transparent"
                  animate={{
                    x: ['0%', '100%', '0%'],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
              )}
            </motion.div>

            {/* Title content */}
            <motion.h1 
              className="relative z-10 text-6xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-8xl font-bold leading-tight px-6 py-4"
            >
              <span className="block sm:text-5xl text-4xl sm:-mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">Unveil Your</span>
              <span className="bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent">
                TRUE VISION
              </span>
            </motion.h1>
          </motion.div>
          
          {/* Tagline */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-6 text-slate-700 font-light max-w-3xl mx-auto px-4 flex flex-col"
            initial={{ opacity: 0, y: isMobile ? 15 : 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: isMobile ? 0.4 : 0.8, 
              delay: isMobile ? 0.3 : 0.8,
              ease: "easeOut"
            }}
          >
            <span className="">Experience crystal clear vision with premium collection of <span className="text-blue-700 sm:hidden font-medium">contact lenses</span> </span>
            <span className="text-blue-700 hidden sm:block font-medium">contact lenses</span> 
          </motion.p>
          
          {/* Feature Pills with reduced animation */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-8 px-4"
            initial={{ opacity: 0, y: isMobile ? 10 : 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: isMobile ? 0.4 : 0.8, 
              delay: isMobile ? 0.4 : 1,
              ease: "easeOut"
            }}
          >
            {[
              { icon: Shield, text: "FDA Approved Products" },
              { icon: Globe, text: "Global Shipping" },
              { icon: Award, text: "Premium Quality" },
              { icon: Clock, text: "On time delivery" },
              { icon: PhoneCall, text: "Customer Support" },

            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-blue-200/50 rounded-full px-3 sm:px-4 py-2 shadow-sm"
                whileHover={!isMobile ? { 
                  scale: 1.05, 
                  backgroundColor: "rgba(255,255,255,0.8)",
                  transition: { duration: 0.2 }
                } : {}}
              >
                <item.icon className="w-4 h-4 text-blue-600" />
                <span className="text-sm sm:text-base font-medium text-slate-700">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* CTA Button with mobile optimizations */}
          <motion.div 
            className="flex justify-center items-center px-4"
            initial={{ opacity: 0, y: isMobile ? 10 : 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: isMobile ? 0.4 : 1, 
              delay: isMobile ? 0.5 : 1.2, 
              ease: "easeOut"
            }}
          >
            <motion.button 
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-semibold text-xl shadow-2xl overflow-hidden backdrop-blur-sm"
              whileHover={!isMobile ? { 
                scale: 1.02,
                y: -3,
                boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)",
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              } : {}}
              whileTap={{ scale: 0.98 }}
            >
              {/* Reduced shimmer effect for mobile */}
              {!isMobile && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: '-100%', skewX: -45 }}
                  whileHover={{ 
                    x: '200%',
                    transition: { duration: 0.8, ease: "easeOut" }
                  }}
                />
              )}
              
              <span className="relative flex items-center justify-center space-x-3">
                <Eye className="w-6 h-6" />
                <Link href="#products">Explore Products</Link>
                <motion.div
                  className="flex items-center"
                  animate={!isMobile ? { x: [0, 4, 0] } : {}}
                  transition={!isMobile ? { duration: 1.5, repeat: Infinity, ease: "easeInOut" } : {}}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
