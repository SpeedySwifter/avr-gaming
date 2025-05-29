import { useEffect, useState } from "react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  coverImage: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [newPost, setNewPost] = useState<BlogPost>({
    id: "",
    title: "",
    excerpt: "",
    content: "",
    date: new Date().toISOString(),
    coverImage: "",
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then(setPosts)
      .catch((err) => console.error("Fehler beim Laden der Blogposts:", err));
  }, []);

  const savePost = async () => {
    const method = editingId ? "PUT" : "POST";
    const res = await fetch("/api/blog", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    });

    if (res.ok) {
      const data = await res.json();
      if (method === "POST") {
        setPosts([...posts, data.post]);
      } else {
        setPosts(posts.map((p) => (p.id === data.post.id ? data.post : p)));
      }
      setNewPost({ id: "", title: "", excerpt: "", content: "", date: new Date().toISOString(), coverImage: "" });
      setEditingId(null);
    }
  };

  const editPost = (post: BlogPost) => {
    setNewPost(post);
    setEditingId(post.id);
  };

  const deletePost = async (id: string) => {
    const res = await fetch("/api/blog", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      setPosts(posts.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-6">Blog verwalten</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          placeholder="ID"
          className="p-2 rounded bg-gray-800 text-white"
          value={newPost.id}
          disabled={!!editingId}
          onChange={(e) => setNewPost({ ...newPost, id: e.target.value })}
        />
        <input
          type="text"
          placeholder="Titel"
          className="p-2 rounded bg-gray-800 text-white"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Kurzbeschreibung"
          className="p-2 rounded bg-gray-800 text-white"
          value={newPost.excerpt}
          onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
        />
        <input
          type="text"
          placeholder="Cover-Image"
          className="p-2 rounded bg-gray-800 text-white"
          value={newPost.coverImage}
          onChange={(e) => setNewPost({ ...newPost, coverImage: e.target.value })}
        />
        <textarea
          placeholder="Inhalt"
          className="p-2 rounded bg-gray-800 text-white md:col-span-2"
          rows={5}
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
      </div>

      <button
        onClick={savePost}
        className="bg-avrblue hover:bg-blue-600 px-4 py-2 rounded font-semibold"
      >
        {editingId ? "Beitrag aktualisieren" : "Beitrag hinzufügen"}
      </button>

      <ul className="mt-10 space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="bg-gray-900 p-4 rounded">
            <p className="font-bold text-lg">{post.title}</p>
            <p className="text-sm text-gray-400 mb-2">{post.excerpt}</p>
            <div className="flex gap-4">
              <button
                onClick={() => editPost(post)}
                className="text-yellow-400 hover:text-yellow-500 text-sm font-semibold"
              >
                ✎ Bearbeiten
              </button>
              <button
                onClick={() => deletePost(post.id)}
                className="text-red-400 hover:text-red-600 text-sm font-semibold"
              >
                ✕ Löschen
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
