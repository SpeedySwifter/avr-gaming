import Image from "next/image";

interface HexCardProps {
  title: string;
  image: string;
}

export default function HexCard({ title, image }: HexCardProps) {
  return (
    <div className="relative w-40 h-44 sm:w-48 sm:h-52 lg:w-56 lg:h-60 group">
      {/* Äußeres Hexagon */}
      <div className="absolute inset-0 hexagon pointer-events-none z-0">
        <div className="w-full h-full border-2 border-avrneoblue hexagon" />
      </div>

      {/* Inneres Hexagon mit Bild */}
      <div className="absolute inset-[5px] z-10 hexagon transition-transform duration-300 group-hover:scale-105 ring-2 ring-avrblue">
        <div className="relative w-full h-full overflow-hidden hexagon">
          <Image src={image} alt={title} fill className="object-cover" />
          <div className="absolute bottom-10 w-full bg-avrblue/60 text-center text-xs font-bold p-1 uppercase tracking-wide text-gray-700">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}
