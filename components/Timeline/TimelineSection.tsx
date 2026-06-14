"use client";

import { motion } from "framer-motion";
import {
  Camera,
  GraduationCap,
  HeartHandshake,
  Mic2,
  Sparkles,
  Users,
} from "lucide-react";

const timeline = [
  {
    time: "09:30",
    title: "Đón khách",
    desc: "Gặp gỡ, ổn định vị trí và chuẩn bị tham dự buổi lễ.",
    icon: Users,
  },
  {
    time: "10:00",
    title: "Khai mạc",
    desc: "Bắt đầu chương trình lễ tốt nghiệp.",
    icon: Mic2,
  },
  {
    time: "10:30",
    title: "Nhận bằng",
    desc: "Khoảnh khắc đánh dấu hành trình học tập đã trọn vẹn.",
    icon: GraduationCap,
  },
  {
    time: "11:00",
    title: "Chụp ảnh",
    desc: "Lưu giữ kỷ niệm cùng gia đình, bạn bè và thầy cô.",
    icon: Camera,
  },
  {
    time: "11:30",
    title: "Gặp gỡ",
    desc: "Cùng chia sẻ niềm vui trong ngày đặc biệt.",
    icon: HeartHandshake,
  },
];

export default function TimelineSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] px-6 py-24">
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D8C29A]/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[6px] text-[#B48A4E]">
            Lịch trình dự kiến
          </p>

          <h2 className="heading-font mt-3 text-5xl text-[#1F3A2E] md:text-6xl">
            Dấu mốc trong ngày
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#1F3A2E]/70">
            Một vài mốc thời gian dự kiến để bạn thuận tiện sắp xếp và cùng Hiếu lưu giữ những khoảnh khắc đẹp.
          </p>
        </motion.div>

        <div className="mt-16 hidden md:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-[42px] h-px bg-[#D8C29A]/50" />

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false, amount: 0.45 }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              className="absolute left-0 right-0 top-[42px] h-[2px] origin-left bg-gradient-to-r from-[#B48A4E] via-[#D8C29A] to-[#B48A4E]"
            />

            <div className="grid grid-cols-5 gap-4">
              {timeline.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.time}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.35 }}
                    transition={{ duration: 0.65, delay: index * 0.15 }}
                    className="relative text-center"
                  >
                    <motion.div
                      whileHover={{ y: -6, scale: 1.04 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18 }}
                      className="mx-auto flex h-[84px] w-[84px] items-center justify-center rounded-full border border-[#D8C29A]/80 bg-white shadow-[0_18px_45px_rgba(31,58,46,0.10)]"
                    >
                      <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#1F3A2E] text-[#D8C29A]">
                        <Icon size={25} />
                      </div>
                    </motion.div>

                    <p className="mt-7 text-sm font-semibold tracking-[3px] text-[#B48A4E]">
                      {item.time}
                    </p>

                    <h3 className="heading-font mt-2 text-3xl text-[#1F3A2E]">
                      {item.title}
                    </h3>

                    <p className="mx-auto mt-3 max-w-[190px] text-sm leading-6 text-[#1F3A2E]/70">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-14 space-y-6 md:hidden">
          {timeline.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="relative rounded-[28px] border border-[#D8C29A]/70 bg-white/75 p-6 shadow-[0_18px_50px_rgba(31,58,46,0.08)]"
              >
                <div className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#1F3A2E] text-[#D8C29A]">
                    <Icon size={22} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold tracking-[3px] text-[#B48A4E]">
                      {item.time}
                    </p>

                    <h3 className="heading-font mt-1 text-3xl text-[#1F3A2E]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#1F3A2E]/70">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-14 flex max-w-xl items-center justify-center gap-3 rounded-full border border-[#D8C29A]/70 bg-white/60 px-6 py-4 text-center text-sm text-[#1F3A2E]/75 shadow-[0_12px_35px_rgba(31,58,46,0.07)]"
        >
          <Sparkles size={18} className="shrink-0 text-[#B48A4E]" />
          Thời gian có thể thay đổi nhẹ theo chương trình thực tế của buổi lễ.
        </motion.div>
      </div>
    </section>
  );
}