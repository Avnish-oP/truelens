"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Trophy, Clock, Award, Eye, Shield, Globe, Sparkles } from "lucide-react";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut" as const
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  return (
    <section id="about" className="relative px-4 py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-indigo-200/20 to-cyan-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-blue-700 font-medium mb-6"
          >
            <Eye className="w-4 h-4" />
            About Our Vision
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6"
          >
            Truelens Internationals
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Pioneering the future of vision care with innovative contact lens solutions 
            that combine cutting-edge technology, medical-grade quality, and unparalleled comfort.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-900">
                Excellence in Every Lens
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                With over 15 years of expertise in the eye care industry, we&apos;ve revolutionized 
                how people experience vision correction. Our commitment to innovation and quality 
                has earned the trust of over 50,000 customers worldwide.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Every lens undergoes rigorous testing and quality assurance to ensure optimal 
                comfort, clarity, and safety. We don&apos;t just sell lenses – we deliver confidence 
                in every blink.
              </p>
            </motion.div>
            
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Users, number: "50K+", label: "Happy Customers", color: "from-blue-500 to-blue-600" },
                { icon: Trophy, number: "15+", label: "Years Experience", color: "from-indigo-500 to-indigo-600" },
                { icon: Clock, number: "24/7", label: "Customer Support", color: "from-purple-500 to-purple-600" },
                { icon: Award, number: "99%", label: "Satisfaction Rate", color: "from-cyan-500 to-cyan-600" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="relative p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300`}>
                      <stat.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                    <div className="text-sm font-medium text-slate-600">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { 
                  icon: Shield, 
                  title: "Medical Grade Quality", 
                  description: "FDA-approved materials with rigorous quality control and safety standards.",
                  gradient: "from-blue-500/10 to-cyan-500/10",
                  iconColor: "from-blue-500 to-cyan-500"
                },
                { 
                  icon: Globe, 
                  title: "Global Reach", 
                  description: "Serving customers in 50+ countries with fast, secure worldwide delivery.",
                  gradient: "from-indigo-500/10 to-purple-500/10",
                  iconColor: "from-indigo-500 to-purple-500"
                },
                { 
                  icon: Sparkles, 
                  title: "Innovation First", 
                  description: "Continuously researching breakthrough technologies in vision correction.",
                  gradient: "from-purple-500/10 to-pink-500/10",
                  iconColor: "from-purple-500 to-pink-500"
                },
                { 
                  icon: Eye, 
                  title: "Expert Support", 
                  description: "Professional eye care specialists available for personalized assistance.",
                  gradient: "from-cyan-500/10 to-teal-500/10",
                  iconColor: "from-cyan-500 to-teal-500"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.02,
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  className={`relative p-6 bg-gradient-to-br ${feature.gradient} backdrop-blur-sm rounded-3xl border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden`}
                >
                  {/* Animated background effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                    animate={{ x: [-100, 100] }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                  
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${feature.iconColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-600 group-hover:text-slate-700 transition-colors leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Decorative corner element */}
                  <div className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
            
            {/* Floating Elements */}
            <motion.div
              className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-xl"
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            
            <motion.div
              className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-indigo-200/30 to-cyan-200/30 rounded-full blur-xl"
              animate={{ 
                rotate: -360,
                scale: [1, 0.8, 1]
              }}
              transition={{ 
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            
            {/* Lens reflection effect */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-blue-200/20 rounded-full"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
