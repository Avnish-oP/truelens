"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Eye, Palette, Shield, Layers, Sparkles, Heart, LucideEye, EyeClosed, ScanEye } from "lucide-react";

const ProductsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const products = [
    {
      title: "Daily Soft Lenses",
      description: "Ultra-comfortable daily disposables with advanced moisture technology for all-day clarity and freshness.",
      icon: Eye,
      gradient: "from-blue-500 to-cyan-400",
      bgGradient: "from-blue-50 to-cyan-50",
      accent: "bg-blue-500"
    },
    {
      title: "Bi-Weekly/Monthly Lenses",
      description: "Comfortable and convenient lenses designed for extended wear, providing clear vision and hydration.",
      icon: ScanEye,
      gradient: "from-rose-500 to-red-400",
      bgGradient: "from-rose-50 to-red-50",
      accent: "bg-rose-500"
    },
    {
      title: "Colored Contact Lenses",
      description: "Transform your look with our premium colored lenses featuring natural patterns and vibrant hues.",
      icon: Palette,
      gradient: "from-purple-500 to-pink-400",
      bgGradient: "from-purple-50 to-pink-50",
      accent: "bg-purple-500"
    },
    {
      title: "Toric for Astigmatism",
      description: "Precision-engineered lenses with advanced stabilization technology for crisp, stable vision.",
      icon: Shield,
      gradient: "from-emerald-500 to-teal-400",
      bgGradient: "from-emerald-50 to-teal-50",
      accent: "bg-emerald-500"
    },
    {
      title: "Multifocal Lenses",
      description: "Seamless near and far vision correction with progressive technology for presbyopia management.",
      icon: Layers,
      gradient: "from-orange-500 to-amber-400",
      bgGradient: "from-orange-50 to-amber-50",
      accent: "bg-orange-500"
    },
    {
      title: "Solutions",
      description: "Custom-designed lenses for unique eye conditions including keratoconus and irregular corneas.",
      icon: Sparkles,
      gradient: "from-indigo-500 to-blue-400",
      bgGradient: "from-indigo-50 to-blue-50",
      accent: "bg-indigo-500"
    },
    
  ];

  return (
    <section id="products" className="relative px-4 py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/30 overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/10 to-purple-200/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-200/10 to-cyan-200/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
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
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-700 font-medium mb-6">
            <Eye className="w-4 h-4" />
            Our Premium Collection
          </div> */}
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            Our Products
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of premium contact lenses <Eye className="inline-block w-5 h-5 text-blue-900" />
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
                whileHover={{ 
                  y: -12,
                  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                }}
              >
                <div className={`relative h-full p-8 bg-gradient-to-br ${product.bgGradient} backdrop-blur-sm rounded-3xl border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
                  {/* Animated background effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                    initial={false}
                    animate={{ x: [-100, 300] }}
                    transition={{ 
                      duration: 1.5, 
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  />
                  
                  {/* Floating orb */}
                  <motion.div
                    className={`absolute top-6 right-6 w-16 h-16 bg-gradient-to-r ${product.gradient} rounded-full opacity-10 group-hover:opacity-20`}
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                  />
                  
                  {/* Icon container */}
                  <motion.div
                    className={`relative w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${product.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.4 }
                    }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                    
                    {/* Icon glow effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-30 blur-md`}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                      {product.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${product.gradient} origin-left`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                  
                  {/* Decorative corner dots */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-gradient-to-r from-white/40 to-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-gradient-to-r from-white/40 to-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
