import SponsorCard from "@/components/SponsorCard";
import HeaderDezent from "@/components/HeaderDezent";
import Footer from "@/components/Footer";

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
  },
];

export default function SponsorenPage() {
  return (
    <>
      <HeaderDezent />
      <section className="relative text-white text-center py-28 px-6 overflow-hidden">
        {/* Hintergrundbild */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30 pointer-events-none"
          style={{ backgroundImage: "url('/img/sponsoren-hero.webp')" }}
        />

        {/* Schwarzes Overlay für bessere Lesbarkeit */}
        <div className="absolute inset-0 z-10 bg-black opacity-30 pointer-events-none" />

        {/* Text-Inhalt */}
        <div className="relative z-20 h-[30vh] flex flex-col justify-center items-center px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Unsere Sponsoren –{" "}
            <span className="text-avrblue">Support & Partnerschaft</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Starke Marken, starke Community. Diese Unternehmen machen unseren
            Weg möglich – Danke für euren Support!
          </p>
        </div>
      </section>

      <main className="bg-gray-50 py-24 px-6 min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Unsere Sponsoren
        </h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {sponsors.map((sponsor) => (
            <SponsorCard key={sponsor.name} {...sponsor} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
