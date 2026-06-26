"use client";

import { motion } from "framer-motion";
import {
  Camera,
  GraduationCap,
  MapPin,
  PartyPopper,
  UtensilsCrossed,
} from "lucide-react";

const timelineItems = [
  {
    time: "07:00",
    title: "Có mặt tại hội trường",
    description:
      "Hiếu cùng người thân ổn định vị trí tại hội trường.",
    Icon: MapPin,
  },
  {
    time: "08:00",
    title: "Khai mạc buổi lễ",
    description:
      "Buổi lễ tốt nghiệp chính thức bắt đầu trong không khí trang trọng tại Khoa Y.",
    Icon: PartyPopper,
  },
  {
    time: "09:00",
    title: "Nhận bằng Bác sĩ Đa khoa",
    description:
      "Khoảnh khắc Hiếu nhận bằng, đánh dấu một chặng đường học tập nhiều nỗ lực.",
    Icon: GraduationCap,
  },
  {
    time: "10:00",
    title: "Gặp gỡ & chụp ảnh",
    description:
      "Hiếu đón bạn bè, người thân và cùng mọi người lưu lại những khoảnh khắc đáng nhớ.",
    Icon: Camera,
  },
  {
    time: "11:00",
    title: "Tiệc trưa tại Buffet Tí Nị",
    description:
      "Mời mọi người cùng dùng bữa trưa thân mật và chia sẻ niềm vui tốt nghiệp.",
    Icon: UtensilsCrossed,
  },
];

export default function TimelineSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] px-6 py-24">
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D8C29A]/20 blur-2xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[6px] text-[#B48A4E]">
            Timeline
          </p>

          <h2 className="heading-font mt-3 text-5xl text-[#1F3A2E] md:text-6xl">
            Lịch trình buổi lễ
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#1F3A2E]/70">
            Một vài mốc thời gian chính để mọi người dễ sắp xếp và cùng Hiếu lưu
            lại những khoảnh khắc đáng nhớ.
          </p>
        </motion.div>

        {/* Desktop horizontal timeline */}
        <div className="relative mt-20 hidden lg:block">
          <div className="absolute left-0 right-0 top-[92px] h-px bg-gradient-to-r from-transparent via-[#D8C29A] to-transparent" />

          <div className="grid grid-cols-5 gap-5">
            {timelineItems.map((item, index) => {
              const Icon = item.Icon;
              const isUp = index % 2 === 0;

              return (
                <motion.div
                  key={item.time}
                  initial={{ opacity: 0, y: isUp ? 35 : -35, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.75,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`relative ${isUp ? "pt-0" : "pt-28"}`}
                >
                  <div
                    className={`
                      relative
                      rounded-[30px]
                      border
                      border-[#D8C29A]/70
                      bg-white/75
                      p-5
                      text-center
                      shadow-[0_18px_55px_rgba(31,58,46,0.08)]
                      backdrop-blur-sm
                      transition
                      duration-500
                      hover:-translate-y-2
                      hover:shadow-[0_22px_70px_rgba(31,58,46,0.12)]
                    `}
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#1F3A2E] text-[#D8C29A] shadow-[0_10px_30px_rgba(31,58,46,0.18)]">
                      <Icon size={24} />
                    </div>

                    <p className="mt-5 text-xs uppercase tracking-[3px] text-[#B48A4E]">
                      {item.time}
                    </p>

                    <h3 className="heading-font mt-2 text-2xl leading-tight text-[#1F3A2E]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-xs leading-6 text-[#1F3A2E]/68">
                      {item.description}
                    </p>
                  </div>

                  <div
                    className={`
                      absolute
                      left-1/2
                      z-20
                      h-5
                      w-5
                      -translate-x-1/2
                      rounded-full
                      border-[5px]
                      border-[#FAF7F2]
                      bg-[#D8C29A]
                      shadow-[0_0_0_8px_rgba(216,194,154,0.22)]
                      ${isUp ? "top-[83px]" : "top-[83px]"}
                    `}
                  />

                  <div
                    className={`
                      absolute
                      left-1/2
                      top-[98px]
                      h-12
                      w-px
                      -translate-x-1/2
                      bg-[#D8C29A]/55
                      ${isUp ? "translate-y-0" : "-translate-y-12"}
                    `}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile / tablet vertical compact timeline */}
        <div className="mt-14 space-y-5 lg:hidden">
          {timelineItems.map((item, index) => {
            const Icon = item.Icon;

            return (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  rounded-[28px]
                  border
                  border-[#D8C29A]/70
                  bg-white/75
                  p-5
                  shadow-[0_16px_45px_rgba(31,58,46,0.08)]
                  backdrop-blur-sm
                "
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1F3A2E] text-[#D8C29A]">
                    <Icon size={22} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[3px] text-[#B48A4E]">
                      {item.time}
                    </p>

                    <h3 className="heading-font mt-1 text-2xl text-[#1F3A2E]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#1F3A2E]/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}