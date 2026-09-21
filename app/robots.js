export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://portal-porto-neon.vercel.app/sitemap.xml",
    host: "https://portal-porto-neon.vercel.app",
  };
}
