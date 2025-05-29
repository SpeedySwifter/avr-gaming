import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import https from "https";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_URL = "https://avr-gaming.de/wp-json/wp/v2/posts?_embed&per_page=100";
const OUTPUT_DIR = path.join(__dirname, "../public/blog");
const IMG_DIR = path.join(OUTPUT_DIR, "images");

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) return reject(new Error(`Status: ${res.statusCode}`));
      const fileStream = fs.createWriteStream(filepath);
      res.pipe(fileStream);
      fileStream.on("finish", () => {
        fileStream.close(resolve);
      });
    }).on("error", reject);
  });
}

async function fetchPosts() {
  try {
    const res = await fetch(API_URL);
    const posts = await res.json();

    if (!Array.isArray(posts)) {
      console.error("❌ API-Rückgabe ist kein Array:", posts);
      return;
    }

    if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    if (!fs.existsSync(IMG_DIR)) fs.mkdirSync(IMG_DIR, { recursive: true });

    const finalPosts = [];

    for (const post of posts) {
      let imageUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
      let localImage = null;

      if (imageUrl) {
        const imageExt = path.extname(imageUrl).split("?")[0] || ".jpg";
        const imageFile = `post-${post.id}${imageExt}`;
        const imagePath = path.join(IMG_DIR, imageFile);

        try {
          await downloadImage(imageUrl, imagePath);
          console.log(`🖼️  Bild gespeichert: ${imageFile}`);
          localImage = `/blog/images/${imageFile}`;
        } catch (err) {
          console.warn(`⚠️  Bildfehler: ${imageUrl}`, err.message);
        }
      }

      const slug = post.slug || post.title?.rendered
        ?.toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      const postData = {
        ...post,
        localImage,
        slug,
      };

      const postPath = path.join(OUTPUT_DIR, `post-${post.id}.json`);
      fs.writeFileSync(postPath, JSON.stringify(postData, null, 2), "utf-8");
      console.log(`✔️  Beitrag gespeichert: post-${post.id}.json`);

      finalPosts.push({
        id: post.id,
        title: post.title,
        excerpt: post.excerpt,
        date: post.date,
        link: post.link,
        localImage,
        slug,
      });
    }

    // 📁 index.json schreiben
    fs.writeFileSync(
      path.join(OUTPUT_DIR, "index.json"),
      JSON.stringify(finalPosts, null, 2),
      "utf-8"
    );
    console.log("🗂️  Indexdatei erstellt: index.json");

    console.log("✅ Alle Beiträge + Bilder erfolgreich gespeichert.");
  } catch (err) {
    console.error("❌ Fehler beim Abrufen oder Speichern:", err.message);
  }
}

fetchPosts();
