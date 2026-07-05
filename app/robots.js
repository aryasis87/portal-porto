export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://portal-porto.vercel.app/sitemap.xml",
    host: "https://portal-porto.vercel.app",
  };
}
