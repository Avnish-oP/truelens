"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Eye, Star, Shield, Globe, Award, ArrowRight, Phone,Clock, PhoneCall } from "lucide-react";
import { Span } from "next/dist/trace";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Apple-style smooth parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const yFast = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const ySlow = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0.8, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const blur = useTransform(scrollYProgress, [0, 1], [0, 2]);

  return (
    <motion.section 
      ref={ref}
      style={{ y: ySlow, opacity }}
      className="relative z-10 min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50/90 via-blue-50/50 to-indigo-50/70 will-change-transform"
    >
      {/* Apple-inspired smooth background elements */}
      <motion.div 
        className="absolute inset-0 will-change-transform overflow-hidden" 
        style={{ y: yFast, scale, filter: `blur(${blur}px)` }}
      >
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-200/6 to-purple-200/6 rounded-full blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -10, 0],
            scale: [1, 1.03, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-indigo-200/6 to-cyan-200/6 rounded-full blur-3xl"
          animate={{
            x: [0, -15, 0],
            y: [0, 15, 0],
            scale: [1, 0.97, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        />
      </motion.div>
      
      {/* Simplified Floating Eye Elements with reduced animations */}
      <motion.div className="absolute inset-0 pointer-events-none will-change-transform" style={{ y }}>
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${30 + i * 40}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.5, 0.7, 0.5],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut"
            }}
          >
            <motion.div 
              className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm border border-blue-300/40 flex items-center justify-center shadow-md will-change-transform"
              style={{ y: i % 2 === 0 ? ySlow : y }}
            >
              <Eye className="w-8 h-8 text-blue-500/50" />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Simplified Lens Reflection Effects */}
      <motion.div className="absolute inset-0 will-change-transform" style={{ y: ySlow }}>
        <motion.div
          className="absolute top-1/3 left-1/3 w-48 h-48 rounded-full border border-blue-200/20"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.7, 0.5 ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full border border-purple-200/30"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      {/* Main Content with subtle parallax */}
      <motion.div 
        className="relative top-14 z-10 container-custom text-center px-4 sm:px-6 lg:px-8"
        style={{ opacity, y: ySlow }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Brand Badge */}
          {/* <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50 rounded-full px-6 py-3 mb-8 sm:mb-4 sm:mt-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <Star className="w-4 h-4 text-white" />
            </div>
            <span className="text-blue-700 font-medium">Premium Vision Solutions</span>
          </motion.div> */}

          {/* Main Headline */}
          <motion.h1 
            className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight px-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="block text-5xl sm:-mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">Unveil Your</span>
            <span className="bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent">
              TRUE VISION
            </span>
          </motion.h1>
          
          {/* Tagline */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl mb-2 sm:mb-2 text-slate-700 font-light max-w-3xl mx-auto px-4 flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="">Experience crystal clear vision with premium collection of</span>
            <span className="text-blue-700 font-medium">contact lenses</span>. 
            {/* <span className="text-blue-700 font-medium"> Comfort meets clarity.</span> */}
          </motion.p>
          
          {/* Feature Pills */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
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
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.8)" }}
                transition={{ duration: 0.2 }}
              >
                <item.icon className="w-4 h-4 text-blue-600" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex justify-center items-center px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Apple-style primary CTA button */}
            <motion.button 
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-semibold text-xl shadow-2xl overflow-hidden backdrop-blur-sm"
              whileHover={{ 
                scale: 1.02,
                y: -3,
                boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              {/* Apple-style shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: '-100%', skewX: -45 }}
                whileHover={{ 
                  x: '200%',
                  transition: { duration: 0.8, ease: "easeOut" }
                }}
              />
              
              <span className="relative flex items-center justify-center space-x-3">
                <Eye className="w-6 h-6" />
                <span>Explore Products</span>
                <motion.div
                  className="flex items-center"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </span>
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          {/* <motion.div
            className="mt-8 pt-6 border-t border-slate-200/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <p className="text-slate-600 text-sm mb-4 font-medium">Trusted by Thousands of customers worldwide</p>
            <div className="flex justify-center items-center space-x-6">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="flex items-center"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                >
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                </motion.div>
              ))}
            </div>
          </motion.div> */}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
