"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const notes = [
  "Đừng quên dành thời gian ở lại sau buổi lễ để cùng Hiếu lưu giữ những khoảnh khắc đáng nhớ.",
  "Hãy tự tin khoác lên mình bộ trang phục yêu thích nhất để cùng Hiếu lưu giữ những khoảnh khắc đẹp và đáng nhớ trong ngày đặc biệt này.",
  "Để thuận tiện di chuyển và tham gia các hoạt động, mọi người vui lòng hạn chế mang theo tài sản có giá trị cao.",
  "Nếu cần hỗ trợ hoặc chưa tìm được vị trí, đừng ngần ngại liên hệ với Hiếu.",
];

export default function NotesSection() {
  return (
    <section className="relative overflow-hidden py-28 px-6">

      <Image
        src="/images/note-bg.png"
        alt=""
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-white/35" />

      <div className="relative z-10 mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[6px] text-[#B48A4E]">
            Lưu ý
          </p>

          <h2
            className="
              heading-font
              mt-3
              text-5xl
              md:text-6xl
              text-[#1F3A2E]
            "
          >
            Một vài lời nhắn
          </h2>

          <p className="mt-4 text-[#1F3A2E]/70">
            Để buổi gặp gỡ diễn ra thuận lợi và trọn vẹn hơn.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {notes.map((note, index) => (
            <motion.div
              key={note}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.25,
              }}
              transition={{
                delay: index * 0.12,
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="
                rounded-[32px]
                border
                border-[#D8C29A]/60
                bg-white/70
                backdrop-blur-md
                p-7
                shadow-[0_18px_60px_rgba(31,58,46,0.08)]
              "
            >
              <div className="flex gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#1F3A2E]
                  "
                >
                  <CheckCircle2
                    size={22}
                    className="text-[#D8C29A]"
                  />
                </div>

                <p className="leading-8 text-[#1F3A2E]/80">
                  {note}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}