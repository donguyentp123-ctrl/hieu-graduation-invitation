"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  Stethoscope,
  Cross,
  Syringe,
  Pill,
  GraduationCap,
} from "lucide-react";

const icons = [
  { Icon: HeartPulse, top: "10%", left: "2%" },
  { Icon: Stethoscope, top: "18%", left: "5%" },
  { Icon: Cross, top: "30%", left: "3%" },
  { Icon: Pill, top: "42%", left: "4%" },
  { Icon: Syringe, top: "55%", left: "2%" },
  { Icon: GraduationCap, top: "70%", left: "5%" },
  { Icon: HeartPulse, top: "82%", left: "3%" },

  { Icon: Stethoscope, top: "12%", right: "4%" },
  { Icon: Pill, top: "24%", right: "2%" },
  { Icon: Cross, top: "38%", right: "5%" },
  { Icon: Syringe, top: "52%", right: "3%" },
  { Icon: GraduationCap, top: "66%", right: "4%" },
  { Icon: HeartPulse, top: "78%", right: "2%" },
];

const stars = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  width: 2 + ((i * 7) % 4),
  height: 2 + ((i * 5) % 4),
  left: `${(i * 23) % 100}%`,
  top: `${(i * 37) % 100}%`,
  duration: 2 + ((i * 3) % 4),
  delay: (i % 10) * 0.25,
}));

export default function FloatingMedicalIcons() {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 hidden overflow-hidden xl:block">
      {stars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          animate={{
            opacity: [0.15, 1, 0.15],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: star.duration,
            delay: star.delay,
            ease: "easeInOut",
          }}
          className="
            absolute
            rounded-full
            bg-[#E7C77C]
            shadow-[0_0_14px_rgba(231,199,124,0.95)]
          "
          style={{
            width: star.width,
            height: star.height,
            left: star.left,
            top: star.top,
          }}
        />
      ))}

      {icons.map(({ Icon, top, left, right }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{
            opacity: [0.35, 0.95, 0.35],
            y: [0, -18, 0],
            rotate: [-8, 8, -8],
            scale: [0.95, 1.18, 0.95],
          }}
          transition={{
            repeat: Infinity,
            duration: 4 + (index % 4),
            delay: index * 0.22,
            ease: "easeInOut",
          }}
          className="
            absolute
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-[#D8C29A]/50
            bg-[#fffdf7]/45
            text-[#B48A4E]
            shadow-[0_0_55px_rgba(216,194,154,0.75)]
            backdrop-blur-sm
          "
          style={{
            top,
            left,
            right,
          }}
        >
          <Icon size={28} strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  );
}