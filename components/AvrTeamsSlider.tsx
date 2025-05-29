"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const teams = [
  { title: "Call of Duty", image: "/img/cod.webp" },
  { title: "FIFA 24 / EA FC", image: "/img/fifa.webp" },
  { title: "Halo", image: "/img/halo-infinite.webp" },
  { title: "Rainbow Six Siege", image: "/img/rainbow.webp" },
  { title: "PUBG", image: "/img/pubg.webp" },
  { title: "Clash Royal", image: "/img/clash.webp" },
  { title: "Destiny", image: "/img/destiny.webp" },
];

export default function AvrTeamsCarousel() {
  return (
    <section className="py-10 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-6 text-avrblue">
        Unsere AVR eSports Teams
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1.2}
        centeredSlides
        loop
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.5 },
        }}
        className="px-4"
      >
        {teams.map((team, idx) => (
          <SwiperSlide key={idx}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative h-[400px] rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={team.image}
                alt={team.title}
                layout="fill"
                objectFit="cover"
                className="z-0"
              />
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4">
                <h3 className="text-lg font-bold drop-shadow-md">
                  {team.title}
                </h3>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
