export default function HeroSection() {
  return (
    <section className="text-center py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <h1 className="text-4xl md:text-5xl font-bold text-avrblue uppercase">
        WE DON’T JUST PLAY<br /> THE GAME – WE DEFINE IT.
      </h1>
      <p className="text-gray-400 mt-4">
        Die Heimat für kompetitives Gaming und Teamgeist
      </p>
      <div className="mt-6 flex justify-center space-x-4">
        <button className="bg-avrblue hover:bg-blue-600 text-white font-bold py-2 px-6 rounded">
          Join us
        </button>
        <button className="border border-avrblue hover:bg-avrblue text-white font-bold py-2 px-6 rounded">
          Read more
        </button>
      </div>
    </section>
  );
}
