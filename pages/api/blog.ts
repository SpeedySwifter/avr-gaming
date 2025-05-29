import { promises as fs } from "fs";
import path from "path";
import type { NextApiRequest, NextApiResponse } from "next";

const dataPath = path.join(process.cwd(), "src/admin/data/blog.json");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const file = await fs.readFile(dataPath, "utf-8");
    const posts = JSON.parse(file);

    if (req.method === "GET") {
      return res.status(200).json(posts);
    }

    if (req.method === "POST") {
      const newPost = req.body;
      posts.push(newPost);
      await fs.writeFile(dataPath, JSON.stringify(posts, null, 2), "utf-8");
      return res.status(201).json({ message: "Beitrag hinzugefügt", post: newPost });
    }

    if (req.method === "PUT") {
      const updatedPost = req.body;
      const index = posts.findIndex((p: any) => p.id === updatedPost.id);

      if (index === -1) {
        return res.status(404).json({ message: "Beitrag nicht gefunden" });
      }

      posts[index] = updatedPost;
      await fs.writeFile(dataPath, JSON.stringify(posts, null, 2), "utf-8");
      return res.status(200).json({ message: "Beitrag aktualisiert", post: updatedPost });
    }

    if (req.method === "DELETE") {
      const { id } = req.body;
      const filtered = posts.filter((p: any) => p.id !== id);
      await fs.writeFile(dataPath, JSON.stringify(filtered, null, 2), "utf-8");
      return res.status(200).json({ message: "Beitrag gelöscht" });
    }

    res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
    res.status(405).end(`Method ${req.method} not allowed`);
  } catch (error) {
    console.error("API-Fehler /api/blog:", error);
    res.status(500).json({ message: "Interner Serverfehler" });
  }
}
