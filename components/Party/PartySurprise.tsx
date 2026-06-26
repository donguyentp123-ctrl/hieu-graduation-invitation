"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function PartySurprise({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] px-6 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(216,194,154,0.24),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[6px] text-[#B48A4E]"
        >
          Một lời mời nhỏ
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="heading-font mt-4 text-4xl text-[#1F3A2E] md:text-6xl"
        >
          Kết thúc buổi lễ tốt nghiệp,
          <br />
          chúng ta vẫn còn...
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.16 }}
          className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#1F3A2E]/70"
        >
          Một buổi gặp gỡ thân mật để cùng chia sẻ niềm vui, lưu lại những câu
          chuyện và những khoảnh khắc đáng nhớ hơn nữa.
        </motion.p>

        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.3 }}
  className="mt-12"
>
  <p className="text-xs uppercase tracking-[5px] text-[#B48A4E]">
    Một điều đặc biệt
  </p>

  <h3 className="heading-font mt-3 text-3xl text-[#1F3A2E] md:text-4xl">
    Buổi lễ tốt nghiệp
    <br />
    chưa phải là điểm dừng cuối cùng
  </h3>

  <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#1F3A2E]/70">
    Có một bí mật đặc biệt khác đang chờ mọi người
    vào ngày hôm sau.
  </p>

  <motion.button
    type="button"
    onClick={onOpen}
    whileHover={{
      scale: 1.03,
      y: -4,
    }}
    whileTap={{
      scale: 0.98,
    }}
    animate={{
      y: [0, -6, 0],
      boxShadow: [
        "0 20px 45px rgba(31,58,46,0.18)",
        "0 28px 60px rgba(31,58,46,0.28)",
        "0 20px 45px rgba(31,58,46,0.18)",
      ],
    }}
    transition={{
      y: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
      boxShadow: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }}
    className="
      relative
      mt-10
      overflow-hidden
      rounded-[28px]
      border-2
      border-[#D8C29A]
      bg-[#1F3A2E]
      px-10
      py-7
      text-white
      shadow-[0_20px_45px_rgba(31,58,46,0.18)]
    "
  >
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    <div className="relative z-10 flex flex-col items-center">
      <Sparkles
        size={28}
        className="mb-3 text-[#D8C29A]"
      />

      <span className="text-xs uppercase tracking-[4px] text-[#D8C29A]">
        
      </span>

      <span className="heading-font mt-2 text-3xl">
        Khám phá bí mật
      </span>

      <span className="mt-2 text-lg text-[#D8C29A]">
        Diễn ra vào • 18.07.2026
      </span>
    </div>
  </motion.button>

  <motion.div
    animate={{ y: [0, 8, 0] }}
    transition={{
      duration: 1.8,
      repeat: Infinity,
    }}
    className="mt-6 text-3xl text-[#B48A4E]"
  >
    ↓
  </motion.div>

  <p className="mt-2 text-xs text-[#1F3A2E]/45">
    Nhấn để tiếp tục hành trình
  </p>
</motion.div>
      </div>
    </section>
  );
}