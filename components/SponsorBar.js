import Image from "next/image";

const sponsors = [
  {
    logo: "/sponsors/owayo.png",
    name: "owayo",
    description:
      "owayo steht für faire Preise, schnellen Service und ausgezeichnete Betreuung. Mit dem 3D-Konfigurator habt ihr volle Transparenz und könnt euer eSport-Outfit individuell gestalten.",
    url: "https://www.owayo.de/",
  },
  {
    logo: "/sponsors/lootchest.png",
    name: "Lootchest",
    description:
      "Lootchest liefert monatlich Boxen voller Überraschungen für Gamer und Nerds – mit Produkten aus aktuellen Games, Filmen, Serien und vielem mehr.",
    url: "https://www.lootchest.de/",
  },
  {
    logo: "/sponsors/berare.png",
    name: "beRARE.Media",
    description:
      "beRARE.Media ist eure Agentur für moderne Medienproduktion & Social-Media-Konzepte – ob Webseiten, Logos oder Marketingstrategien.",
    url: "https://berare.media/",
  },
  {
    logo: "/sponsors/mojokaii.png",
    name: "MOJOKAii",
    description:
      "MOJOKAii steht für hochwertige Gaming-Booster mit starken Geschmacksrichtungen, fairen Preisen und Fokus auf Performance & Geschmack.",
    url: "https://www.mojokaii.com/",
  },
    {
    logo: "/sponsors/lanBunker.webp",
    name: "LAN Bunker",
    description:
      "Seit 2009 ist der LAN Bunker in Homburg ein Rückzugsort für echte Gamer – mit Platz für bis zu 16 Personen bietet er die perfekte Kulisse für eSport-Events, LAN-Partys und nächtelanges Zocken.",
    url: "https://lan-bunker.eu/", 
   }
];

export default function SponsorBar() {
  return (
<section className="bg-white text-black py-12 px-6">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-2xl md:text-3xl font-semibold mb-2">
      Unsere Partner & Sponsoren
    </h2>
    <p className="text-gray-600 mb-10">
      Gemeinsam stärker – danke für eure Unterstützung im&nbsp;eSport!
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6">
      {sponsors.map((sponsor) => (
        <a
          key={sponsor.name}
          href={sponsor.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center grayscale hover:grayscale-0 transition"
        >
          <Image
            src={sponsor.logo}
            alt={`${sponsor.name} Logo`}
            width={120}
            height={60}
            className="object-contain h-12 w-auto"
          />
        </a>
      ))}
    </div>
  </div>
</section>

  );
}
