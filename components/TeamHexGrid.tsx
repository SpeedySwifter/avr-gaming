import { useEffect, useState } from "react";
import { HexCard } from "./HexGrid";
import Link from "next/link";

interface Team {
  slug: string;
  title: string;
  image: string;
  description?: string;
}

export default function TeamHexGrid() {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    fetch("/data/teams.json")
      .then((res) => res.json())
      .then(setTeams)
      .catch((err) => console.error("Fehler beim Laden der Teams:", err));
  }, []);

  // Automatische Aufteilung in Reihen
  const topRow = teams.slice(0, 2);
  const middleRow = teams.slice(2, 5);
  const bottomRow = teams.slice(5);

  return (
    <section className="py-16 px-6 bg-white text-center overflow-hidden">
      <h2 className="text-2xl md:text-4xl font-semibold text-black mb-10">
        Unsere Teams
      </h2>

      {teams.length > 0 ? (
        <div className="flex flex-col items-center gap-[-2rem]">
          {/* Obere Reihe */}
          <div className="flex justify-center -space-x-6">
            {topRow.map((team) => (
              <Link key={team.slug} href={`/teams/${team.slug}`}>
                <HexCard {...team} />
              </Link>
            ))}
          </div>

          {/* Mittlere Reihe */}
          <div className="flex justify-center -space-x-6 -translate-y-6">
            {middleRow.map((team) => (
              <Link key={team.slug} href={`/teams/${team.slug}`}>
                <HexCard {...team} />
              </Link>
            ))}
          </div>

          {/* Untere Reihe */}
          <div className="flex justify-center -space-x-6 -translate-y-6">
            {bottomRow.map((team) => (
              <Link key={team.slug} href={`/teams/${team.slug}`}>
                <HexCard {...team} />
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Keine Teams gefunden …</p>
      )}
    </section>
  );
}
