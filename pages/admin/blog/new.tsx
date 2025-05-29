import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function NewBlogPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    if (res.ok) {
      router.push("/admin/blog");
    } else {
      alert("Fehler beim Speichern.");
    }
  };

  return (
    <>
      <Head>
        <title>Neuer Blogeintrag</title>
      </Head>
      <main className="min-h-screen bg-black text-white p-8">
        <h1 className="text-2xl font-bold text-avrblue mb-6">➕ Neuer Blogeintrag</h1>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
          <div>
            <label className="block mb-1">Titel</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 rounded bg-neutral-800 text-white border border-neutral-600"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Inhalt</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-40 p-2 rounded bg-neutral-800 text-white border border-neutral-600"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-avrblue px-4 py-2 rounded text-white hover:bg-blue-600"
          >
            Beitrag speichern
          </button>
        </form>
      </main>
    </>
  );
}
