export default function PlayerCard({ name, role, image, color = 'bg-avrblue' }) {
  return (
    <div className="relative w-64 transition-transform hover:scale-105">
      {/* Glow-Spot unter der Card */}
      <div className="absolute inset-0 flex justify-center items-end pointer-events-none">
        <div className="w-40 h-8 bg-[#70ccff] blur-2xl opacity-70 rounded-full" />
      </div>

      {/* Card selbst */}
      <div className={`relative rounded-l shadow-lg overflow-hidden w-64 ${color} bg-opacity-5 backdrop-blur p-4`}>
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover rounded-md"
        />
        <div className="mt-4 text-center">
          <h3 className="text-xl font-headline text-avrblue">{name}</h3>
          <p className="text-sm font-body text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}
