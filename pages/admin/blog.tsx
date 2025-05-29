import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import AdminLayout from "@/pages/admin/AdminLayout";
import AdminProtectedRoute from "@/components/AdminProtectedRoute";

interface BlogPost {
  id: number;
  title: { rendered: string };
  excerpt?: { rendered: string };
  date: string;
  slug: string;
  link: string;
  localImage?: string;
}

export default function BlogOverview() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort(
          (a: BlogPost, b: BlogPost) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setPosts(sorted);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  function handleDelete(id: number) {
    if (!confirm("Willst du diesen Beitrag wirklich löschen?")) return;

    fetch("/api/blog", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })
      .then((res) => {
        if (res.ok) {
          setPosts((prev) => prev.filter((post) => post.id !== id));
        } else {
          alert("Fehler beim Löschen");
        }
      })
      .catch(() => alert("Netzwerkfehler beim Löschen"));
  }

  return (
    <AdminProtectedRoute>
      <AdminLayout>
        <Head>
          <title>📝 Blog | Adminbereich</title>
        </Head>

        <div className="p-6 max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-avrblue">Blogbeiträge verwalten</h1>
            <Link
              href="/admin/blog/new"
              className="bg-avrblue hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
            >
              ➕ Neuer Beitrag
            </Link>
          </div>

          {loading ? (
            <p className="text-white">Lade Beiträge...</p>
          ) : posts.length === 0 ? (
            <p className="text-gray-400">Keine Beiträge gefunden.</p>
          ) : (
            <ul className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <li
                  key={post.id}
                  className="border border-neutral-700 rounded-xl bg-neutral-900 overflow-hidden shadow hover:shadow-lg transition"
                >
                  {post.localImage && (
                    <img
                      src={post.localImage}
                      alt={post.title.rendered}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-4 flex flex-col justify-between h-full">
                    <div>
                      <h2 className="text-xl font-semibold mb-1">{post.title.rendered}</h2>
                      <p className="text-sm text-gray-400 mb-2">
                        {new Date(post.date).toLocaleDateString()}
                      </p>
                      {post.excerpt?.rendered ? (
                        <div
                          className="text-gray-300 text-sm line-clamp-4"
                          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                        />
                      ) : (
                        <p className="text-gray-500 text-sm italic">Kein Auszug vorhanden.</p>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-1 bg-gray-800 rounded text-sm text-white hover:bg-gray-700"
                      >
                        Beitrag ansehen
                      </a>
                      <Link
                        href={`/admin/blog/edit/${post.id}`}
                        className="px-2 py-1 bg-blue-700 rounded text-sm text-white hover:bg-blue-600"
                      >
                        Bearbeiten
                      </Link>
                      <button
                        className="px-2 py-1 bg-red-700 rounded text-sm text-white hover:bg-red-600"
                        onClick={() => handleDelete(post.id)}
                      >
                        Löschen
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </AdminLayout>
    </AdminProtectedRoute>
  );
}
