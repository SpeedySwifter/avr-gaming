import { useEffect, useState } from "react";
import AdminLayout from "@/pages/admin/AdminLayout";

interface Award {
  id: string;
  title: string;
  description: string;
  team: string;
}

export default function AwardsPage() {
  const [awards, setAwards] = useState<Award[]>([]);
  const [newAward, setNewAward] = useState<Award>({
    id: "",
    title: "",
    description: "",
    team: "",
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/awards")
      .then((res) => res.json())
      .then(setAwards)
      .catch((err) => console.error("Fehler beim Laden:", err));
  }, []);

  const saveAward = async () => {
    const method = editingId ? "PUT" : "POST";
    const body = JSON.stringify(newAward);
    const res = await fetch("/api/awards", {
      method,
      headers: { "Content-Type": "application/json" },
      body,
    });

    if (res.ok) {
      const updated = await res.json();
      setAwards((prev) =>
        editingId
          ? prev.map((a) => (a.id === updated.award.id ? updated.award : a))
          : [...prev, updated.award]
      );
      setNewAward({ id: "", title: "", description: "", team: "" });
      setEditingId(null);
    }
  };

  const editAward = (award: Award) => {
    setNewAward(award);
    setEditingId(award.id);
  };

  const deleteAward = async (id: string) => {
    const res = await fetch("/api/awards", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (res.ok) setAwards(awards.filter((a) => a.id !== id));
  };

  return (
    <AdminLayout>
      <div className="p-6 text-white">
        <h1 className="text-2xl font-bold mb-6">Awards verwalten</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input
            className="p-2 rounded bg-gray-800 text-white"
            type="text"
            placeholder="ID"
            value={newAward.id}
            onChange={(e) => setNewAward({ ...newAward, id: e.target.value })}
            disabled={!!editingId}
          />
          <input
            className="p-2 rounded bg-gray-800 text-white"
            type="text"
            placeholder="Titel"
            value={newAward.title}
            onChange={(e) => setNewAward({ ...newAward, title: e.target.value })}
          />
          <input
            className="p-2 rounded bg-gray-800 text-white"
            type="text"
            placeholder="Beschreibung"
            value={newAward.description}
            onChange={(e) => setNewAward({ ...newAward, description: e.target.value })}
          />
          <input
            className="p-2 rounded bg-gray-800 text-white"
            type="text"
            placeholder="Team (z. B. cod)"
            value={newAward.team}
            onChange={(e) => setNewAward({ ...newAward, team: e.target.value })}
          />
        </div>

        <button
          onClick={saveAward}
          className="bg-avrblue hover:bg-blue-600 px-4 py-2 rounded font-semibold"
        >
          {editingId ? "Award aktualisieren" : "Award hinzufügen"}
        </button>

        <ul className="mt-10 space-y-4">
          {awards.map((award) => (
            <li key={award.id} className="bg-gray-900 p-4 rounded">
              <p className="font-bold">{award.title} ({award.team})</p>
              <p className="text-sm text-gray-400">{award.description}</p>
              <div className="mt-2 flex gap-4">
                <button
                  onClick={() => editAward(award)}
                  className="text-yellow-400 hover:text-yellow-500 text-sm font-semibold"
                >
                  ✎ Bearbeiten
                </button>
                <button
                  onClick={() => deleteAward(award.id)}
                  className="text-red-400 hover:text-red-600 text-sm font-semibold"
                >
                  ✕ Löschen
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </AdminLayout>
  );
}
