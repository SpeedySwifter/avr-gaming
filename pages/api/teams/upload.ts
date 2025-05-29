import fs from "fs";
import path from "path";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  const form = new formidable.IncomingForm({
    uploadDir: path.join(process.cwd(), "public", "img", "teams"),
    keepExtensions: true,
  });

  form.parse(req, (err, fields, files) => {
    if (err) return res.status(500).json({ error: "Upload fehlgeschlagen" });
    const file = files.image;
    const fileName = path.basename(file[0].filepath);
    res.status(200).json({ imageUrl: `/img/teams/${fileName}` });
  });
}
