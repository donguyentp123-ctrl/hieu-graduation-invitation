"use client";

import { motion } from "framer-motion";
import { Car, Clock, MapPin, Navigation, Phone } from "lucide-react";
import Image from "next/image";

const guideItems = [
  {
    icon: MapPin,
    title: "Địa điểm",
    desc: "Khoa Y - Đại học Y Dược Cần Thơ",
  },
  {
    icon: Clock,
    title: "Thời gian",
    desc: "10:00 AM, ngày 17/07/2026",
  },
  {
    icon: Car,
    title: "Bãi xe",
    desc: "Khách mời có thể gửi xe theo hướng dẫn tại khuôn viên trường.",
  },
  {
    icon: Phone,
    title: "Liên hệ hỗ trợ",
    desc: "Hiếu: 0706570270",
  },
];

export default function GuideSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <Image
        src="/images/calendar-bg.png"
        alt=""
        fill
        className="pointer-events-none object-cover opacity-70"
      />

      <div className="absolute inset-0 bg-white/50" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[6px] text-[#B48A4E]">
            Attendance Guide
          </p>

          <h2 className="heading-font mt-3 text-5xl text-[#1F3A2E] md:text-6xl">
            Hướng dẫn tham dự
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#1F3A2E]/70">
            Một vài thông tin cần thiết để bạn dễ dàng di chuyển và tham dự buổi lễ.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -35, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.75 }}
            className="
              overflow-hidden
              rounded-[36px]
              border
              border-[#D8C29A]/70
              bg-white/75
              p-3
              shadow-[0_24px_80px_rgba(31,58,46,0.10)]
              backdrop-blur-md
            "
          >
            <div className="overflow-hidden rounded-[28px]">
              <iframe
                title="Google Map - Đại học Y Dược Cần Thơ"
                src="https://www.google.com/maps?q=Đại%20học%20Y%20Dược%20Cần%20Thơ&output=embed"
                className="h-[430px] w-full"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.75, delay: 0.05 }}
            className="
              rounded-[36px]
              border
              border-[#D8C29A]/70
              bg-white/80
              p-8
              shadow-[0_24px_80px_rgba(31,58,46,0.10)]
              backdrop-blur-md
            "
          >
            <div className="space-y-6 text-[#1F3A2E]">
              {guideItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1F3A2E] text-[#D8C29A]">
                      <Icon size={19} />
                    </div>

                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 opacity-75">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Đại%20học%20Y%20Dược%20Cần%20Thơ"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-8
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-[#D8C29A]
                bg-[#1F3A2E]
                px-6
                py-4
                text-sm
                font-medium
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#294739]
                hover:shadow-xl
              "
            >
              <Navigation size={17} />
              Mở Google Maps
            </a>

            <p className="mt-4 text-center text-xs leading-6 text-[#1F3A2E]/55">
              Khi bấm nút, Google Maps sẽ mở để bạn xem đường đi đến trường.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}