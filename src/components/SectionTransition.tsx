"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";

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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"]
  });

  // Apple-style smooth parallax with spring physics
  const springConfig = {
    stiffness: 300,
    damping: 30,
    mass: 0.8
  };
  
  const smoothProgress = useSpring(scrollYProgress, springConfig);
  
  // Smooth, subtle parallax movement
  const y = useTransform(smoothProgress, [0, 1], [30, -30]);
  const opacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.95, 1, 0.98]);

  return (
    <motion.div
      ref={ref}
      id={id}
      className={`relative will-change-transform ${className}`}
      style={{ 
        y, 
        opacity, 
        scale,
        transformOrigin: "center center"
      }}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          duration: 1.2,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]  // Apple's signature easing
        }
      }}
      viewport={{ 
        once: true, 
        margin: "-15%",
        amount: 0.3 
      }}
    >
      {children}
    </motion.div>
  );
};

export default SectionTransition;
