"use client";

import { useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, RefObject } from "react";

interface UseOptimizedScrollProps {
  offset?: [string, string];
  stiffness?: number;
  damping?: number;
  mass?: number;
}

export function useOptimizedScroll({
  offset = ["start end", "end start"],
  stiffness = 400,
  damping = 40,
  mass = 0.1
}: UseOptimizedScrollProps = {}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset
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
  scrollYProgress: any,
  range: [number, number] = [0, -50]
) {
  return useTransform(scrollYProgress, [0, 1], range);
}

export function useSmoothOpacity(
  scrollYProgress: any,
  points: [number, number, number, number] = [0, 0.3, 0.7, 1],
  opacityRange: [number, number, number, number] = [0.8, 1, 1, 0.8]
) {
  return useTransform(scrollYProgress, points, opacityRange);
}
