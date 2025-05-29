import { useEffect, useState } from "react";
import Head from "next/head";
import HeaderDezent from "@/components/HeaderDezent";
import Footer from "@/components/Footer";

interface Award {
  title: string;
  year: number;
  type: string;
}

interface TeamAwards {
  team: string;
  years: string;
  awards: Award[];
}


export default function AwardsPage() {
  const [data, setData] = useState<TeamAwards[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<string>("");

useEffect(() => {
  fetch("/api/awards")
    .then((res) => res.json())
    .then((data: TeamAwards[]) => setData(data))
    .catch((err) => console.error("Fehler beim Laden der Awards:", err));
}, []);


  const filtered = selectedTeam ? data.filter((d) => d.team === selectedTeam) : data;
  const teams: string[] = [...new Set(data.map((d) => d.team))].sort();

return (
  <div className="bg-white w-full min-h-screen">
    <>
      <Head>
        <title>Awards | AVR</title>
      </Head>

      <HeaderDezent />

     <section className="relative text-white text-center py-28 px-6 overflow-hidden">
  {/* Hintergrundbild */}
  <div
    className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
    style={{ backgroundImage: "url('/img/awards-hero.webp')" }}
  />
        <div className="absolute inset-0 z-0 bg-black opacity-30" />
        <div className="h-[30vh] flex flex-col justify-center items-center px-6 text-center z-10 relative">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Unsere <span className="text-avrblue">Awards</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Leistungen, die zählen – entdecke unsere Auszeichnungen und Erfolge.
          </p>
        </div>
      </section>

      {/* AWARDS */}
      <section className="text-black py-24 px-6 max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button
            className={`px-4 py-2 rounded-full border ${
              !selectedTeam ? "bg-black text-white" : "bg-white text-black"
            }`}
            onClick={() => setSelectedTeam("")}
          >
            Alle Teams
          </button>
          {teams.map((team) => (
            <button
              key={team}
              className={`px-4 py-2 rounded-full border ${
                selectedTeam === team ? "bg-black text-white" : "bg-white text-black"
              }`}
              onClick={() => setSelectedTeam(team)}
            >
              {team}
            </button>
          ))}
        </div>

        {filtered.map((entry) => (
          <div key={entry.team} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              {entry.team} <span className="text-gray-500">({entry.years})</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {entry.awards.map((award, i) => (
                <div
                  key={`${entry.team}-${i}`}
                  className="bg-gray-100 rounded-2xl shadow p-6 transition hover:scale-105"
                >
                  <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                  <p className="text-sm text-gray-700 mb-1">{award.year}</p>
                  <p className="text-sm text-gray-500 italic">{award.type} Award</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {data.length === 0 && (
          <p className="text-gray-400 text-center mt-10">Noch keine Awards vorhanden.</p>
        )}
      </section>

      <Footer />
    </>
  </div>
  );
}
