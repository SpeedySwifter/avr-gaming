import PlayerCard from './PlayerCard';

const players = [
  {
    name: 'Kevin "LeNizWaY" Scheibel',
    role: 'Leader',
    image: '/member/KevinScheibel.png',
  },  {
    name: 'Kevin "LeNizWaY" Scheibel',
    role: 'Leader',
    image: '/member/KevinScheibel.png',
  },  {
    name: 'Kevin "LeNizWaY" Scheibel',
    role: 'Leader',
    image: '/member/KevinScheibel.png',
  },
];

export default function TeamGrid() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-5xl font-headline text-avrblue text-center mb-10">Unser Team</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
        {players.map((player, index) => (
          <PlayerCard key={index} {...player} />
        ))}
      </div>
    </section>
  );
}
