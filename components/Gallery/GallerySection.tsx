"use client";

import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";

const slides = [
  {
    src: "/images/1.jpg",
    title: "Chân dung",
  },
  {
    src: "/images/2.jpg",
    title: "Khoảnh khắc",
  },
  {
    src: "/images/3.png",
    title: "Lễ phục",
  },
  {
    src: "/images/4.png",
    title: "Đại học Y Dược",
  },
  {
    src: "/images/5.png",
    title: "Hành trình",
  },
  {
    src: "/images/6.jpg",
    title: "Tân Bác sĩ",
  },
];

export default function GallerySection() {
  const [index, setIndex] = useState(-1);

  return (
    <section className="relative overflow-hidden px-6 py-28">
      <Image
        src="/images/gallery-bg.png"
        alt=""
        fill
        className="pointer-events-none object-cover opacity-90"
      />
      <Image
        src="/images/gallery-bg-mobile.png"
        alt=""
        fill
        className="
          object-cover
          md:hidden
        "
      />
      <div className="absolute inset-0 bg-white/25" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          className="text-sm uppercase tracking-[6px] text-[#B48A4E]"
        >
          Gallery
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          className="heading-font mt-3 text-5xl text-[#1F3A2E] md:text-6xl"
        >
          Những khoảnh khắc
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#1F3A2E]/70"
        >
          Một vài hình ảnh lưu giữ những khoảnh khắc đẹp trong hành trình tốt nghiệp.
        </motion.p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {slides.map((item, itemIndex) => (
            <motion.button
              type="button"
              key={item.src}
              onClick={() => setIndex(itemIndex)}
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: itemIndex * 0.08 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                group
                relative
                aspect-[4/5]
                overflow-hidden
                rounded-[34px]
                border
                border-[#D8C29A]/70
                bg-white/65
                p-3
                text-left
                shadow-[0_18px_55px_rgba(31,58,46,0.10)]
                backdrop-blur-md
                outline-none
              "
            >
              {/* Gold inner frame */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-2
                  z-30
                  rounded-[28px]
                  border
                  border-[#D8C29A]/40
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:opacity-100
                  group-hover:scale-[0.97]
                  group-active:opacity-100
                  group-active:scale-[0.97]
                "
              />

              {/* Gold ornaments */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -left-4
                  -top-4
                  z-40
                  text-5xl
                  text-[#C89B4D]
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:translate-x-4
                  group-hover:translate-y-4
                  group-hover:opacity-100
                  group-active:translate-x-4
                  group-active:translate-y-4
                  group-active:opacity-100
                "
              >
                ❧
              </div>

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-4
                  -bottom-4
                  z-40
                  rotate-180
                  text-5xl
                  text-[#C89B4D]
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:-translate-x-4
                  group-hover:-translate-y-4
                  group-hover:opacity-100
                  group-active:-translate-x-4
                  group-active:-translate-y-4
                  group-active:opacity-100
                "
              >
                ❧
              </div>

              {/* Image */}
              <div className="relative z-10 h-full overflow-hidden rounded-[26px]">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                    group-hover:rotate-1
                    group-active:scale-110
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/60
                    via-black/10
                    to-transparent
                    opacity-75
                    transition-all
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Shine */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    -left-1/2
                    w-1/2
                    skew-x-[-18deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/25
                    to-transparent
                    opacity-0
                    transition-all
                    duration-700
                    group-hover:left-full
                    group-hover:opacity-100
                  "
                />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="heading-font text-2xl">{item.title}</p>

                  <p className="mt-1 text-sm text-white/80">
                    Lễ tốt nghiệp • 17.07.2026
                  </p>
                </div>
              </div>

              {/* Outer glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-[34px]
                  bg-gradient-to-br
                  from-[#D8C29A]/20
                  via-transparent
                  to-[#1F3A2E]/10
                  opacity-0
                  transition
                  duration-500
                  group-hover:opacity-100
                  group-active:opacity-100
                "
              />
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides.map((slide) => ({
          src: slide.src,
          title: slide.title,
        }))}
        plugins={[Zoom]}
        carousel={{
          finite: false,
        }}
        animation={{
          fade: 450,
          swipe: 500,
        }}
        render={{
          iconClose: () => <X className="text-[#D8C29A]" />,
          iconPrev: () => <ChevronLeft className="text-[#D8C29A]" />,
          iconNext: () => <ChevronRight className="text-[#D8C29A]" />,
        }}
        styles={{
          container: {
            backgroundColor: "rgba(15, 36, 29, 0.88)",
            backdropFilter: "blur(18px)",
          },
          slide: {
            padding: "32px",
          },
        }}
      />
    </section>
  );
}