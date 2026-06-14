"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Heart, MessageCircle } from "lucide-react";
import { useState } from "react";

type Toast = {
  name: string;
  message: string;
};

export default function RSVPSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    status: "Chắc chắn tham dự",
    guests: "0",
    message: "",
  });

  const [toast, setToast] = useState<Toast | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const updateForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const displayName = form.name.trim() || "Một người bạn";

    setToast({
      name: displayName,
      message:
        form.status === "Không thể tham dự"
          ? "đã gửi lời chúc đến Hiếu"
          : "sẽ tham dự buổi lễ tốt nghiệp",
    });

    setSubmitted(true);

    setTimeout(() => {
      setToast(null);
    }, 5200);
  };

  return (
    <section className="relative overflow-hidden bg-[#F6F0E7] px-6 py-24">
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D8C29A]/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[6px] text-[#B48A4E]">
            RSVP
          </p>

          <h2 className="heading-font mt-3 text-5xl text-[#1F3A2E] md:text-6xl">
            Xác nhận tham dự
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#1F3A2E]/70">
            Bạn vui lòng để lại thông tin để Hiếu có thể chuẩn bị và đón tiếp chu đáo hơn.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.75 }}
          className="
            mt-12
            overflow-hidden
            rounded-[36px]
            border
            border-[#D8C29A]/70
            bg-white/75
            shadow-[0_24px_80px_rgba(31,58,46,0.10)]
            backdrop-blur-md
          "
        >
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="flex flex-col justify-between bg-[#1F3A2E] p-8 text-white">
              <div>
                <p className="text-sm uppercase tracking-[5px] text-[#D8C29A]">
                  Invitation Reply
                </p>

                <h3 className="heading-font mt-5 text-4xl">
                  Hẹn gặp bạn trong ngày đặc biệt
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/75">
                  Sự hiện diện của bạn là một phần thật ý nghĩa trong dấu mốc tốt nghiệp của Hiếu.
                </p>
              </div>

              <div className="mt-10 space-y-4 text-sm text-white/80">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#D8C29A]" size={18} />
                  Không giới hạn thời gian xác nhận
                </div>

                <div className="flex items-center gap-3">
                  <Heart className="text-[#D8C29A]" size={18} />
                  Có thể đi cùng người thân/bạn bè
                </div>

                <div className="flex items-center gap-3">
                  <MessageCircle className="text-[#D8C29A]" size={18} />
                  Có thể gửi lời chúc đến Hiếu
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-7 md:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex min-h-[420px] flex-col items-center justify-center text-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1F3A2E] text-[#D8C29A]">
                    <CheckCircle2 size={38} />
                  </div>

                  <h3 className="heading-font mt-6 text-4xl text-[#1F3A2E]">
                    Cảm ơn bạn!
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-[#1F3A2E]/70">
                    Hiếu đã nhận được phản hồi của bạn. Hẹn gặp bạn tại buổi lễ tốt nghiệp.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 rounded-full border border-[#D8C29A] px-7 py-3 text-sm text-[#1F3A2E] transition hover:bg-[#FAF7F2]"
                  >
                    Gửi phản hồi khác
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="grid gap-5 md:grid-cols-2">
                    <input
                      name="name"
                      value={form.name}
                      onChange={updateForm}
                      placeholder="Họ và tên *"
                      required
                      className="rounded-2xl border border-[#D8C29A]/60 bg-[#FAF7F2] px-5 py-4 outline-none focus:border-[#B48A4E]"
                    />

                    <input
                      name="phone"
                      value={form.phone}
                      onChange={updateForm}
                      placeholder="Số điện thoại"
                      className="rounded-2xl border border-[#D8C29A]/60 bg-[#FAF7F2] px-5 py-4 outline-none focus:border-[#B48A4E]"
                    />

                    <select
                      name="status"
                      value={form.status}
                      onChange={updateForm}
                      className="rounded-2xl border border-[#D8C29A]/60 bg-[#FAF7F2] px-5 py-4 outline-none focus:border-[#B48A4E]"
                    >
                      <option>Chắc chắn tham dự</option>
                      <option>Có thể tham dự</option>
                      <option>Không thể tham dự</option>
                    </select>

                    <input
                      name="guests"
                      value={form.guests}
                      onChange={updateForm}
                      type="number"
                      min={0}
                      placeholder="Số người đi cùng"
                      className="rounded-2xl border border-[#D8C29A]/60 bg-[#FAF7F2] px-5 py-4 outline-none focus:border-[#B48A4E]"
                    />
                  </div>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={updateForm}
                    placeholder="Lời nhắn dành cho Hiếu"
                    rows={5}
                    className="mt-5 w-full rounded-2xl border border-[#D8C29A]/60 bg-[#FAF7F2] px-5 py-4 outline-none focus:border-[#B48A4E]"
                  />

                  <button
                    type="submit"
                    className="
                      mt-6
                      w-full
                      rounded-full
                      bg-[#1F3A2E]
                      px-8
                      py-4
                      font-medium
                      text-white
                      shadow-lg
                      transition-all
                      hover:-translate-y-1
                      hover:shadow-xl
                    "
                  >
                    Gửi xác nhận
                  </button>
                </>
              )}
            </form>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, x: -40, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: -40, y: 30, scale: 0.95 }}
            transition={{ duration: 0.45 }}
            className="
              fixed
              bottom-6
              left-6
              z-50
              max-w-[340px]
              rounded-2xl
              border
              border-[#D8C29A]/70
              bg-white/90
              p-4
              text-sm
              text-[#1F3A2E]
              shadow-2xl
              backdrop-blur
            "
          >
            <p className="font-semibold">💬 {toast.name}</p>
            <p className="mt-1 text-[#1F3A2E]/70">{toast.message}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}