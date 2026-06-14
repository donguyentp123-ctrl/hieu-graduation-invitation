"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircleHeart, Users } from "lucide-react";
import { useEffect, useState } from "react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxSImbZnR_7aCF3DYpRjt5nOZS2fgwVZaJESvOOuC1MVr4vZhRsiJcXFQsfMCIzdlCWvg/exec";

type GuestbookItem = {
  created_at: string;
  name: string;
  status: string;
  guests: string;
  message: string;
};

export default function GuestbookSection() {
  const [items, setItems] = useState<GuestbookItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGuestbook = async () => {
      try {
        const res = await fetch(GOOGLE_SCRIPT_URL);
        const result = await res.json();

        if (result.success) {
          setItems(result.data || []);
        }
      } catch {
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGuestbook();
  }, []);

  const attendingCount = items.filter(
    (item) => item.status !== "Không thể tham dự"
  ).length;

  const messageCount = items.filter((item) => item.message?.trim()).length;

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] px-6 py-24">
      <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D8C29A]/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[6px] text-[#B48A4E]">
            Guestbook
          </p>

          <h2 className="heading-font mt-3 text-5xl text-[#1F3A2E] md:text-6xl">
            Lời chúc gửi đến Hiếu
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#1F3A2E]/70">
            Những lời nhắn thân thương từ bạn bè và người thân sẽ được lưu lại
            như một phần kỷ niệm trong ngày tốt nghiệp.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="rounded-[28px] border border-[#D8C29A]/70 bg-white/75 p-6 shadow-[0_18px_55px_rgba(31,58,46,0.08)]"
          >
            <Users className="mx-auto text-[#B48A4E]" />
            <p className="heading-font mt-3 text-center text-4xl text-[#1F3A2E]">
              {attendingCount}
            </p>
            <p className="mt-1 text-center text-sm uppercase tracking-[3px] text-[#B48A4E]">
              Phản hồi tham dự
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="rounded-[28px] border border-[#D8C29A]/70 bg-white/75 p-6 shadow-[0_18px_55px_rgba(31,58,46,0.08)]"
          >
            <MessageCircleHeart className="mx-auto text-[#B48A4E]" />
            <p className="heading-font mt-3 text-center text-4xl text-[#1F3A2E]">
              {messageCount}
            </p>
            <p className="mt-1 text-center text-sm uppercase tracking-[3px] text-[#B48A4E]">
              Lời chúc đã gửi
            </p>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <p className="col-span-full text-center text-sm text-[#1F3A2E]/60">
              Đang tải lời chúc...
            </p>
          ) : items.length === 0 ? (
            <p className="col-span-full text-center text-sm text-[#1F3A2E]/60">
              Chưa có lời chúc nào. Hãy là người đầu tiên gửi lời chúc đến Hiếu.
            </p>
          ) : (
            items.slice(0, 9).map((item, index) => (
              <motion.div
                key={`${item.name}-${index}`}
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-[#D8C29A]/70
                  bg-white/75
                  p-6
                  shadow-[0_18px_55px_rgba(31,58,46,0.08)]
                  backdrop-blur-md
                "
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#D8C29A]/15 blur-2xl" />

                <div className="relative z-10 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1F3A2E] text-[#D8C29A]">
                    <Heart size={18} />
                  </div>

                  <div>
                    <p className="font-semibold text-[#1F3A2E]">
                      {item.name || "Một người bạn"}
                    </p>
                    <p className="text-xs text-[#B48A4E]">{item.status}</p>
                  </div>
                </div>

                <p className="relative z-10 mt-5 min-h-[70px] text-sm leading-7 text-[#1F3A2E]/75">
                  “{item.message || "Chúc mừng Hiếu trong ngày tốt nghiệp thật đặc biệt."}”
                </p>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}