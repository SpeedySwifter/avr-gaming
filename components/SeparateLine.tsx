export default function SeparateLine() {
  return (
    <div className="relative w-full">
      {/* Farbverlauf */}
      <div className="w-full h-10 bg-gradient-to-b from-[#000000] via-[#000000] to-[#171717]" />

      {/* Nach unten gerichteter Glow */}
      <div className="absolute top-full left-0 w-full h-24 bg-[#000000] opacity-20 blur-3xl pointer-events-none" />
    </div>
  );
}
