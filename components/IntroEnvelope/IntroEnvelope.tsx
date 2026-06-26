"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Props {
  onOpen: () => void;
}

export default function IntroEnvelope({ onOpen }: Props) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    setOpening(true);

    setTimeout(() => {
      onOpen();
    }, 1800);
  };

  return (
    <AnimatePresence>
      {!opening && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0.92,
            filter: "blur(8px)",
          }}
          transition={{ duration: 1.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-6"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="
              relative
              w-full
              max-w-[700px]
              bg-white/80
              backdrop-blur-md
              border
              border-[#d8c29a]
              rounded-[32px]
              shadow-[0_20px_80px_rgba(0,0,0,0.12)]
              overflow-hidden
            "
          >
            {/* viền vàng */}
            <div className="absolute inset-3 border border-[#d8c29a]/50 rounded-[24px]" />

            {/* hiệu ứng sáng */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#d8c29a]/10 blur-3xl rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#1F3A2E]/5 blur-3xl rounded-full" />

            <div className="relative z-10 px-10 py-16 text-center">

              <p className="tracking-[8px] uppercase text-[#B48A4E] text-sm">
                Graduation Invitation
              </p>

              <h1 className="heading-font text-5xl md:text-6xl text-[#1F3A2E] mt-6">
                Thư Mời
              </h1>

              <div className="w-24 h-[1px] bg-[#d8c29a] mx-auto my-8" />

              <p className="text-gray-600 leading-8 max-w-lg mx-auto">
                Trân trọng kính mời bạn đến tham dự
                <br />
                lễ tốt nghiệp Bác sĩ Đa khoa của
              </p>

              <h2 className="heading-font text-4xl md:text-5xl text-[#B48A4E] mt-6">
                Phạm Trung Hiếu
              </h2>

              <p className="mt-8 text-gray-500">
                17 Tháng 07, 2026 • 10:00 AM
              </p>

              <button
                onClick={handleOpen}
                className="
                  mt-10
                  px-10
                  py-4
                  rounded-full
                  bg-[#1F3A2E]
                  text-white
                  hover:scale-105
                  transition
                  shadow-lg
                "
              >
                Mở lời mời
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}