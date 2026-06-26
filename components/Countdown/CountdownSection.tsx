"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const targetDate = new Date("2026-07-17T10:00:00+07:00").getTime();

function getTimeLeft() {
  const now = new Date().getTime();
  const diff = Math.max(targetDate - now, 0);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function TimeCard({
  value,
  label,
  delay = 0,
}: {
  value: number;
  label: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.7, delay }}
      className="
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-[#D8C29A]/70
        bg-white/65
        px-6
        py-7
        text-center
        shadow-[0_18px_60px_rgba(31,58,46,0.10)]
        backdrop-blur-md
      "
    >
      <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-[#D8C29A] to-transparent" />

      <AnimatePresence mode="popLayout">
        <motion.p
          key={value}
          initial={{ y: 22, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -22, opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.35 }}
          className="
            heading-font
            text-5xl
            font-semibold
            text-[#1F3A2E]
            md:text-6xl
          "
        >
          {String(value).padStart(2, "0")}
        </motion.p>
      </AnimatePresence>

      <p className="mt-3 text-xs font-medium uppercase tracking-[4px] text-[#B48A4E]">
        {label}
      </p>
    </motion.div>
  );
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    { label: "Ngày", value: timeLeft.days },
    { label: "Giờ", value: timeLeft.hours },
    { label: "Phút", value: timeLeft.minutes },
    { label: "Giây", value: timeLeft.seconds },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-24">
      {/* Background */}
      <Image
        src="/images/countdown-bg.png"
        alt=""
        fill
        className="object-cover opacity-75"
      />

      <div className="absolute inset-0 bg-[#FAF7F2]/45" />

      {/* Gold glow */}
      <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D8C29A]/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-sm uppercase tracking-[7px] text-[#B48A4E]"
        >
          Đếm ngược đến ngày
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="
             font-signature
    metallic-gold-text

    mt-3

    w-full
    max-w-none

    overflow-visible

    px-4

    text-[clamp(3rem,6vw,5.8rem)]

    leading-[1.35]

    text-center
          "
        >
          Chúng ta gặp nhau
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#1F3A2E]/75"
        >
          Cùng nhau đếm từng khoảnh khắc để đến ngày gặp gỡ, chúc mừng và lưu giữ những kỷ niệm thật đẹp.
        </motion.p>

        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
          {items.map((item, index) => (
            <TimeCard
              key={item.label}
              value={item.value}
              label={item.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}