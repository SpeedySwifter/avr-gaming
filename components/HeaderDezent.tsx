import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function HeaderDecent() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/60 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="AVR Gaming Logo"
            width={150}
            height={100}
            className="h-auto w-12"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-white text-sm font-medium">
          <Link href="/teams" className="hover:text-avrblue transition">Teams</Link>
          <Link href="/news" className="hover:text-avrblue transition">News</Link>
          <Link href="/awards" className="hover:text-avrblue transition">Awards</Link>
          <Link href="/sponsoren" className="hover:text-avrblue transition">Sponsoren</Link>
          <Link href="/support" className="hover:bg-avrblue hover:text-black transition px-4 py-2 border border-avrblue rounded">
            Support
          </Link>
        </nav>

        {/* Mobile Menü Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menü */}
      {menuOpen && (
        <nav className="md:hidden bg-black text-white px-6 pb-6 pt-4">
          <ul className="flex flex-col items-center space-y-4 text-base font-medium">
            <li>
              <Link href="/teams" onClick={() => setMenuOpen(false)} className="hover:text-avrblue transition">
                Teams
              </Link>
            </li>
            <li>
              <Link href="/news" onClick={() => setMenuOpen(false)} className="hover:text-avrblue transition">
                News
              </Link>
            </li>
            <li>
              <Link href="/awards" onClick={() => setMenuOpen(false)} className="hover:text-avrblue transition">
                Awards
              </Link>
            </li>
            <li>
              <Link href="/sponsoren" onClick={() => setMenuOpen(false)} className="hover:text-avrblue transition">
                Sponsoren
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-block bg-avrblue text-black px-6 py-2 rounded hover:bg-white hover:text-avrblue transition"
              >
                Support
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}