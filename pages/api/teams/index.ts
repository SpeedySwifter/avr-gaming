import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "public", "data", "teams.json");

export default async function handler(req, res) {
  const data = JSON.parse(await fs.readFile(filePath, "utf-8"));

  if (req.method === "GET") {
    return res.status(200).json(data);
  }

  if (req.method === "POST") {
    data.push(req.body);
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    return res.status(201).json(req.body);
  }

  return res.status(405).end();
}
