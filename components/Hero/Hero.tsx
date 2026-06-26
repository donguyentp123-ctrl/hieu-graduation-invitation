"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Sparkles from "./Sparkles";
import SideSparkles from "./SideSparkles";
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
} as const;

const item = {
  hidden: {
    opacity: 0,
    y: 16,
    filter: "blur(5px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
} as const;

function Ornament() {
  return (
    <motion.div
      variants={item}
      className="my-3 flex items-center justify-center gap-4"
    >
      <div className="h-px w-20 bg-[#B48A4E]/45" />
      <span className="text-[#B48A4E] text-lg">❦</span>
      <div className="h-px w-20 bg-[#B48A4E]/45" />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FAF7F2]">
      <Image
        src="/images/ctump-bg.png"
        alt="Đại học Y Dược Cần Thơ"
        fill
        priority
        className="object-cover object-center"
      />
      <Image
        src="/images/ctump-bg-mobile.png"
        alt=""
        fill
        priority
        className="
          object-cover
          md:hidden
        "
      />
      <div className="absolute inset-0 bg-white/10" />

      <Sparkles />
      <SideSparkles />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="
          relative
          z-10
          flex
          min-h-screen
          flex-col
          items-center
          justify-center
          px-4
          pt-8
          pb-12
          text-center
        "
      >
        <motion.div variants={item}>
          <Image
            src="/images/ctump-logo.png"
            alt="Logo Trường Đại học Y Dược Cần Thơ"
            width={78}
            height={78}
            className="mx-auto mb-3"
          />
        </motion.div>

        <motion.p
          variants={item}
          className="
            heading-font
            text-4xl
            md:text-5xl
            lg:text-6xl
            tracking-[5px]
            uppercase
            text-[#B48A4E]
          "
        >
          Thiệp Mời
        </motion.p>

        <motion.p
          variants={item}
          className="
            mt-2
            text-xs
            md:text-sm
            uppercase
            tracking-[6px]
            text-[#1F3A2E]
          "
        >
          Trân trọng kính mời
        </motion.p>

        <Ornament />

        <motion.p
          variants={item}
          className="
            text-xs
            md:text-sm
            uppercase
            tracking-[5px]
            text-[#1F3A2E]
          "
        >
          Đến tham dự
        </motion.p>

        <motion.h1
          variants={item}
          className="
            heading-font
            mt-2
            text-4xl
            sm:text-5xl
            md:text-7xl
            lg:text-8xl
            font-bold
            tracking-[3px]
            text-[#1F3A2E]
            drop-shadow-[0_3px_8px_rgba(255,255,255,0.7)]
          "
        >
          LỄ TỐT NGHIỆP
        </motion.h1>

        <motion.p
          variants={item}
          className="
            mt-2
            text-lg
            md:text-2xl
            lg:text-3xl
            font-semibold
            uppercase
            tracking-[7px]
            text-[#B48A4E]
          "
        >
          Bác sĩ đa khoa
        </motion.p>

        <motion.p
          variants={item}
          className="
            mt-2
            text-xs
            md:text-sm
            uppercase
            tracking-[5px]
            text-[#1F3A2E]
          "
        >
          Của
        </motion.p>

        <motion.h2
          variants={item}
          className="
            font-signature
            metallic-gold-text
            mt-1
            w-full
            max-w-none
            overflow-visible
            whitespace-nowrap
            px-2
            text-center
            text-[clamp(3.4rem,8vw,7.4rem)]
            leading-[1.35]
            font-semibold
          "
        >
          Phạm Trung Hiếu
        </motion.h2>

        <Ornament />

        <motion.div
          variants={item}
          className="
            mt-1
            grid
            gap-3
            text-[#1F3A2E]
            md:grid-cols-[1fr_auto_1.3fr]
            md:items-center
          "
        >
          <div className="text-center md:text-right">
            <p className="text-base md:text-lg font-semibold">10:00 AM</p>
            <p className="text-xs md:text-sm">17.07.2026</p>
          </div>

          <div className="hidden h-11 w-px bg-[#B48A4E]/45 md:block" />

          <div className="text-center md:text-left">
            <p className="text-base md:text-lg font-semibold">Khoa Y</p>
            <p className="text-xs md:text-sm">Đại học Y Dược Cần Thơ</p>
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-6 text-center text-[#1F3A2E]/80"
        >
          <p className="heading-font text-lg md:text-xl italic">
            “Tri thức - Y đức - Sáng tạo”
          </p>
          <p className="heading-font text-lg md:text-xl italic">
            “Vì sức khỏe cộng đồng”
          </p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: "easeInOut",
          }}
          className="absolute bottom-5 flex flex-col items-center"
        >
          <span className="text-xs text-[#1F3A2E]/60">Scroll</span>
          <div className="mt-2 h-8 w-px bg-[#1F3A2E]/35" />
        </motion.div>
      </motion.div>
    </section>
  );
}