import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";
import SponsorBar from "./SponsorBar";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-white h-15 px-8 text-sm text-black flex items-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex gap-4">
          
        <SocialIcons/>

        </div>

        {/* ESBD Logo / Info */}
        <a
          href="https://esportbund.de"
          target="_blank"
          rel="noopener noreferrer"
          className="flex max-h-8 flex-col items-center text-center"
        >
          <div className="relative w-32 h-10 mt-1">
            <Image
              src="/esbd-logo.webp"
              alt="ESBD Logo"
              fill
              className="object-contain"
            />
          </div>
        </a>

        {/* Legal Links */}
        <div className="flex gap-6">
          <a
            href="/datenschutz"
            className="uppercase text-avrblue tracking-wide hover:opacity-80"
          >
            Datenschutz
          </a>
          <a
            href="/impressum"
            className="uppercase text-avrblue tracking-wide hover:opacity-80"
          >
            Impressum
          </a>
        </div>
      </div>
    </footer>
  );
}
