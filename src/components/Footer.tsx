"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Eye, Heart, Shield, Clock } from "lucide-react";

const Footer = () => {
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

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden m-0 p-0">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-400/5 to-cyan-400/5 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container-custom relative z-10 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <motion.div
                className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.4 }
                }}
              >
                <Eye className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  Truelens Internationals
                </h3>
                <p className="text-slate-300 text-sm">Premium Vision Solutions</p>
              </div>
            </div>
            
            <p className="text-slate-300 leading-relaxed mb-8 max-w-md">
              Your trusted partner in vision care since 2009. We provide premium quality contact lenses 
              with medical-grade precision, ensuring exceptional comfort and crystal-clear vision for customers worldwide.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Shield, text: "FDA Approved", color: "from-emerald-500 to-emerald-600" },
                { icon: Heart, text: "50K+ Happy Customers", color: "from-rose-500 to-rose-600" },
                { icon: Clock, text: "24/7 Support", color: "from-blue-500 to-blue-600" },
                { icon: Eye, text: "15+ Years Experience", color: "from-purple-500 to-purple-600" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 text-sm"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                    <item.icon className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-slate-300">{item.text}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
                { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
                { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
                { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-700" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center ${social.color} transition-all duration-300 group`}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -3,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "#about" },
                { name: "Our Products", href: "#products" },
                { name: "Why Choose Us", href: "#why-choose-us" },
                { name: "Contact Us", href: "#contact" },
                { name: "Customer Reviews", href: "#reviews" },
                { name: "Eye Care Tips", href: "#tips" }
              ].map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-all duration-300 group flex items-center"
                    whileHover={{ x: 6 }}
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold text-white mb-6">Get In Touch</h4>
            <div className="space-y-5">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "support@truelens-intl.com",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+1 (555) 123-4567",
                  color: "from-emerald-500 to-emerald-600"
                },
                {
                  icon: MapPin,
                  label: "Address",
                  value: "123 Vision Boulevard, Innovation District\nNew York, NY 10001",
                  color: "from-purple-500 to-purple-600"
                }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${contact.color} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200`}>
                      <contact.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm mb-1">{contact.label}</p>
                      <p className="text-slate-200 group-hover:text-white transition-colors whitespace-pre-line">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/10 mt-16 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-slate-400 text-sm">
                © 2025 Truelens Internationals. All rights reserved.
              </p>
              <p className="text-slate-500 text-xs mt-1">
                Designed with care for your vision needs.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              {[
                { name: "Terms of Service", href: "#terms" },
                { name: "Privacy Policy", href: "#privacy" },
                { name: "Cookie Policy", href: "#cookies" },
                { name: "Accessibility", href: "#accessibility" }
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-colors duration-300"
                  whileHover={{ y: -1 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
