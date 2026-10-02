import fs from "node:fs";
import path from "node:path";

const root = path.resolve("dist");
const site = "https://www.myiqscores.com";
const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const errors = [];
const titles = new Map();
const ownershipTag = '<meta name="google-adsense-account" content="ca-pub-5051305701488211"';
const rootHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");

if (!rootHtml.includes(ownershipTag)) errors.push("homepage: missing AdSense ownership meta tag");
if (urls.length > 40) errors.push(`sitemap: expected a curated core under 40 URLs, found ${urls.length}`);

const retiredFamilies = [/\/is-\d+-iq-good$/, /\/average-iq\//, /\/iq-needed-for\//, /\/iq-by-age\//, /\/famous-iq\/.+/, /\/iq-myths\/.+/, /\/average-iq-by-state\/.+/];
for (const url of urls) {
  if (retiredFamilies.some((pattern) => pattern.test(new URL(url).pathname))) {
    errors.push(`${url}: retired programmatic detail route remains in sitemap`);
  }
}

const fileForUrl = (url) => {
  const pathname = new URL(url).pathname;
  return pathname === "/" ? path.join(root, "index.html") : path.join(root, pathname.slice(1), "index.html");
};

for (const url of urls) {
  const file = fileForUrl(url);
  if (!fs.existsSync(file)) {
    errors.push(`${url}: missing prerendered HTML`);
    continue;
  }
  const html = fs.readFileSync(file, "utf8");
  const title = html.match(/<title[^>]*>(.*?)<\/title>/s)?.[1]?.trim();
  const canonical = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/s)?.[1];
  const h1Count = (html.match(/<h1\b/g) || []).length;
  const noindex = /name="robots"[^>]+content="[^"]*noindex/i.test(html);

  if (!title) errors.push(`${url}: missing title`);
  if (canonical !== url && !(url === site && canonical === `${site}/`)) errors.push(`${url}: canonical is ${canonical || "missing"}`);
  if (h1Count !== 1) errors.push(`${url}: expected one H1, found ${h1Count}`);
  if (noindex) errors.push(`${url}: sitemap URL is noindex`);
  if (title) {
    const existing = titles.get(title) || [];
    existing.push(url);
    titles.set(title, existing);
  }
}

const duplicateTitles = [...titles.entries()].filter(([, groupedUrls]) => groupedUrls.length > 1);
for (const [title, groupedUrls] of duplicateTitles) errors.push(`duplicate title "${title}": ${groupedUrls.join(", ")}`);

const summary = {
  sitemapUrls: urls.length,
  checkedHtmlFiles: urls.length,
  duplicateTitles: duplicateTitles.length,
  errors: errors.length,
};

console.log(JSON.stringify(summary, null, 2));
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
