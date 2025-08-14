"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Eye, 
  Shield, 
  Globe, 
  DollarSign, 
  Microscope,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Star,
  CheckCircle,
  Award,
  Users,
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Components
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-white/20"
    >
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="text-2xl font-bold font-poppins text-gradient"
            whileHover={{ scale: 1.05 }}
          >
            Truelens Internationals
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Products', 'Why Choose Us', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-text hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.button 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Quote
            </motion.button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-primary"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-white/10 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container-custom text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-effect p-8 md:p-12 max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold font-poppins mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Truelens Internationals
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-accent font-medium"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Precision in Every Vision
          </motion.p>
          
          <motion.p 
            className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Professional supplier of high-quality eye lenses combining medical-grade precision with style. 
            Providing customers with both comfort and beauty.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button 
              className="btn-primary bg-accent hover:bg-accent/90 text-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Products <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
            <motion.button 
              className="btn-secondary border-white text-white hover:bg-white hover:text-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </motion.div>
    </section>
  );
};

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeInLeft}>
            <motion.span 
              className="text-primary font-semibold uppercase tracking-wide"
              variants={fadeInUp}
            >
              About Us
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold font-poppins text-secondary mt-4 mb-6"
              variants={fadeInUp}
            >
              Precision in Every Vision
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 mb-6 leading-relaxed"
              variants={fadeInUp}
            >
              Truelens Internationals stands at the forefront of eye lens technology, 
              combining decades of expertise with cutting-edge innovation. Our commitment 
              to excellence ensures that every lens we produce meets the highest standards 
              of medical-grade precision while delivering uncompromising comfort and style.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              variants={fadeInUp}
            >
              Founded with a vision to revolutionize the eye care industry, we serve customers 
              worldwide with our comprehensive range of premium lenses, backed by rigorous 
              quality assurance and dedicated customer support.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 gap-6"
              variants={fadeInUp}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1M+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-gray-600">Quality Assured</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={fadeInRight}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="bg-gradient-primary p-6 rounded-xl text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Eye className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="text-sm opacity-90">Medical-grade materials for superior comfort</p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 mt-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Award className="w-12 h-12 mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2 text-secondary">Certified</h3>
                <p className="text-sm text-gray-600">International quality certifications</p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Users className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-secondary">Expert Team</h3>
                <p className="text-sm text-gray-600">Dedicated professionals at your service</p>
              </motion.div>
              
              <motion.div 
                className="bg-accent p-6 rounded-xl text-secondary mt-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Globe className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                <p className="text-sm opacity-90">Worldwide shipping and support</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ProductsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const products = [
    {
      title: "Soft Contact Lenses",
      description: "Daily, weekly, and monthly soft lenses for ultimate comfort and clarity.",
      icon: Eye,
      color: "bg-gradient-to-br from-primary to-primary/80"
    },
    {
      title: "Colored Lenses",
      description: "Enhance your natural beauty with our range of safe, FDA-approved colored lenses.",
      icon: Star,
      color: "bg-gradient-to-br from-accent to-yellow-400"
    },
    {
      title: "Toric Lenses",
      description: "Specialized lenses for astigmatism correction with superior stability.",
      icon: Shield,
      color: "bg-gradient-to-br from-secondary to-blue-600"
    },
    {
      title: "Multifocal Lenses",
      description: "Progressive lenses for presbyopia with seamless vision at all distances.",
      icon: Microscope,
      color: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      title: "Specialty Lenses",
      description: "Custom solutions for unique eye conditions and special requirements.",
      icon: Award,
      color: "bg-gradient-to-br from-green-500 to-emerald-600"
    },
    {
      title: "Care Solutions",
      description: "Complete lens care systems to maintain hygiene and extend lens life.",
      icon: CheckCircle,
      color: "bg-gradient-to-br from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="products" className="section-padding bg-neutral" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wide">Our Products</span>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-secondary mt-4 mb-6">
            Complete Vision Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of premium eye lenses designed to meet every vision need
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              variants={fadeInUp}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              whileHover={{ y: -10 }}
            >
              <div className={`${product.color} p-8 relative overflow-hidden`}>
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                />
                <product.icon className="w-12 h-12 text-white mb-4 relative z-10" />
                <h3 className="text-xl font-bold text-white mb-2 relative z-10">{product.title}</h3>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                <motion.button 
                  className="w-full btn-secondary group-hover:bg-primary group-hover:text-white group-hover:border-primary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const WhyChooseUsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Shield,
      title: "Medical-Grade Materials",
      description: "All our lenses are manufactured using FDA-approved, biocompatible materials for maximum safety."
    },
    {
      icon: Globe,
      title: "International Shipping",
      description: "Fast, secure delivery to over 50 countries worldwide with full tracking and insurance."
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description: "Premium quality at affordable prices with flexible payment options and bulk discounts."
    },
    {
      icon: Microscope,
      title: "R&D Innovation",
      description: "Continuous research and development to bring you the latest in eye lens technology."
    }
  ];

  return (
    <section id="why-choose-us" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wide">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-secondary mt-4 mb-6">
            Your Vision, Our Commitment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference that quality, innovation, and dedicated service can make
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="text-center group"
            >
              <motion.div 
                className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotateY: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-secondary mb-4 font-poppins">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center text-secondary mb-12 font-poppins">
            Trusted Certifications & Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {['FDA', 'CE', 'ISO 9001', 'WHO'].map((cert) => (
              <motion.div
                key={cert}
                className="bg-gray-100 rounded-lg p-6 text-center font-bold text-2xl text-gray-500"
                whileHover={{ scale: 1.05, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-primary" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold uppercase tracking-wide">Contact Us</span>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mt-4 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to experience the difference? Contact us today for personalized consultation
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="grid lg:grid-cols-2 gap-12"
        >
          <motion.div variants={fadeInLeft}>
            <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-2xl">
              <div className="mb-6">
                <label className="block text-white mb-2 font-medium">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-white mb-2 font-medium">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-white mb-2 font-medium">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Tell us about your requirements..."
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-accent text-secondary py-3 px-6 rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div variants={fadeInRight} className="text-white">
            <h3 className="text-2xl font-bold mb-8 font-poppins">Contact Information</h3>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-center glass-effect p-4 rounded-lg"
                whileHover={{ scale: 1.02 }}
              >
                <Phone className="w-6 h-6 text-accent mr-4" />
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-white/80">+1 (555) 123-4567</div>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center glass-effect p-4 rounded-lg"
                whileHover={{ scale: 1.02 }}
              >
                <Mail className="w-6 h-6 text-accent mr-4" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-white/80">info@truelens-intl.com</div>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center glass-effect p-4 rounded-lg"
                whileHover={{ scale: 1.02 }}
              >
                <MapPin className="w-6 h-6 text-accent mr-4" />
                <div>
                  <div className="font-medium">Address</div>
                  <div className="text-white/80">
                    123 Vision Street<br />
                    Innovation District<br />
                    Tech City, TC 12345
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-4">Business Hours</h4>
              <div className="glass-effect p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold font-poppins text-accent mb-4">
              Truelens Internationals
            </h3>
            <p className="text-white/80 mb-4">
              Precision in Every Vision. Your trusted partner for high-quality eye lenses worldwide.
            </p>
            <div className="flex space-x-4">
              {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                <motion.div
                  key={social}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center cursor-pointer"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 200, 87, 0.2)' }}
                >
                  <span className="text-xs">{social[0]}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-accent transition-colors">Soft Lenses</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Colored Lenses</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Toric Lenses</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Multifocal Lenses</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Quality Assurance</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">News</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Returns</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60">
            © 2024 Truelens Internationals. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-accent transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Page Component
export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <ProductsSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
