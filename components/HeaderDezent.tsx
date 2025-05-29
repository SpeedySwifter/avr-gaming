import Link from "next/link";
import Image from "next/image";

export default function HeaderDecent() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/60 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-1 flex justify-between items-center">
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

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-white text-sm font-medium">
          <Link href="/teams" className="hover:text-avrblue transition">Teams</Link>
          <Link href="/news" className="hover:text-avrblue transition">News</Link>
          <Link href="/awards" className="hover:text-avrblue transition">Awards</Link>
          <Link href="/sponsoren" className="hover:text-avrblue transition">Sponsoren</Link>
          <Link href="/support" className="hover:bg-avrblue hover:text-black transition px-4 py-2 border border-avrblue rounded">
            Support
          </Link>
        </nav>
      </div>
    </header>
  );
}
