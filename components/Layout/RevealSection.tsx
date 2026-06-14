"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

export default function RevealSection({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.45, 1, 1, 0.55]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.75, 1], [0.96, 1, 1, 0.97]);
  const y = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [40, 0, 0, -25]);

  return (
    <motion.section
      ref={ref}
      style={{
        opacity,
        scale,
        y,
      }}
    >
      {children}
    </motion.section>
  );
}