import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditTeamPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [team, setTeam] = useState(null);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    if (!slug) return;
    fetch("/data/players.json")
      .then(res => res.json())
      .then(setPlayers);

    fetch(`/api/teams/${slug}`)
      .then(res => res.json())
      .then(setTeam);
  }, [slug]);

  const handleSave = async () => {
    await fetch(`/api/teams/${slug}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(team),
    });
    router.push("/admin/teams");
  };

  if (!team) return <p>Lade Teamdaten …</p>;

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Team bearbeiten</h1>
      <input
        value={team.title}
        onChange={(e) => setTeam({ ...team, title: e.target.value })}
        className="block mb-2 p-2 text-black"
      />
      <textarea
        value={team.description}
        onChange={(e) => setTeam({ ...team, description: e.target.value })}
        className="block mb-2 p-2 text-black"
      />
      <select
        value={team.image}
        onChange={(e) => setTeam({ ...team, image: e.target.value })}
        className="block mb-2 p-2 text-black"
      >
        <option value="">Bild auswählen</option>
        {/* Optional: Bildliste laden */}
      </select>

      <label className="block mb-2">Spieler zuweisen:</label>
      <select
        multiple
        value={team.players || []}
        onChange={(e) =>
          setTeam({
            ...team,
            players: Array.from(e.target.selectedOptions).map((o) => o.value),
          })
        }
        className="block mb-4 p-2 text-black"
      >
        {players.map((player) => (
          <option key={player.id} value={player.id}>
            {player.name}
          </option>
        ))}
      </select>

      <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded">
        Speichern
      </button>
    </div>
  );
}
