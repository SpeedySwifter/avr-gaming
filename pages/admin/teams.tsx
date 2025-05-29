import { useEffect, useState } from "react";
import Link from "next/link";
import NewTeamForm from "@/components/NewTeamForm";
import AdminLayout from "@/components/AdminLayout"; // ACHTUNG: ggf. anpassen!

interface Team {
  slug: string;
  title: string;
  image?: string;
  description?: string;
  players?: string[];
}

export default function TeamsPage() {
  const [teams, setTeams] = useState<Team[]>([]);

  const loadTeams = () => {
    fetch("/api/teams")
      .then((res) => res.json())
      .then(setTeams);
  };

  const deleteTeam = async (slug: string) => {
    if (!confirm("Team wirklich löschen?")) return;
    await fetch(`/api/teams/${slug}`, { method: "DELETE" });
    loadTeams();
  };

  useEffect(() => {
    loadTeams();
  }, []);

  return (
    <AdminLayout>
      <div className="p-8 text-white max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-10 text-center">🛠 Teamverwaltung</h1>

        <div className="mb-12">
          <NewTeamForm onAdd={loadTeams} />
        </div>

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teams.map((team) => (
            <li
              key={team.slug}
              className="bg-gradient-to-b from-neutral-900 to-neutral-800 border border-neutral-700 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center gap-4">
                {team.image && (
                  <img
                    src={team.image}
                    alt={team.title}
                    className="w-24 h-24 object-cover rounded-full ring-2 ring-avrblue shadow-lg"
                  />
                )}
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-1">{team.title}</h3>
                  <p className="text-sm text-gray-400">{team.description}</p>
                  {team.players && team.players.length > 0 && (
                    <p className="text-xs text-gray-500 mt-1">
                      🎮 Spieler: {team.players.join(", ")}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex justify-center gap-4 mt-6">
                <Link href={`/admin/teams/${team.slug}`}>
                  <button className="bg-blue-600 px-4 py-1.5 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                    ✏️ Bearbeiten
                  </button>
                </Link>
                <button
                  onClick={() => deleteTeam(team.slug)}
                  className="bg-red-600 px-4 py-1.5 rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
                >
                  🗑️ Löschen
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </AdminLayout>
  );
}
