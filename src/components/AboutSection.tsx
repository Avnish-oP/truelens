"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Users,
  Trophy,
  Clock,
  Award,
  Eye,
  Shield,
  Globe,
  Sparkles,
  Truck,
  Phone,
} from "lucide-react";

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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut" as const,
      },
    },
  };

  // Scroll trigger variants
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const slideInLeftVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const slideInRightVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative px-4 py-24 bg-gradient-to-br from-slate-50/80 via-blue-50/40 to-indigo-50/60"
      ref={ref}
    >
      {/* Minimal background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-32 left-32 w-48 h-48 bg-gradient-to-r from-blue-200/6 to-purple-200/6 rounded-full blur-3xl"
          animate={{
            x: [0, 25, 0],
            y: [0, -15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-64 h-64 bg-gradient-to-r from-indigo-200/6 to-cyan-200/6 rounded-full blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 25, 0],
            scale: [1, 0.95, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex text-3xl items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-blue-700 font-semibold antialiased mb-"
          >
            <Eye className="w-8 h-8" />
            About Us
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
        </motion.div> */}

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Text content with scroll triggers */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeftVariants}
            className="space-y-8"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUpVariants}
              className="space-y-6"
            >
              <motion.h3
                className="text-5xl font-bold text-slate-900"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                About Us
              </motion.h3>

              <motion.p
                className="text-xl text-slate-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                We are a trusted global B2B exporter of branded contact lenses,
                headquartered in Gurugram, Haryana(India) and Registered office
                in Sheung wan(Hongkong). Our range includes spherical,
                multifocal, coloured, and toric lenses including lens solutions.
                Committed to customer orientation, timely delivery, and best
                market practices, we ensure quality products and seamless
                service to meet the evolving needs of our valued partners
                worldwide.
              </motion.p>

              <motion.p
                className="text-xl text-slate-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                As a leading exporter, we supply branded contact lenses
                worldwide, ensuring genuine products, reliable delivery, and
                tailored solutions to meet diverse client needs.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* <motion.div
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
            </motion.div> */}

          {/* Right side - Feature cards with scroll triggers */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRightVariants}
            className="relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: "FDA Approved",
                  description:
                    "FDA-approved lenses with rigorous quality control and safety standards.",
                  gradient: "from-blue-500/10 to-cyan-500/10",
                  iconColor: "from-blue-500 to-cyan-500",
                  delay: 0.1,
                },
                {
                  icon: Globe,
                  title: "Global Reach",
                  description:
                    "Serving customers in 20+ countries with fast, secure worldwide delivery.",
                  gradient: "from-indigo-500/10 to-purple-500/10",
                  iconColor: "from-indigo-500 to-purple-500",
                  delay: 0.2,
                },
                {
                  icon: Truck,
                  title: "Seamless Delivery",
                  description:
                    "Reliable logistics network ensuring timely and Hassle-free delivery of products.",
                  gradient: "from-purple-500/10 to-pink-500/10",
                  iconColor: "from-purple-500 to-pink-500",
                  delay: 0.3,
                },
                {
                  icon: Phone,
                  title: "Customer Support",
                  description: "24/7 customer support for all your inquiries.",
                  gradient: "from-cyan-500/10 to-teal-500/10",
                  iconColor: "from-cyan-500 to-teal-500",
                  delay: 0.4,
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      delay: feature.delay,
                      ease: "easeOut",
                    },
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{
                    scale: 1.02,
                    y: -8,
                    transition: { duration: 0.3 },
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

                  <motion.div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${feature.iconColor} flex items-center justify-center mb-4`}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 group-hover:text-slate-700 transition-colors leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative corner element */}
                  <motion.div
                    className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{
                      scale: 1,
                      transition: { duration: 0.2 },
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Floating Elements with scroll triggers */}
            <motion.div
              className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-xl"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
            />

            <motion.div
              className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-indigo-200/30 to-cyan-200/30 rounded-full blur-xl"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
              animate={{
                rotate: -360,
                scale: [1, 0.8, 1],
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
