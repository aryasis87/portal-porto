'use client';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

export default function TemplateCard({ template, onDetail }) {
  const { title, tagline, image, url, category, tags, comingSoon } = template;
  const full = image.replace(/p(\d)\.png$/, 'f$1.png'); // gambar full-page panjang untuk scroll saat hover

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
    >
      {/* Browser frame */}
      <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-4 py-2.5 dark:border-white/10 dark:bg-white/5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <span className="ml-3 truncate rounded-md bg-white px-3 py-1 text-[11px] text-gray-400 ring-1 ring-gray-100 dark:bg-white/5 dark:text-gray-500 dark:ring-white/10">
          {comingSoon ? `${title.toLowerCase()} · preview` : url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
        </span>
      </div>

      {/* Preview — scroll on hover */}
      <button onClick={() => onDetail(template)} className="relative block h-60 w-full overflow-hidden bg-gray-100 dark:bg-white/5" aria-label={`Lihat detail ${title}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={full}
          alt={`Preview ${title}`}
          loading="lazy"
          className="absolute inset-x-0 top-0 w-full will-change-transform transition-transform duration-[4500ms] ease-linear group-hover:-translate-y-[calc(100%-15rem)]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-indigo-600 shadow-sm backdrop-blur dark:bg-black/50 dark:text-indigo-300">{category}</span>
        {comingSoon && (
          <span className="absolute right-3 top-3 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-amber-950">Segera</span>
        )}
        <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-gray-900/70 px-3 py-1 text-[11px] font-medium text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
          ↕ Hover untuk lihat halaman penuh
        </span>
      </button>

      {/* Body */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{tagline}</p>
          </div>
          {!comingSoon && (
            <a href={url} target="_blank" rel="noopener noreferrer" title="Live preview" className="shrink-0 rounded-lg p-2 text-gray-400 transition hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-white/10">
              <ArrowTopRightOnSquareIcon className="h-5 w-5" />
            </a>
          )}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-white/10 dark:text-gray-300">{t}</span>
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          {comingSoon ? (
            <span className="flex-1 cursor-not-allowed rounded-lg bg-gray-100 py-2 text-center text-sm font-semibold text-gray-400 dark:bg-white/10 dark:text-gray-500">Live · Segera</span>
          ) : (
            <a href={url} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-lg bg-indigo-600 py-2 text-center text-sm font-semibold text-white transition hover:bg-indigo-700">
              Live Preview
            </a>
          )}
          <button onClick={() => onDetail(template)} className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-indigo-300 hover:text-indigo-600 dark:border-white/15 dark:text-gray-300 dark:hover:text-white">
            Detail
          </button>
        </div>
      </div>
    </motion.div>
  );
}
