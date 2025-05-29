import Image from "next/image";

const sponsors = [
  { name: "Owayo", url: "https://www.owayo.de", logo: "/sponsors/owayo.png" },
  {
    name: "Lootchest",
    url: "https://www.lootchest.de",
    logo: "/sponsors/lootchest.png",
  },
  { name: "Gain", url: "https://www.gain.de", logo: "/sponsors/gain.png" },
  {
    name: "beRARE.MEDIA",
    url: "https://www.berare.media",
    logo: "/sponsors/berare.png",
  },
  {
    name: "Modokii",
    url: "https://mojokaii.com",
    logo: "/sponsors/modokaii.png",
  },
  {
    name: "Heiper LAN House",
    url: "https://www.heiperlan.de",
    logo: "/sponsors/heiper.png",
  },
  {
    logo: "/sponsors/lanBunker.webp",
    name: "LAN Bunker",
    url: "https://lan-bunker.eu/", 
  },
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
