
import { IncomingForm } from "formidable";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end("Only POST allowed");
  }

  const form = new IncomingForm({ uploadDir: "./public/blog/images", keepExtensions: true });

  form.parse(req, (err, fields, files) => {
    if (err) return res.status(500).json({ error: "Upload failed" });

    const file = files.image[0];
    const relativePath = "/blog/images/" + path.basename(file.filepath);
    return res.status(200).json({ path: relativePath });
  });
}
