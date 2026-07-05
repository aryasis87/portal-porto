import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';
import { site } from './data/templates';
import ThemeProvider from '@/components/ThemeProvider';
import ThemeToggle from '@/components/ThemeToggle';

const inter = Inter({ subsets: ['latin'], display: 'swap' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display', weight: ['500', '600', '700'], display: 'swap' });

const __jsonld = {"@context":"https://schema.org","@type":"CollectionPage","name":"PortalPorto","description":"Koleksi 7 template portfolio personal","url":"https://porto.pintuweb.com","isPartOf":{"@type":"WebSite","name":"PintuWeb","url":"https://pintuweb.com"}};

export const metadata = {
  metadataBase: new URL("https://porto.pintuweb.com"),
  title: "PortalPorto — Galeri Portfolio Personal",
  description: "PortalPorto: koleksi 7 template portfolio personal dengan karakter berbeda — untuk desainer, developer, dan kreator.",
  applicationName: "PortalPorto",
  keywords: ["template portfolio", "portfolio personal", "koleksi portfolio", "website portfolio"],
  authors: [{ name: "PortalPorto" }],
  creator: "PortalPorto",
  publisher: "PortalPorto",
  alternates: { canonical: "https://porto.pintuweb.com" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://porto.pintuweb.com",
    siteName: "PortalPorto",
    title: "PortalPorto — Galeri Portfolio Personal",
    description: "PortalPorto: koleksi 7 template portfolio personal dengan karakter berbeda — untuk desainer, developer, dan kreator.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "PortalPorto — Galeri Portfolio Personal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PortalPorto — Galeri Portfolio Personal",
    description: "PortalPorto: koleksi 7 template portfolio personal dengan karakter berbeda — untuk desainer, developer, dan kreator.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

const navLinks = [
  { label: 'Template', href: '#templates' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Cara Pesan', href: '#cara-pesan' },
  { label: 'FAQ', href: '#faq' },
];

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.className} ${spaceGrotesk.variable} bg-gray-50 text-gray-900 antialiased transition-colors dark:bg-[#0a0a12] dark:text-gray-100`}>
        <ThemeProvider>
          {/* Top bar */}
          <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#0a0a12]/80">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
              <a href="#top" className="flex items-center gap-2 text-lg font-bold tracking-tight">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm text-white">P</span>
                {site.name}
              </a>
              <nav className="hidden items-center gap-7 md:flex">
                {navLinks.map((l) => (
                  <a key={l.href} href={l.href} className="text-sm font-medium text-gray-600 transition hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">{l.label}</a>
                ))}
              </nav>
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700">
                  Hubungi
                </a>
              </div>
            </div>
          </header>

          {children}

          <footer className="border-t border-gray-200 bg-white dark:border-white/10 dark:bg-[#0a0a12]">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <div className="flex items-center gap-2 text-lg font-bold">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm text-white">P</span>
                    {site.name}
                  </div>
                  <p className="mt-3 max-w-xs text-sm text-gray-500 dark:text-gray-400">{site.tagline} — template portofolio modern, cepat, dan siap pakai.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">Navigasi</p>
                  <ul className="mt-3 space-y-2">
                    {navLinks.map((l) => (
                      <li key={l.href}><a href={l.href} className="text-sm text-gray-600 transition hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">{l.label}</a></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">Kontak</p>
                  <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700">
                    Chat via WhatsApp
                  </a>
                </div>
              </div>
              <p className="mt-10 border-t border-gray-100 pt-6 text-center text-sm text-gray-400 dark:border-white/10 dark:text-gray-500">
                © {new Date().getFullYear()} {site.name} · Sanzystore Dev. All rights reserved.
              </p>
            </div>
          </footer>
        </ThemeProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
