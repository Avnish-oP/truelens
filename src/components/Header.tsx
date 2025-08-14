"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Eye, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Contact', href: '#contact' }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 px-4 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-blue-500/10 border-b border-blue-200/30' 
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/30 to-indigo-50/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
      <nav className="container-custom relative z-10">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              <motion.div 
                className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.8 }}
                animate={{ 
                  boxShadow: [
                    "0 0 0 0 rgba(59, 130, 246, 0.3)",
                    "0 0 0 10px rgba(59, 130, 246, 0)",
                  ]
                }}
                style={{
                  animationDuration: "2s",
                  animationIterationCount: "infinite"
                }}
              >
                <Eye className="w-5 h-5 text-white" />
              </motion.div>
              <motion.div 
                className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.h1 
                className="text-xl font-bold font-poppins bg-gradient-to-r from-slate-800 via-blue-700 to-purple-700 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                Truelens
              </motion.h1>
              <motion.p 
                className="text-xs text-slate-600 font-medium -mt-1 tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                INTERNATIONALS
              </motion.p>
            </motion.div>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2 px-1"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden p-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="md:hidden overflow-hidden"
        >
          <motion.div 
            className="py-4 space-y-2 border-t border-blue-200/30 bg-white/90 backdrop-blur-sm rounded-b-lg"
            variants={staggerContainer}
            initial="initial"
            animate={isMenuOpen ? "animate" : "initial"}
          >
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="block py-3 px-4 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 relative group"
                onClick={() => setIsMenuOpen(false)}
                variants={fadeInUp}
                whileHover={{ x: 8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 origin-top rounded-r"
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0.3 }}
                />
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;
