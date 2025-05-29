// pages/teams.tsx

import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import HeaderDezent from "@/components/HeaderDezent";
import Footer from "@/components/Footer";
import TeamHexGrid from "@/components/TeamHexGrid";

interface Team {
  slug: string;
  title: string;
  image: string;
}

export default function TeamsPage() {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    fetch("/api/teams")
      .then((res) => res.json())
      .then((data) => setTeams(data))
      .catch((err) => console.error("Fehler beim Laden der Teams:", err));
  }, []);

  return (
    <>
      <Head>
        <title>Unsere Teams | AVR</title>
        <meta
          name="description"
          content="Lerne die verschiedenen eSport-Teams von AVengeR Gaming e.V. kennen – Fokus, Spiel und Erfolg in jeder Division."
        />
      </Head>

      <HeaderDezent />

      {/* HERO SECTION */}
      <section className="relative text-white text-center py-28 px-6 overflow-hidden">
        {/* Hintergrundbild */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30 pointer-events-none"
          style={{ backgroundImage: "url('/img/teams-hero.webp')" }}
        />

        {/* Optionales dunkles Overlay */}
        <div className="absolute inset-0 z-10 bg-black opacity-30 pointer-events-none" />

        {/* Text-Inhalt */}
        <div className="relative z-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Unsere Teams – <span className="text-avrblue">Fokus. Spiel. Erfolg.</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Strategie, Leidenschaft und Teamgeist. Lerne unsere Divisionen kennen – und finde dein Team.
          </p>
        </div>
      </section>

      {/* TEAMS GRID SECTION */}
      <TeamHexGrid />

      <Footer />
    </>
  );
}
