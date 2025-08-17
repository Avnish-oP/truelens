"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ReactNode, useRef, useState, useEffect } from "react";

interface SectionTransitionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

const SectionTransition = ({ 
  children, 
  id, 
  className = "", 
  delay = 0 
}: SectionTransitionProps) => {
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
    offset: ["start 0.8", "end 0.2"]
  });

  // Reduced spring physics for mobile
  const springConfig = {
    stiffness: isMobile ? 200 : 300,
    damping: isMobile ? 25 : 30,
    mass: isMobile ? 0.5 : 0.8
  };
  
  const smoothProgress = useSpring(scrollYProgress, springConfig);
  
  // Reduced parallax movement for mobile
  const y = useTransform(smoothProgress, [0, 1], isMobile ? [15, -15] : [30, -30]);
  const opacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], isMobile ? [1, 1, 1] : [0.95, 1, 0.98]);

  return (
    <motion.div
      ref={ref}
      id={id}
      className={`relative ${isMobile ? '' : 'will-change-transform'} ${className}`}
      style={{ 
        y: isMobile ? undefined : y, 
        opacity, 
        scale,
        transformOrigin: "center center"
      }}
      initial={{ opacity: 0, y: isMobile ? 30 : 60, scale: isMobile ? 1 : 0.9 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          duration: isMobile ? 0.6 : 1.2,
          delay,
          ease: isMobile ? "easeOut" : [0.25, 0.46, 0.45, 0.94]
        }
      }}
      viewport={{ 
        once: true, 
        margin: "-15%",
        amount: isMobile ? 0.1 : 0.3 
      }}
    >
      {children}
    </motion.div>
  );
};

export default SectionTransition;
