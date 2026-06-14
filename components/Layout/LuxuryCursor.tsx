"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function LuxuryCursor() {
  const [isDesktop, setIsDesktop] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const smoothX = useSpring(mouseX, {
    stiffness: 180,
    damping: 28,
    mass: 0.4,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 180,
    damping: 28,
    mass: 0.4,
  });

  useEffect(() => {
    setIsDesktop(window.matchMedia("(pointer: fine)").matches);

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, [mouseX, mouseY]);

  if (!isDesktop) return null;

  return (
    <motion.div
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[999]
        hidden
        h-12
        w-12
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        border
        border-[#D8C29A]/70
        bg-[#D8C29A]/10
        shadow-[0_0_35px_rgba(216,194,154,0.65)]
        backdrop-blur-[1px]
        md:block
      "
      style={{
        x: smoothX,
        y: smoothY,
      }}
    >
      <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D8C29A]" />
    </motion.div>
  );
}