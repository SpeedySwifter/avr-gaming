import AdminLayout from "@/components/AdminLayout";
export default function Dashboard() {
  return (
    <AdminLayout>
      <div className="p-6 text-white">
        <h1 className="text-3xl font-bold mb-4">Willkommen im Admin Dashboard</h1>
        <p className="text-gray-400">Verwalte Teams, Spieler und mehr.</p>
      </div>
    </AdminLayout>
  );
}
