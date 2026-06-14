"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type Notification = {
  id: number;
  icon: string;
  name: string;
  message: string;
};

const sampleNotifications = [
  {
    icon: "🎉",
    name: "Minh",
    message: "sẽ tham dự buổi lễ",
  },
  {
    icon: "❤️",
    name: "An",
    message: "gửi lời chúc đến Hiếu",
  },
  {
    icon: "📸",
    name: "Phương",
    message: "sẽ chụp ảnh cùng Hiếu",
  },
  {
    icon: "🌿",
    name: "Linh",
    message: "rất mong được gặp bạn",
  },
  {
    icon: "✨",
    name: "Huy",
    message: "hẹn gặp vào ngày 14/07",
  },
  {
    icon: "🥂",
    name: "Ngọc",
    message: "chúc mừng tân bác sĩ",
  },
];

export default function LiveNotification() {
  const notifications = useMemo(() => sampleNotifications, []);
  const [activeItems, setActiveItems] = useState<Notification[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const item = notifications[index % notifications.length];

      const newItem: Notification = {
        id: Date.now(),
        icon: item.icon,
        name: item.name,
        message: item.message,
      };

      setActiveItems((prev) => [...prev.slice(-2), newItem]);
      setIndex((prev) => prev + 1);

      setTimeout(() => {
        setActiveItems((prev) => prev.filter((i) => i.id !== newItem.id));
      }, 5200);
    }, 3800);

    return () => clearInterval(interval);
  }, [index, notifications]);

  return (
    <div className="pointer-events-none fixed bottom-6 left-5 z-[80] hidden w-[320px] flex-col gap-3 md:flex">
      <AnimatePresence initial={false}>
        {activeItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{
              opacity: 0,
              y: 28,
              x: -28,
              scale: 0.96,
              filter: "blur(5px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              x: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              y: -24,
              x: -18,
              scale: 0.96,
              filter: "blur(5px)",
            }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            className="
              rounded-2xl
              border
              border-[#D8C29A]/70
              bg-white/85
              px-4
              py-3
              text-sm
              text-[#1F3A2E]
              shadow-[0_16px_45px_rgba(31,58,46,0.14)]
              backdrop-blur-md
            "
          >
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1F3A2E] text-lg">
                {item.icon}
              </div>

              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="mt-0.5 text-[#1F3A2E]/70">{item.message}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}