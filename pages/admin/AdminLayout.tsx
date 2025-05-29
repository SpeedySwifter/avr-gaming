import { ReactNode } from "react";
import Link from "next/link";
import AdminProtectedRoute from "@/components/AdminProtectedRoute";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <AdminProtectedRoute>
      <div className="min-h-screen flex bg-black text-white">
        <aside className="w-64 p-6 bg-neutral-900 border-r border-gray-800 space-y-4">
          <h2 className="text-xl font-bold text-avrblue mb-6">AVR Admin</h2>
          <nav className="flex flex-col space-y-2 text-sm">
            <Link href="/admin/dashboard" className="hover:text-avrblue">📊 Dashboard</Link>
            <Link href="/admin/teams" className="hover:text-avrblue">👥 Teams</Link>
            <Link href="/admin/players" className="hover:text-avrblue">🎮 Spieler</Link>
            <Link href="/admin/awards" className="hover:text-avrblue">🏆 Awards</Link>
            <Link href="/admin/blog" className="hover:text-avrblue">📝 Blog</Link>
          </nav>
        </aside>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </AdminProtectedRoute>
  );
}
