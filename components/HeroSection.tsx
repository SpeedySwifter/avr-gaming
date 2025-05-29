export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center bg-black text-white px-6">
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          WE DON’T JUST PLAY THE GAME – <span className="text-avrblue">WE DEFINE IT.</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-300">
          Die Heimat für kompetitives Gaming und Teamgeist.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/support"
            className="px-6 py-3 rounded-md bg-avrblue text-black font-semibold text-lg shadow-md hover:scale-105 hover:shadow-cyan-400/40 transition-all duration-300"
          >
            Donate
          </a>
          <a
            href="/about"
            className="px-6 py-3 rounded-md border border-white text-white font-medium text-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            Read more
          </a>
        </div>
      </div>
    </section>
  );
}
