"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Eye,
  Calendar,
  Palette,
  Focus,
  Layers,
  Droplets,
  ScanEye,
} from "lucide-react";
import Image from "next/image";

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
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  const products = [
    {
      title: "Daily Soft Lenses",
      description:
        "Ultra-comfortable daily disposables with advanced moisture technology for all-day clarity and freshness.",
      icon: Eye,
      color: "blue",
      bgImage:
        "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)",
    },
    {
      title: "Bi-Weekly/Monthly Lenses",
      description:
        "Comfortable and convenient lenses designed for extended wear, providing clear vision and hydration.",
      icon: ScanEye,
      color: "emerald",
      bgImage:
        "radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(5, 150, 105, 0.15) 0%, transparent 50%)",
    },
    {
      title: "Colored Contact Lenses",
      description:
        "Transform your look with our premium colored lenses featuring natural patterns and vibrant hues.",
      icon: Palette,
      color: "purple",
      bgImage:
        "radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)",
    },
    {
      title: "Toric for Astigmatism",
      description:
        "Precision-engineered lenses with advanced stabilization technology for crisp, stable vision.",
      icon: Focus,
      color: "orange",
      bgImage:
        "radial-gradient(circle at 20% 80%, rgba(251, 146, 60, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(249, 115, 22, 0.15) 0%, transparent 50%)",
    },
    {
      title: "Multifocal Lenses",
      description:
        "Seamless near and far vision correction with progressive technology for presbyopia management.",
      icon: Layers,
      color: "rose",
      bgImage:
        "radial-gradient(circle at 20% 80%, rgba(244, 63, 94, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(225, 29, 72, 0.15) 0%, transparent 50%)",
    },
    {
      title: "Care Solutions",
      description:
        "Premium lens care solutions and accessories for optimal hygiene and lens longevity.",
      icon: Droplets,
      color: "cyan",
      bgImage:
        "radial-gradient(circle at 20% 80%, rgba(6, 182, 212, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(8, 145, 178, 0.15) 0%, transparent 50%)",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        icon: "text-blue-600",
        iconBg: "bg-blue-100",
        border: "border-blue-200/50",
        hover: "group-hover:border-blue-300/70",
      },
      emerald: {
        icon: "text-emerald-600",
        iconBg: "bg-emerald-100",
        border: "border-emerald-200/50",
        hover: "group-hover:border-emerald-300/70",
      },
      purple: {
        icon: "text-purple-600",
        iconBg: "bg-purple-100",
        border: "border-purple-200/50",
        hover: "group-hover:border-purple-300/70",
      },
      orange: {
        icon: "text-orange-600",
        iconBg: "bg-orange-100",
        border: "border-orange-200/50",
        hover: "group-hover:border-orange-300/70",
      },
      rose: {
        icon: "text-rose-600",
        iconBg: "bg-rose-100",
        border: "border-rose-200/50",
        hover: "group-hover:border-rose-300/70",
      },
      cyan: {
        icon: "text-cyan-600",
        iconBg: "bg-cyan-100",
        border: "border-cyan-200/50",
        hover: "group-hover:border-cyan-300/70",
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section
      id="products"
      className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 overflow-hidden"
      ref={ref}
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-cyan-400/5 to-indigo-400/5 rounded-full blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Our Products
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of premium contact lenses designed
            for comfort, clarity, and style
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {products.map((product, index) => {
            const IconComponent = product.icon;
            const colorClasses = getColorClasses(product.color);

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group cursor-pointer"
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                <div
                  className={`relative h-full p-8 bg-white/80 backdrop-blur-sm rounded-3xl border-2 ${colorClasses.border} ${colorClasses.hover} shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden`}
                  style={{
                    backgroundImage: product.bgImage,
                  }}
                >
                  {/* Subtle shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full"
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />

                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 ${colorClasses.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-shadow duration-300`}
                    whileHover={{
                      scale: 1.05,
                      rotate: [0, -2, 2, 0],
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {product.icon === Focus ? (
                      <Image
                        alt=""
                        width={32}
                        height={32}
                        src={"/toric.svg"}
                        className={`w-12 h-18 ${colorClasses.icon}`}
                      />
                    ) : product.icon === Layers ? (
                      <Image
                        alt=""
                        width={32}
                        height={32}
                        src={"/mf.svg"}
                        className={`w-12 h-18 ${colorClasses.icon}`}
                      />
                    ) : (
                      <IconComponent
                        className={`w-8 h-8 ${colorClasses.icon}`}
                      />
                    )}
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                      {product.description}
                    </p>

                    {/* Learn More Link */}
                  </div>

                  {/* Bottom accent line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 ${colorClasses.iconBg} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`}
                  />
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
