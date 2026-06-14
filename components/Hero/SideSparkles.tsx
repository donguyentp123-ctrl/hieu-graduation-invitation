"use client";

import { motion } from "framer-motion";

const leftDots = [
  { top: "18%", left: "8%", size: 8, delay: 0 },
  { top: "28%", left: "13%", size: 5, delay: 0.4 },
  { top: "42%", left: "6%", size: 7, delay: 0.8 },
  { top: "56%", left: "12%", size: 4, delay: 1.1 },
  { top: "72%", left: "7%", size: 6, delay: 1.4 },
];

const rightDots = [
  { top: "20%", right: "8%", size: 7, delay: 0.2 },
  { top: "34%", right: "13%", size: 5, delay: 0.6 },
  { top: "48%", right: "6%", size: 8, delay: 1 },
  { top: "62%", right: "12%", size: 4, delay: 1.3 },
  { top: "76%", right: "7%", size: 6, delay: 1.6 },
];

export default function SideSparkles() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-[#D8C29A]/10 to-transparent" />
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#D8C29A]/10 to-transparent" />

      {leftDots.map((dot, index) => (
        <motion.span
          key={`left-${index}`}
          className="absolute rounded-full bg-[#F7E7B8] shadow-[0_0_18px_rgba(216,194,154,0.95)]"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.7, 1.7, 0.7],
            y: [0, -18, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3.2,
            delay: dot.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {rightDots.map((dot, index) => (
        <motion.span
          key={`right-${index}`}
          className="absolute rounded-full bg-[#F7E7B8] shadow-[0_0_18px_rgba(216,194,154,0.95)]"
          style={{
            top: dot.top,
            right: dot.right,
            width: dot.size,
            height: dot.size,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.7, 1.7, 0.7],
            y: [0, -18, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3.2,
            delay: dot.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}