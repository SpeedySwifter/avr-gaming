import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const dir = path.join(process.cwd(), "public", "img", "teams");
  const files = fs.readdirSync(dir).map((file) => `/img/teams/${file}`);
  res.status(200).json(files);
}
