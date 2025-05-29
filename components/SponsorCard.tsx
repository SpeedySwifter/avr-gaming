import Image from "next/image";

interface SponsorCardProps {
  logo: string;
  name: string;
  description: string;
  url: string;
}

export default function SponsorCard({ logo, name, description, url }: SponsorCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-2xl shadow-md p-6 text-gray-800 transition hover:shadow-lg hover:scale-[1.01]"
    >
      <div className="flex items-center justify-center h-20 mb-4">
        <Image src={logo} alt={name} width={140} height={40} objectFit="contain" />
      </div>
      <p className="text-sm leading-relaxed">{description}</p>
    </a>
  );
}
