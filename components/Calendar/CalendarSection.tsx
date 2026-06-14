"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin, GraduationCap } from "lucide-react";
import Image from "next/image";

const days = Array.from({ length: 31 }, (_, i) => i + 1);

export default function CalendarSection() {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-6">
      <Image
        src="/images/calendar-bg.png"
        alt=""
        fill
        className="pointer-events-none object-cover opacity-70"
      />

      <div className="absolute inset-0 bg-white/45" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[6px] text-[#B48A4E]">
            Thông tin buổi lễ
          </p>

          <h2 className="heading-font mt-3 text-5xl text-[#1F3A2E] md:text-6xl">
            July 2026
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="
              overflow-visible
              rounded-[32px]
              border
              border-[#D8C29A]/70
              bg-white/65
              p-4
              shadow-[0_20px_70px_rgba(31,58,46,0.08)]
              backdrop-blur
              md:p-6
            "
          >
            <div className="grid grid-cols-7 gap-1 text-center md:gap-2">
              {["T2", "T3", "T4", "T5", "T6", "T7", "CN"].map((d) => (
                <div
                  key={d}
                  className="py-2 text-[10px] font-semibold uppercase tracking-[2px] text-[#B48A4E] md:text-xs"
                >
                  {d}
                </div>
              ))}

              <div />
              <div />

              {days.map((day) => {
                const isEventDay = day === 14;

                return (
                  <motion.div
                    key={day}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: day * 0.012 }}
                    className={`
                      relative
                      flex
                      aspect-square
                      items-center
                      justify-center
                      overflow-visible
                      rounded-xl
                      text-xs
                      md:rounded-2xl
                      md:text-sm
                      ${
                        isEventDay
                          ? `
                            bg-gradient-to-br
                            from-[#1F3A2E]
                            to-[#2B4B3D]
                            text-white
                            ring-2
                            ring-[#D8C29A]/45
                            md:ring-4
                            shadow-[0_18px_35px_rgba(31,58,46,0.28)]
                          `
                          : "bg-[#FAF7F2] text-[#1F3A2E]"
                      }
                    `}
                  >
                    {isEventDay && (
                      <motion.div
                        initial={{
                          x: -120,
                          y: -120,
                          rotate: -35,
                          scale: 0.35,
                          opacity: 0,
                        }}
                        whileInView={{
                          x: 0,
                          y: 0,
                          rotate: 0,
                          scale: 1,
                          opacity: 1,
                        }}
                        viewport={{ once: true, amount: 0.7 }}
                        transition={{
                          duration: 1.35,
                          delay: 0.35,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="
                          absolute
                          inset-0
                          z-20
                          flex
                          items-center
                          justify-center
                          pointer-events-none
                        "
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, -3, 0, 3, 0],
                            filter: [
                              "drop-shadow(0 0 0px rgba(216,194,154,0.35))",
                              "drop-shadow(0 0 18px rgba(216,194,154,0.95))",
                              "drop-shadow(0 0 0px rgba(216,194,154,0.35))",
                            ],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 2.4,
                            ease: "easeInOut",
                          }}
                        >
                          <GraduationCap
                            size={46}
                            strokeWidth={1.75}
                            className="text-[#D8C29A] md:h-[58px] md:w-[58px]"
                          />
                        </motion.div>
                      </motion.div>
                    )}

                    <span
                      className={
                        isEventDay
                          ? "relative z-30 text-lg font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)] md:text-xl"
                          : ""
                      }
                    >
                      {day}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="
              rounded-[32px]
              border
              border-[#D8C29A]/70
              bg-white/75
              p-7
              shadow-[0_20px_70px_rgba(31,58,46,0.08)]
              backdrop-blur
              md:p-8
            "
          >
            <h3 className="heading-font text-4xl text-[#1F3A2E]">
              Lễ Tốt Nghiệp
            </h3>

            <div className="mt-8 space-y-5 text-[#1F3A2E]">
              <div className="flex gap-4">
                <CalendarDays className="shrink-0 text-[#B48A4E]" />
                <div>
                  <p className="font-semibold">14/07/2026</p>
                  <p className="text-sm opacity-75">Thứ Ba</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="shrink-0 text-[#B48A4E]" />
                <div>
                  <p className="font-semibold">10:00 AM</p>
                  <p className="text-sm opacity-75">
                    Vui lòng đến sớm hơn 15 phút
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="shrink-0 text-[#B48A4E]" />
                <div>
                  <p className="font-semibold">Khoa Y</p>
                  <p className="text-sm opacity-75">
                    Đại học Y Dược Cần Thơ
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}