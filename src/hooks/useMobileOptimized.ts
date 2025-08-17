"use client";

import { useState, useEffect } from "react";

interface UseMobileOptimizedOptions {
  threshold?: number;
  enableTouchCheck?: boolean;
}

export function useMobileOptimized({
  threshold = 768,
  enableTouchCheck = true
}: UseMobileOptimizedOptions = {}) {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      const isWidthMobile = window.innerWidth < threshold;
      const isTouchDevice = enableTouchCheck && 'ontouchstart' in window;
      const isUserAgentMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      
      setIsMobile(isWidthMobile || isTouchDevice || isUserAgentMobile);
    };
    
    checkMobile();
    
    const debouncedResize = debounce(checkMobile, 150);
    window.addEventListener('resize', debouncedResize, { passive: true });
    
    return () => window.removeEventListener('resize', debouncedResize);
  }, [threshold, enableTouchCheck]);
  
  return { isMobile };
}

// Debounce utility for better performance
function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export function getMobileAnimationConfig(isMobile: boolean) {
  return {
    // Reduced animation durations for mobile
    duration: isMobile ? 0.4 : 0.8,
    delay: isMobile ? 0.1 : 0.2,
    
    // Simpler easing for mobile
    ease: isMobile ? "easeOut" : [0.25, 0.46, 0.45, 0.94],
    
    // Reduced parallax ranges
    parallaxRange: isMobile ? 10 : 30,
    
    // Simplified transforms
    enableComplexTransforms: !isMobile,
    
    // Reduced blur effects
    maxBlur: isMobile ? 2 : 8,
    
    // Animation count limits
    maxParticles: isMobile ? 3 : 8,
    
    // Spring physics
    springConfig: {
      stiffness: isMobile ? 200 : 300,
      damping: isMobile ? 25 : 30,
      mass: isMobile ? 0.5 : 0.8
    }
  };
}
