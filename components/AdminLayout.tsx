import { ReactNode } from "react";
import Link from "next/link";
import AdminProtectedRoute from "./AdminProtectedRoute";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <AdminProtectedRoute>
      <div className="flex min-h-screen text-white bg-black">
        <aside className="w-64 bg-neutral-900 p-4 space-y-2 border-r border-gray-800">
          <h2 className="text-xl font-bold text-avrblue mb-6">AVR Admin</h2>
          <nav className="flex flex-col space-y-2">
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
