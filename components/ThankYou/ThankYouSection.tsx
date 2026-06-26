"use client";

import { motion } from "framer-motion";

export default function ThankYouSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-32
        px-6
      "
      style={{
        backgroundImage: "url('/images/thankyou-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay tối nhẹ */}
      <div className="absolute inset-0 bg-[#0F241D]/40" />

      {/* glow giữa */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D8C29A]/10
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="
              uppercase
              tracking-[8px]
              text-[#D8C29A]
              text-sm
            "
          >
            Thank You
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ delay: 0.15 }}
          className="
            font-signature
            mt-6
            text-[clamp(4rem,9vw,8rem)]
            leading-[1.25]
            metallic-gold-text
          "
        >
          Xin cảm ơn
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 180 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="
            mx-auto
            mt-5
            h-px
            bg-[#D8C29A]
          "
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.35 }}
          className="
            mx-auto
            mt-8
            max-w-2xl
            text-lg
            leading-9
            text-white/90
          "
        >
          Cảm ơn mọi người đã dành thời gian ghé thăm và đồng hành cùng Hiếu
          trong dấu mốc đặc biệt này.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.55 }}
          className="
            mx-auto
            mt-4
            max-w-2xl
            text-lg
            leading-9
            text-white/80
          "
        >
          Sự hiện diện, lời chúc và tình cảm của mọi người sẽ là một phần
          thật đẹp trong hành trình trưởng thành của Hiếu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.8 }}
          className="mt-14"
        >
          <p
            className="
              text-[#D8C29A]
              uppercase
              tracking-[5px]
              text-sm
            "
          >
            Graduation Ceremony
          </p>

          <h3
            className="
              heading-font
              mt-3
              text-4xl
              text-white
            "
          >
            Phạm Trung Hiếu
          </h3>

          <p className="mt-3 text-white/75">
            17.07.2026 • Khoa Y • Đại học Y Dược Cần Thơ
          </p>
        </motion.div>
      </div>
    </section>
  );
}