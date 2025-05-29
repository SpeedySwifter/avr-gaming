
import { useEffect, useState } from "react";
import AdminLayout from "@/pages/admin/AdminLayout";

interface Player {
  id: string;
  name: string;
  role: string;
  image: string;
}

export default function PlayersPage() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [newPlayer, setNewPlayer] = useState<Player>({
    id: "",
    name: "",
    role: "",
    image: "",
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/players")
      .then((res) => res.json())
      .then(setPlayers)
      .catch((err) => console.error("Fehler beim Laden der Spieler:", err));
  }, []);

  const addPlayer = async () => {
    if (!newPlayer.id || !newPlayer.name) return;

    try {
      const res = await fetch("/api/players", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlayer),
      });

      if (res.ok) {
        const saved = await res.json();
        setPlayers([...players, saved.player]);
        setNewPlayer({ id: "", name: "", role: "", image: "" });
      } else {
        console.error("Fehler beim Speichern:", res.statusText);
      }
    } catch (error) {
      console.error("Fehler beim POST:", error);
    }
  };

  const updatePlayer = async () => {
    if (!editingId) return;
    try {
      const res = await fetch("/api/players", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlayer),
      });
      if (res.ok) {
        const updated = await res.json();
        setPlayers(players.map((p) => (p.id === updated.player.id ? updated.player : p)));
        setNewPlayer({ id: "", name: "", role: "", image: "" });
        setEditingId(null);
      }
    } catch (error) {
      console.error("Fehler beim PUT:", error);
    }
  };

  const editPlayer = (player: Player) => {
    setNewPlayer(player);
    setEditingId(player.id);
  };

  const deletePlayer = async (id: string) => {
    try {
      const res = await fetch("/api/players", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        setPlayers(players.filter((p) => p.id !== id));
      } else {
        console.error("Fehler beim Löschen:", res.statusText);
      }
    } catch (error) {
      console.error("Fehler beim DELETE:", error);
    }
  };

  return (
    <AdminLayout>
      <div className="p-6 text-white">
        <h1 className="text-2xl font-bold mb-6">Spieler verwalten</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input
            className="p-2 rounded bg-gray-800 text-white"
            type="text"
            placeholder="ID (slug)"
            value={newPlayer.id}
            onChange={(e) => setNewPlayer({ ...newPlayer, id: e.target.value })}
            disabled={!!editingId}
          />
          <input
            className="p-2 rounded bg-gray-800 text-white"
            type="text"
            placeholder="Name"
            value={newPlayer.name}
            onChange={(e) => setNewPlayer({ ...newPlayer, name: e.target.value })}
          />
          <input
            className="p-2 rounded bg-gray-800 text-white"
            type="text"
            placeholder="Rolle (z. B. Support)"
            value={newPlayer.role}
            onChange={(e) => setNewPlayer({ ...newPlayer, role: e.target.value })}
          />
          <input
            className="p-2 rounded bg-gray-800 text-white"
            type="text"
            placeholder="Bildpfad (z. B. /players/max.png)"
            value={newPlayer.image}
            onChange={(e) => setNewPlayer({ ...newPlayer, image: e.target.value })}
          />
        </div>

        <button
          onClick={editingId ? updatePlayer : addPlayer}
          className="bg-avrblue hover:bg-blue-600 px-4 py-2 rounded font-semibold"
        >
          {editingId ? "Spieler aktualisieren" : "Spieler hinzufügen"}
        </button>

        <ul className="mt-10 space-y-4">
          {players.map((player) => (
            <li key={player.id} className="flex items-center gap-4 bg-gray-900 p-4 rounded">
              <img
                src={player.image}
                alt={player.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="font-bold">{player.name}</p>
                <p className="text-sm text-gray-400">{player.role}</p>
              </div>
              <button
                onClick={() => editPlayer(player)}
                className="text-yellow-400 hover:text-yellow-500 text-sm font-semibold mr-2"
              >
                ✎ Bearbeiten
              </button>
              <button
                onClick={() => deletePlayer(player.id)}
                className="text-red-400 hover:text-red-600 text-sm font-semibold"
              >
                ✕ Löschen
              </button>
            </li>
          ))}
        </ul>
      </div>
    </AdminLayout>
  );
}
