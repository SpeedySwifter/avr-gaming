import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";

interface BlogPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  slug: string;
  link: string;
  localImage?: string;
}

export default function EditBlogPost() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");

  // Post laden
  useEffect(() => {
    if (!id) return;
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data: BlogPost[]) => {
        const match = data.find((p) => p.id.toString() === id);
        if (match) {
          setPost(match);
          setTitle(match.title.rendered);
          setExcerpt(match.excerpt.rendered);
        }
        setLoading(false);
      });
  }, [id]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!post) return;
    setSaving(true);

    const updatedPost = {
      ...post,
      title: { rendered: title },
      excerpt: { rendered: excerpt },
      date: new Date().toISOString(),
    };

    const res = await fetch("/api/blog", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedPost),
    });

    setSaving(false);

    if (res.ok) {
      alert("Änderungen gespeichert");
      router.push("/admin/blog");
    } else {
      alert("Fehler beim Speichern");
    }
  };

  if (loading) return <p className="text-white p-6">Lade Beitrag...</p>;
  if (!post) return <p className="text-red-500 p-6">Beitrag nicht gefunden.</p>;

  return (
    <>
      <Head>
        <title>Bearbeite: {title}</title>
      </Head>
      <main className="min-h-screen bg-black text-white p-8 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-avrblue mb-6">✏️ Beitrag bearbeiten</h1>
        <form onSubmit={handleSave} className="space-y-6">
          <div>
            <label className="block mb-1">Titel</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 rounded bg-neutral-800 text-white border border-neutral-600"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Kurzbeschreibung / Excerpt</label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="w-full h-40 p-2 rounded bg-neutral-800 text-white border border-neutral-600"
              required
            />
          </div>
          <button
            type="submit"
            disabled={saving}
            className="bg-avrblue px-4 py-2 rounded text-white hover:bg-blue-600 disabled:opacity-50"
          >
            {saving ? "Speichere..." : "Änderungen speichern"}
          </button>
        </form>
      </main>
    </>
  );
}
