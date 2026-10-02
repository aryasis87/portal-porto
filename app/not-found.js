import Link from 'next/link';

export const metadata = { title: 'Halaman tidak ditemukan', robots: { index: false } };

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <p className="rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300">Error 404</p>
      <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl dark:text-white">Template ini tidak ada di koleksi</h1>
      <p className="mt-4 max-w-md text-gray-600 dark:text-gray-400">Halaman yang kamu cari tidak ditemukan. Tujuh template portofolio menunggu di halaman utama.</p>
      <Link href="/" className="mt-8 rounded-full bg-indigo-600 px-7 py-3 font-semibold text-white transition hover:bg-indigo-700">Lihat koleksi</Link>
    </main>
  );
}
