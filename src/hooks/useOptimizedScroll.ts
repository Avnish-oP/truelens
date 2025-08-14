"use client";

import { useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface UseOptimizedScrollProps {
  stiffness?: number;
  damping?: number;
  mass?: number;
}

export function useOptimizedScroll({
  stiffness = 400,
  damping = 40,
  mass = 0.1
}: UseOptimizedScrollProps = {}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const springConfig = {
    stiffness,
    damping,
    mass,
    restDelta: 0.0001
  };

  const smoothProgress = useSpring(scrollYProgress, springConfig);

  return { ref, scrollYProgress: smoothProgress };
}

export function useSmoothParallax(
  scrollYProgress: MotionValue<number>,
  range: [number, number] = [0, -50]
) {
  return useTransform(scrollYProgress, [0, 1], range);
}

export function useSmoothOpacity(
  scrollYProgress: MotionValue<number>,
  points: [number, number, number, number] = [0, 0.3, 0.7, 1],
  opacityRange: [number, number, number, number] = [0.8, 1, 1, 0.8]
) {
  return useTransform(scrollYProgress, points, opacityRange);
}
