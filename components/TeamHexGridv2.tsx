import Image from "next/image";
import styles from "./HexCard.module.css";

const teamDataTopRow = [
  { title: "Call of Duty", image: "/img/cod.webp" },
  { title: "EA Sports FC", image: "/img/fifa.webp" },
  { title: "Halo", image: "/img/halo-infinite.webp" },
];

const teamDataBottomRow = [
  { title: "Rainbow Six", image: "/img/rainbow.webp" },
  { title: "PUBG", image: "/img/pubg.webp" },
  { title: "Clash Royale", image: "/img/clash.webp" },
];

function HexCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="relative w-40 h-44 sm:w-48 sm:h-52 lg:w-56 lg:h-60 group">
      {/* Optionaler Glow-Shadow außen */}
      <div className="absolute inset-0 pointer-events-none z-0 clip-hex shadow-[0_0_20px_#00f0ff]" />

    <div className={`w-48 h-40 sm:w-56 sm:h-48 lg:w-64 lg:h-56 shadow-lg transition-transform duration-300 hover:scale-105 ${styles["clip-softhex-glow"]}`}>
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />
        {/* Optionaler Titel – kann entfernt werden */}
        <div className="absolute bottom-2 w-full bg-avrblue/70 text-white text-center text-xs font-bold p-1 uppercase tracking-wide">
          {title}
        </div>
      </div>
    </div>
  );
}

export default function TeamHexGrid() {
  return (
    <section className="bg-white text-black py-20 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
        Unsere Teams
      </h2>
      <div className="flex flex-col gap-10 items-center">
        {/* Reihe 1 */}
        <div className="flex gap-6 justify-center">
          {teamDataTopRow.map((team) => (
            <HexCard key={team.title} {...team} />
          ))}
        </div>
        {/* Reihe 2 */}
        <div className="flex gap-6 justify-center">
          {teamDataBottomRow.map((team) => (
            <HexCard key={team.title} {...team} />
          ))}
        </div>
      </div>
    </section>
  );
}
