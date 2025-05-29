import { useEffect, useState } from "react";
import Head from "next/head";

export default function Blog() {
  const [posts, setPosts] = useState([]);

useEffect(() => {
  const loadPosts = async () => {
    try {
      const res = await fetch("/blog/index.json");
      if (!res.ok) throw new Error("index.json nicht gefunden");
      const data = await res.json();

      const sorted = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setPosts(sorted);
    } catch (err) {
      console.error("Fehler beim Laden der Blogbeiträge:", err);
    }
  };

  loadPosts();
}, []);


  return (
    <>
      <Head>
        <title>AVR Blog</title>
      </Head>

      <main className="min-h-screen bg-black text-white py-12 px-6">
        <h1 className="text-4xl font-bold text-avrblue mb-10 text-center">AVR Blog</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="rounded-2xl overflow-hidden shadow-lg bg-white/5 hover:scale-105 transition-transform"
            >
              {post.localImage && (
                <img
                  src={post.localImage}
                  alt="Beitragsbild"
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2
                  className="text-xl font-bold text-avrblue mb-2"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                <p
                  className="text-sm text-gray-300"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-medium text-avrblue hover:underline"
                >
                  Beitrag ansehen →
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}