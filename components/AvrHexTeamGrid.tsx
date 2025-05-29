"use client";
import Image from "next/image";

const teams = [
  { title: "Call of Duty", image: "/img/cod.webp" },
  { title: "EA Sports FC", image: "/img/fifa.webp" },
  { title: "Halo", image: "/img/halo-infinite.webp" },
  { title: "Rainbow Six", image: "/img/rainbow.webp" },
  { title: "PUBG", image: "/img/pubg.webp" },
  { title: "Clash Royale", image: "/img/clash.webp" },
  { title: "Destiny", image: "/img/destiny.webp" },
];

export default function AvrHexTeamGrid() {
  return (
    <section className="py-16 px-4 bg-black text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-avrblue mb-10">
        Unsere AVR eSports Teams
      </h2>
      <div className="flex flex-col gap-12 items-center">
        <div className="flex gap-6 justify-center">
          {teams.slice(0, 4).map((team, i) => (
            <HexagonCard key={i} title={team.title} image={team.image} />
          ))}
        </div>
        <div className="flex gap-6 justify-center mt-[-32px]">
          {teams.slice(4).map((team, i) => (
            <HexagonCard key={i + 4} title={team.title} image={team.image} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HexagonCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="relative w-40 h-44 sm:w-48 sm:h-52 lg:w-56 lg:h-60">
      {/* Outer Glow Hexagon */}
      <div className="absolute inset-[-10%] z-0 opacity-30 animate-pulseSlow hexagon" style={{ boxShadow: "0 0 20px #00f0ff, 0 0 40px #00f0ff" }} />

      {/* Middle Hexagon Border */}
      <div className="absolute inset-0 z-10 ring-2 ring-avrblue hexagon" />

      {/* Inner Image Hexagon */}
      <div className="relative w-full h-full hexagon overflow-hidden z-20 hover:scale-105 transition-transform duration-300">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-2 w-full text-center px-2">
          <div className="text-xs sm:text-sm font-bold text-white drop-shadow-md bg-black/60 py-1 rounded">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}