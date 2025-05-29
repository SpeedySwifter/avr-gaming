import Head from "next/head";
import HeaderDezent from "@/components/HeaderDezent";
import Footer from "@/components/Footer";

export default function SupportPage() {
  return (
    <>
      <Head>
        <title>Support & Hilfe | AVR</title>
      </Head>

      <HeaderDezent />

      {/* HERO SECTION mit Hintergrundbild */}
      <section className="relative text-white text-center py-28 px-6 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30 pointer-events-none"
          style={{ backgroundImage: "url('/img/support-hero.webp')" }}
        />
        <div className="absolute inset-0 z-0 bg-black opacity-30" />
        <div className="h-[30vh] flex flex-col justify-center items-center px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Support & Hilfe – <span className="text-avrblue">Wir sind für dich da.</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Du brauchst Unterstützung oder möchtest uns etwas mitteilen? Hier findest du alle Wege, uns zu erreichen.
          </p>
        </div>
      </section>

      {/* Kontaktformular */}
      <section className="bg-white py-16 px-6 text-black text-center">
        <h2 className="text-3xl font-bold mb-6">📬 Kontaktiere uns</h2>
        <form action="https://formsubmit.co/YOUR_EMAIL@example.com" method="POST" className="max-w-xl mx-auto space-y-4">
          <input type="text" name="name" placeholder="Dein Name" required className="w-full p-3 border rounded" />
          <input type="email" name="email" placeholder="Deine E-Mail" required className="w-full p-3 border rounded" />
          <textarea name="message" placeholder="Deine Nachricht" required className="w-full p-3 border rounded h-32" />
          <button type="submit" className="bg-avrblue text-white px-6 py-3 rounded font-bold hover:bg-blue-600">
            Nachricht senden
          </button>
        </form>
      </section>

      {/* Spendenbereich */}
      <section className="bg-gray-100 py-16 px-6 text-black text-center">
        <h2 className="text-3xl font-bold mb-6">💙 Unterstütze unser Projekt</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Mit deiner Unterstützung hilfst du uns, das Projekt weiterzuentwickeln und mehr Menschen zu erreichen.
        </p>
        <a href="https://www.buymeacoffee.com/avr" target="_blank" rel="noopener noreferrer"
           className="inline-block bg-yellow-400 text-black px-6 py-3 rounded font-bold hover:bg-yellow-500">
          Jetzt spenden
        </a>
      </section>

      <Footer />
    </>
  );
}
