import { useEffect } from "react";
import Head from "next/head";
import HeaderDezent from "@/components/HeaderDezent";
import Footer from "@/components/Footer";

export default function AboutPage() {
  // Body-Klassen für die gesamte Seite setzen
  useEffect(() => {
    document.body.classList.add("bg-white", "text-black");
    return () => {
      document.body.classList.remove("bg-white", "text-black");
    };
  }, []);

  return (
    <>
      <Head>
        <title>Über uns | AVengeR Gaming e.V.</title>
      </Head>

      <HeaderDezent />
      {/* HERO SECTION im Stil der Teams-Seite */}
      <section className="relative bg-black text-white text-center py-24 px-6 overflow-hidden">
        {/* Hintergrundbild */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30 pointer-events-none"
          style={{ backgroundImage: "url('/img/about-hero.webp')" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-black opacity-30 pointer-events-none" />

        {/* Text-Inhalt */}
        <div className="relative z-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Über uns – <span className="text-avrblue">AVR e.V.</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Unsere Geschichte, unsere Vision, unsere Werte – seit 2009 vereint
            im eSport.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="bg-white text-gray-800 px-6 py-24 max-w-5xl mx-auto space-y-16 text-lg rounded-t-[3rem]">
        <div>
          <h2 className="text-3xl font-bold mb-4">Wer wir sind</h2>
          <p>
            AVengeR Gaming e.V. (AVR) ist ein 2009 gegründeter deutscher
            eSport-Verein mit Fokus auf Konsolen und Multigaming. Der Name
            stammt vom Flugzeug Grumman TBF Avenger aus dem Spiel{" "}
            <em>Battlestations: Midway</em>.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Unsere Ziele</h2>
          <p>
            Wir fördern kompetitiven eSport, pflegen eine starke Community und
            engagieren uns für die gesellschaftliche Anerkennung des eSports als
            Mitglied im eSport-Bund Deutschland.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Multigaming & Community</h2>
          <p>
            Unsere Mitglieder spielen verschiedenste Titel – von Call of Duty
            bis FIFA. Dabei vernetzen wir Spieler über Spielgrenzen hinweg und
            bieten Raum für Austausch, Zusammenarbeit und Entwicklung.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Unsere Erfolge</h2>
          <p>
            Seit unserer Gründung waren über 400 Spieler:innen bei AVR aktiv.
            Mit zahlreichen Turniererfolgen, Preisgewinnen und Partnerschaften
            mit GAIN, BeRARE, owayo & Co. sind wir stolz auf unsere Geschichte.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Unsere Werte</h2>
          <p>
            Wir stehen für Fairness, Teamgeist und Toleranz. Diskriminierung,
            Extremismus und toxisches Verhalten haben bei uns keinen Platz –
            online wie offline.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Vorstand & Organisation</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Kevin „LeNinZ WaY“ Scheibel – Vorstandsvorsitzender</li>
            <li>
              Marco „Wallace“ Bodenbenner – Stellvertretender Vorsitzender
            </li>
            <li>Henning „MagicMan“ Meier – Schatzmeister</li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}
