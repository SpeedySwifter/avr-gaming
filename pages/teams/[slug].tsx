import fs from "fs";
import path from "path";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import HeaderDezent from "@/components/HeaderDezent";
import Footer from "@/components/Footer";

interface Team {
  slug: string;
  title: string;
  image: string;
  description?: string;
  players?: string[];
}

interface TeamPageProps {
  team: Team | null;
}


export default function TeamPage({ team }: TeamPageProps) {
  if (!team) {
    return (
      <main className="min-h-screen bg-white text-black flex items-center justify-center">
        <p className="text-xl">Team nicht gefunden.</p>
      </main>
    );
  }

  return (
    <>
      <Head>
        <title>{team.title} | AVR Teams</title>
      </Head>

      <HeaderDezent />

      <section className="bg-black text-white text-center py-28 px-6 relative">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center z-0" style={{ backgroundImage: `url('${team.image}')` }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{team.title}</h1>
          {team.description && <p className="text-lg text-gray-300">{team.description}</p>}
        </div>
      </section>

      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-black mb-8">Spieler</h2>
        {team.players && team.players.length > 0 ? (
          <ul className="flex flex-wrap justify-center gap-4 text-lg">
            {team.players.map((player, index) => (
              <li key={index} className="px-4 py-2 bg-avrblue text-black rounded-lg shadow">
                {player}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Keine Spielerinformationen vorhanden.</p>
        )}
      </section>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const filePath = path.join(process.cwd(), "public/data/teams.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const teams: Team[] = JSON.parse(fileContent);

  const paths = teams.map((team) => ({
    params: { slug: team.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const filePath = path.join(process.cwd(), "public/data/teams.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const teams: Team[] = JSON.parse(fileContent);

  const team = teams.find((t) => t.slug === params?.slug) || null;

  return {
    props: {
      team,
    },
  };
};
