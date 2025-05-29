import Image from "next/image";
import styles from "./HexCard.module.css";

export function HexCard({ title, image }: { title: string; image: string }) {
  return (
    <div className={`relative w-48 h-40 sm:w-56 sm:h-48 lg:w-64 lg:h-56 transition-transform duration-300 hover:scale-105 shadow-lg ${styles["clip-softhex-glow"]}`}>
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />

      {/* Optionaler Titel */}
      <div className="absolute bottom-2 w-full bg-black/60 text-white text-center text-xs font-bold p-1 uppercase tracking-wide z-20">
        {title}
      </div>
    </div>
  );
}
