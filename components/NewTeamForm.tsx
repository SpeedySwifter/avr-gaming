import { useState, useEffect } from "react";

export default function NewTeamForm({ onAdd }: { onAdd: () => void }) {
  const [slug, setSlug] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/teams/images").then((res) => res.json()).then(setImages);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newTeam = { slug, title, description, image };
    await fetch("/api/teams", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTeam),
    });

    setSlug(""); setTitle(""); setDescription(""); setImage("");
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold text-white mb-4">🆕 Neues Team</h2>

      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Slug (z. B. call-of-duty)"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          required
          className="bg-neutral-900 border border-neutral-700 text-white rounded px-3 py-2"
        />

        <input
          type="text"
          placeholder="Titel"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="bg-neutral-900 border border-neutral-700 text-white rounded px-3 py-2"
        />

        <textarea
          placeholder="Beschreibung"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-neutral-900 border border-neutral-700 text-white rounded px-3 py-2 resize-none"
          rows={3}
        />

        <select
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="bg-neutral-900 border border-neutral-700 text-white rounded px-3 py-2"
        >
          <option value="">Bild auswählen</option>
          {images.map((img) => (
            <option key={img} value={img}>
              {img}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded mt-2 self-start"
        >
          ➕ Hinzufügen
        </button>
      </div>
    </form>
  );
}
