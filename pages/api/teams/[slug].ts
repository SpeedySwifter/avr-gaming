import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "public", "data", "teams.json");

export default async function handler(req, res) {
  const slug = req.query.slug;
  const data = JSON.parse(await fs.readFile(filePath, "utf-8"));
  const index = data.findIndex((team) => team.slug === slug);

  if (index === -1) return res.status(404).json({ error: "Team nicht gefunden" });

  if (req.method === "GET") {
    return res.status(200).json(data[index]);
  }

  if (req.method === "PUT") {
    const updatedTeam = { ...data[index], ...req.body };
    data[index] = updatedTeam;
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    return res.status(200).json(updatedTeam);
  }

  if (req.method === "DELETE") {
    data.splice(index, 1);
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    return res.status(204).end();
  }

  return res.status(405).json({ error: "Methode nicht erlaubt" });
}
