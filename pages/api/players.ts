import path from "path";
import { promises as fs } from "fs";

const filePath = path.join(process.cwd(), "public", "data", "players.json");

export default async function handler(req, res) {
  const method = req.method;
  let data = [];

  try {
    const file = await fs.readFile(filePath, "utf-8");
    data = JSON.parse(file);
  } catch {
    data = [];
  }

  if (method === "GET") {
    return res.status(200).json(data);
  }

  if (method === "POST") {
    const newPlayer = req.body;
    data.push(newPlayer);
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    return res.status(201).json({ player: newPlayer });
  }

  if (method === "PUT") {
    const updated = req.body;
    const index = data.findIndex((p) => p.id === updated.id);
    if (index === -1) return res.status(404).json({ error: "Spieler nicht gefunden" });
    data[index] = updated;
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    return res.status(200).json({ player: updated });
  }

  if (method === "DELETE") {
    const { id } = req.body;
    data = data.filter((p) => p.id !== id);
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    return res.status(204).end();
  }

  return res.status(405).json({ error: "Methode nicht erlaubt" });
}
