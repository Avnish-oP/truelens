"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Globe, Award, Microscope, Clock, CheckCircle } from "lucide-react";

const WhyChooseUsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  const features = [
    {
      icon: Shield,
      title: "Medical-Grade Quality",
      description: "FDA-approved materials with rigorous quality control and biocompatible design for ultimate safety.",
      color: "blue"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Trusted worldwide with secure shipping to 50+ countries and comprehensive international support.",
      color: "emerald"
    },
    {
      icon: Award,
      title: "Premium Standards",
      description: "Industry-leading quality standards with advanced manufacturing processes and expert craftsmanship.",
      color: "purple"
    },
    {
      icon: Microscope,
      title: "Advanced Technology",
      description: "Continuous innovation in lens technology with cutting-edge research and development initiatives.",
      color: "orange"
    }
  ];

  const trustStats = [
    { icon: CheckCircle, number: "100%", label: "Quality Guarantee", color: "emerald" },
    { icon: Clock, number: "24/7", label: "Expert Support", color: "blue" },
    { icon: Award, number: "15+", label: "Years Experience", color: "purple" }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        icon: "from-blue-500 to-blue-600",
        bg: "from-blue-50 to-blue-100/50",
        text: "text-blue-600",
        border: "border-blue-200/50"
      },
      emerald: {
        icon: "from-emerald-500 to-emerald-600", 
        bg: "from-emerald-50 to-emerald-100/50",
        text: "text-emerald-600",
        border: "border-emerald-200/50"
      },
      purple: {
        icon: "from-purple-500 to-purple-600",
        bg: "from-purple-50 to-purple-100/50", 
        text: "text-purple-600",
        border: "border-purple-200/50"
      },
      orange: {
        icon: "from-orange-500 to-orange-600",
        bg: "from-orange-50 to-orange-100/50",
        text: "text-orange-600", 
        border: "border-orange-200/50"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="why-choose-us" className="py-24 px-4 bg-gradient-to-br from-white via-slate-50/50 to-gray-50" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-100 to-blue-100 rounded-full text-slate-700 font-medium mb-6">
            <Shield className="w-4 h-4" />
            Why Choose Truelens
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent mb-6">
            Excellence in Every Detail
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We're committed to providing exceptional eye care solutions with unmatched 
            quality, service, and innovation that you can trust.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const colorClasses = getColorClasses(feature.color);
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
                whileHover={{ 
                  y: -6,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                }}
              >
                <div className={`relative h-full p-6 bg-gradient-to-br ${colorClasses.bg} rounded-2xl border ${colorClasses.border} shadow-sm hover:shadow-lg transition-all duration-300`}>
                  {/* Icon */}
                  <motion.div
                    className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-r ${colorClasses.icon} flex items-center justify-center shadow-lg group-hover:shadow-xl`}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">
                    {feature.description}
                  </p>

                  {/* Subtle accent line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${colorClasses.icon} origin-left`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust Statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6"
        >
          {trustStats.map((stat, index) => {
            const IconComponent = stat.icon;
            const colorClasses = getColorClasses(stat.color);
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative text-center"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <div className={`p-8 bg-gradient-to-br ${colorClasses.bg} rounded-2xl border ${colorClasses.border} shadow-sm hover:shadow-md transition-all duration-300`}>
                  <motion.div
                    className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${colorClasses.icon} flex items-center justify-center`}
                    whileHover={{ 
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.4 }
                    }}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <div className={`text-3xl font-bold ${colorClasses.text} mb-2`}>
                    {stat.number}
                  </div>
                  
                  <div className="text-slate-700 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
