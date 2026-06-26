"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock,
  Heart,
  Home,
  Sparkles,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function PartyInvitationSection() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-28">
      <Image
        src="/images/party-bg.png"
        alt="Tiệc thân mật"
        fill
        loading="lazy"
        className="pointer-events-none object-cover"
      />

      <Image
              src="/images/party-bg-mobile.png"
              alt=""
              fill
              priority
              className="
                object-cover
                md:hidden
              "
        />     

      <div className="absolute inset-0 bg-[#FAF7F2]/45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.62),rgba(250,247,242,0.18),rgba(31,58,46,0.08))]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 120, scale: 0.92, filter: "blur(8px)"}}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          animate={{ opacity: 1, y: 0,scale: 1, filter: "blur(0px)"}}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="
            mx-auto
            max-w-5xl
            overflow-hidden
            rounded-[46px]
            border
            border-[#D8C29A]/80
            bg-white/76
            shadow-[0_35px_110px_rgba(31,58,46,0.16)]
            backdrop-blur-sm
          "
        >
          <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
            {/* Left panel */}
            <div className="relative flex flex-col justify-between bg-[#1F3A2E] p-8 text-white md:p-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#D8C29A]/20 blur-2xl" />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />

              <div className="relative z-10">
                <p className="text-sm uppercase tracking-[6px] text-[#D8C29A]">
                  Bí mật đó là...
                </p>

                <h2 className="heading-font mt-5 text-5xl leading-tight md:text-6xl">
                  Buổi tiệc
                  <br />
                  thân mật
                </h2>

                <p className="mt-4 text-sm uppercase tracking-[4px] text-white/70">
                  Sau ngày lễ tốt nghiệp
                </p>

                <p className="font-signature mt-4 text-5xl text-[#D8C29A] md:text-6xl">
                  Tại tư gia
                </p>

                {/* Highlight next-day notice */}
                <div
                  className="
                    mt-6
                    rounded-[24px]
                    border
                    border-[#D8C29A]/80
                    bg-[#FFF8EC]/10
                    px-6
                    py-5
                    shadow-[0_18px_45px_rgba(0,0,0,0.08)]
                    backdrop-blur-sm
                  "
                >
                  <p className="text-xs uppercase tracking-[4px] text-[#D8C29A]">
                    Lưu ý đặc biệt
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold leading-snug text-white">
                    Buổi tiệc được tổ chức vào ngày hôm sau
                  </h3>

                  <p className="mt-2 text-sm text-white/75">
                    Thứ Bảy • 18/07/2026 • 18:00
                  </p>
                </div>

                <div className="mt-7 h-px w-32 bg-[#D8C29A]" />

                {/* Mini transition timeline */}
                <div className="mt-8 flex items-center justify-center gap-5">
                  <div className="text-center">
                    <div className="text-4xl">🎓</div>

                    <p className="mt-2 font-semibold text-white">17/07</p>

                    <p className="text-xs text-white/70">Lễ tốt nghiệp</p>
                  </div>

                  <div className="text-4xl text-[#D8C29A]">→</div>

                  <div className="text-center">
                    <div className="text-4xl">🏡</div>

                    <p className="mt-2 font-semibold text-white">18/07</p>

                    <p className="text-xs text-white/70">Tiệc thân mật</p>
                  </div>
                </div>

                <p className="mt-8 text-sm leading-8 text-white/78">
                  Sau khi khép lại buổi lễ tốt nghiệp vào ngày 17/07, Hiếu và
                  gia đình trân trọng kính mời mọi người tiếp tục chung vui trong buổi
                  tiệc thân mật được tổ chức vào tối ngày hôm sau tại quê nhà.
                </p>
              </div>

              <div className="relative z-10 mt-10 flex items-center gap-3 text-[#D8C29A]">
                <Sparkles size={18} />
                <span className="text-sm uppercase tracking-[4px]">
                  Private Celebration
                </span>
              </div>
            </div>

            {/* Right panel */}
            <div className="relative p-8 md:p-10">
              <div className="absolute right-8 top-8 text-[#D8C29A]/60">
                <Sparkles size={34} />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.8 }}
                className="text-center"
              >
                <p className="text-sm uppercase tracking-[5px] text-[#B48A4E]">
                  Save the evening
                </p>

                <h3 className="heading-font mt-4 text-4xl text-[#1F3A2E] md:text-5xl">
                  Một buổi tối ấm cúng
                </h3>

                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#1F3A2E]/70">
                  Rất mong được gặp mọi người trong buổi tiệc nhỏ cùng gia đình và
                  những người thân quý.
                </p>
              </motion.div>

              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                <PartyInfo
                  icon={<CalendarDays size={22} />}
                  label="Ngày"
                  value="18/07/2026"
                  note="Thứ Bảy - ngày hôm sau"
                />

                <PartyInfo
                  icon={<Clock size={22} />}
                  label="Thời gian"
                  value="18:00"
                  note="Buổi tối"
                />

                <PartyInfo
                  icon={<Home size={22} />}
                  label="Địa điểm"
                  value="Tư gia"
                  note="Tại quê nhà"
                />

                <PartyInfo
                  icon={<Users size={22} />}
                  label="Không khí"
                  value="Thân mật"
                  note="Gia đình và bạn bè"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.75 }}
                className="
                  mt-8
                  rounded-[30px]
                  border
                  border-[#D8C29A]/65
                  bg-[#FAF7F2]/75
                  p-6
                  text-center
                  shadow-[0_16px_45px_rgba(31,58,46,0.08)]
                "
              >
                <Heart className="mx-auto text-[#B48A4E]" />

                <p className="mt-4 text-sm leading-7 text-[#1F3A2E]/75">
                  Sự hiện diện của mọi người sẽ là niềm vui rất lớn đối với Hiếu và
                  gia đình. Hãy tiếp tục kéo xuống để xác nhận tham dự và gửi
                  lời chúc đến Hiếu.
                </p>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mt-5 text-3xl text-[#B48A4E]"
                >
                  ↓
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PartyInfo({
  icon,
  label,
  value,
  note,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  note: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="
        rounded-[26px]
        border
        border-[#D8C29A]/60
        bg-white/72
        p-5
        text-center
        shadow-[0_12px_35px_rgba(31,58,46,0.07)]
      "
    >
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#1F3A2E] text-[#D8C29A]">
        {icon}
      </div>

      <p className="mt-4 text-xs uppercase tracking-[3px] text-[#B48A4E]">
        {label}
      </p>

      <p className="mt-1 font-semibold text-[#1F3A2E]">{value}</p>

      <p className="mt-1 text-xs leading-5 text-[#1F3A2E]/60">{note}</p>
    </motion.div>
  );
}