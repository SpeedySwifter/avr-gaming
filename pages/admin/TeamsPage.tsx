import AdminLayout from "@/components/AdminLayout";
import { useEffect, useState } from "react";
import Link from "next/link";
import NewTeamForm from "@/components/NewTeamForm";

export default function TeamsPage() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch("/api/teams")
      .then((res) => res.json())
      .then(setTeams);
  }, []);
  return (
    <AdminLayout>
      <div className="max-w-6xl mx-auto p-4 text-white">
        <h1 className="text-2xl font-bold mb-4">Teamverwaltung</h1>
        <NewTeamForm
          onAdd={() =>
            fetch("/api/teams")
              .then((res) => res.json())
              .then(setTeams)
          }
        />
        <ul className="grid md:grid-cols-2 gap-4 mt-6">
          {teams.map((team: any) => (
            <li
              key={team.slug}
              className="p-4 bg-neutral-800 rounded-lg shadow"
            >
              <h2 className="font-semibold">{team.title}</h2>
              <p className="text-sm text-gray-400">{team.description}</p>
              <Link href={"/admin/teams/" + team.slug}>
                <button className="text-blue-400 text-sm mt-2">
                  Bearbeiten
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </AdminLayout>
  );
}
