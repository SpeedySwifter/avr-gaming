import { HexCard } from "./HexGrid";

const teamDataTopRow = [
  { title: "Call of Duty", image: "/img/cod.webp" },
  { title: "EA Sports FC", image: "/img/fifa.webp" },

];

const teamDataMiddelRow = [
  { title: "Rainbow Six", image: "/img/rainbow.webp" },
  { title: "PUBG", image: "/img/pubg.webp" },
  { title: "Halo", image: "/img/halo-infinite.webp" },
];

const teamDataBottomRow = [
  
  { title: "Historic", image: "/img/historic.webp" },
  { title: "Clash Royale", image: "/img/clash.webp" },
];

export default function TeamHexGridBorder() {
  return (
<section className="py-16 px-6 bg-white text-center">
  <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">
    Unsere Teams
  </h2>

  <div className="flex flex-col items-center gap-[-2rem]">
    {/* Obere Reihe */}
<div className="flex justify-center -space-x-6">
  {teamDataTopRow.map((team) => (
    <HexCard key={team.title} {...team} />
  ))}
</div>

    {/* Untere Reihe versetzt */}
<div className="flex justify-center -space-x-6 -translate-y-6">
  {teamDataMiddelRow.map((team) => (
    <HexCard key={team.title} {...team} />
  ))}
</div>

    {/* Untere Reihe versetzt */}
<div className="flex justify-center -space-x-6 -translate-y-6">
  {teamDataBottomRow.map((team) => (
    <HexCard key={team.title} {...team} />
  ))}
</div>

  </div>
</section>

  );
}
