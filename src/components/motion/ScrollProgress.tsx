"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin brand-orange progress bar fixed to the top of the viewport. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] bg-gradient-to-r from-[#FF5E14] via-[#FF8A4C] to-[#E04805] shadow-[0_0_12px_rgba(255,94,20,0.6)]"
    />
  );
}
