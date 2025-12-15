import fs from "fs";
import path from "path";

const SITE_URL = "https://avr-gaming.de";

function toAbsoluteUrl(p) {
  if (!p.startsWith("/")) return `${SITE_URL}/${p}`;
  return `${SITE_URL}${p}`;
}

function xmlEscape(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildUrlEntry({ loc, lastmod, changefreq, priority }) {
  const parts = [];
  parts.push("  <url>");
  parts.push(`    <loc>${xmlEscape(loc)}</loc>`);
  if (lastmod) parts.push(`    <lastmod>${xmlEscape(lastmod)}</lastmod>`);
  if (changefreq) parts.push(`    <changefreq>${xmlEscape(changefreq)}</changefreq>`);
  if (priority != null) parts.push(`    <priority>${priority}</priority>`);
  parts.push("  </url>");
  return parts.join("\n");
}

function safeReadJson(filePath) {
  try {
    if (!fs.existsSync(filePath)) return null;
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function ensureUnique(urls) {
  return Array.from(new Set(urls));
}

function main() {
  const publicDir = path.join(process.cwd(), "public");
  const outPath = path.join(publicDir, "sitemap.xml");

  const urls = [];

  // Core static routes
  urls.push("/");
  urls.push("/about");
  urls.push("/awards");
  urls.push("/sponsoren");
  urls.push("/teams");
  urls.push("/support");
  urls.push("/impressum");
  urls.push("/datenschutz");

  // Teams detail pages
  const teams = safeReadJson(path.join(publicDir, "data/teams.json"));
  if (Array.isArray(teams)) {
    for (const team of teams) {
      if (team?.slug) urls.push(`/teams/${team.slug}`);
    }
  }

  // Blog detail pages
  const blogIndex = safeReadJson(path.join(publicDir, "blog/index.json"));
  if (Array.isArray(blogIndex)) {
    for (const post of blogIndex) {
      if (post?.slug) urls.push(`/blog/${post.slug}`);
    }
  }

  // Blog + News pagination
  const newsPosts = safeReadJson(path.join(publicDir, "data/blog.json"));
  if (Array.isArray(newsPosts)) {
    const POSTS_PER_PAGE = 9;
    const totalPages = Math.max(1, Math.ceil(newsPosts.length / POSTS_PER_PAGE));

    // Listing roots
    urls.push("/news");
    urls.push("/blog");

    for (let page = 1; page <= totalPages; page += 1) {
      urls.push(`/news/page/${page}`);
      urls.push(`/blog/page/${page}`);
    }
  }

  const finalUrls = ensureUnique(urls)
    .map((p) => ({ loc: toAbsoluteUrl(p) }));

  const xml = [
    "<?xml version=\"1.0\" encoding=\"UTF-8\"?>",
    "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">",
    ...finalUrls.map((u) => buildUrlEntry(u)),
    "</urlset>",
    "",
  ].join("\n");

  fs.writeFileSync(outPath, xml, "utf-8");
  // eslint-disable-next-line no-console
  console.log(`✅ sitemap.xml written: ${outPath} (${finalUrls.length} URLs)`);
}

main();
