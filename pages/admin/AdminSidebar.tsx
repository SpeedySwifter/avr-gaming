import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/admin", label: "📊 Dashboard" },
  { href: "/admin/teams", label: "👥 Teams" },
  { href: "/admin/players", label: "🎮 Spieler" },
  { href: "/admin/awards", label: "🏆 Awards" },
  { href: "/admin/blog", label: "📝 Blog" },
];

export default function AdminSidebar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    const path = router.pathname;
    return path === href || path.startsWith(`${href}/`);
  };

  return (
    <>
      {/* Mobile Toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 backdrop-blur bg-white/10 text-white p-2 rounded-xl shadow-lg border border-white/20"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen backdrop-blur-xl bg-white/10 border-r border-white/20 p-6 space-y-4
        transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:block rounded-tr-2xl md:rounded-none shadow-2xl`}
      >
        <h2 className="text-xl font-semibold text-white mb-6 tracking-tight">🔧 AVR Admin</h2>
        <nav className="flex flex-col gap-2 text-[15px]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block px-4 py-2 rounded-xl transition-all duration-200
                ${
                  isActive(item.href)
                    ? "bg-white/20 text-avrblue font-semibold shadow-inner"
                    : "text-white hover:bg-white/10"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
