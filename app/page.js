'use client';
import { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import {
  MagnifyingGlassIcon, XMarkIcon, ArrowTopRightOnSquareIcon, ChevronDownIcon,
  DevicePhoneMobileIcon, BoltIcon, SparklesIcon, PaintBrushIcon, ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';
import TemplateCard from '@/components/TemplateCard';
import CountUp from '@/components/CountUp';
import Reveal from '@/components/Reveal';
import templates, { categories, site, stats, features, process, faqs, testimonials } from './data/templates';

const ICONS = {
  DevicePhoneMobileIcon, BoltIcon, SparklesIcon, MagnifyingGlassIcon, PaintBrushIcon, ChatBubbleLeftRightIcon,
};

export default function HomePage() {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('All');
  const [sort, setSort] = useState('featured');
  const [active, setActive] = useState(null);

  const list = useMemo(() => {
    let r = templates.filter((t) => {
      const okCat = cat === 'All' || t.category === cat;
      const q = query.trim().toLowerCase();
      const okQ = !q || [t.title, t.tagline, t.category, ...t.tags].join(' ').toLowerCase().includes(q);
      return okCat && okQ;
    });
    if (sort === 'az') r = [...r].sort((a, b) => a.title.localeCompare(b.title));
    return r;
  }, [query, cat, sort]);

  return (
    <main id="top">
      {/* Hero — bento */}
      <section className="mesh relative overflow-hidden px-4 pt-14 pb-12 sm:px-6 lg:px-8">
        <div className="absolute left-1/2 top-[-120px] -z-10 h-[360px] w-[640px] -translate-x-1/2 rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-600/20" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> {site.tagline}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.04] tracking-tight text-gray-900 md:text-6xl dark:text-white">
              Website Portofolio <span className="text-indigo-600 dark:text-indigo-400">Profesional</span>, Siap Pakai.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-gray-600 lg:mx-0 dark:text-gray-300">{site.description}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a href="#templates" className="rounded-full bg-indigo-600 px-7 py-3 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 active:scale-95">Lihat Template</a>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-full border border-gray-300 bg-white px-7 py-3 font-semibold text-gray-700 transition hover:border-indigo-300 hover:text-indigo-600 active:scale-95 dark:border-white/15 dark:bg-white/5 dark:text-gray-200 dark:hover:text-white">Konsultasi Gratis</a>
            </div>
            <div className="mt-7 flex items-center justify-center gap-3 lg:justify-start">
              <span className="text-lg leading-none text-amber-400">★★★★★</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">7 template siap pakai · multi-halaman · responsif</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="animate-float row-span-2 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-white/10 dark:bg-white/5">
              <div className="relative h-full min-h-[260px] w-full"><Image src="/templates/p5.png" alt="Template Rex" fill sizes="(max-width:1024px) 50vw, 280px" className="object-cover object-top" /></div>
            </div>
            <div className="animate-float overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl [animation-delay:0.6s] dark:border-white/10 dark:bg-white/5">
              <div className="relative aspect-[16/11] w-full"><Image src="/templates/p4.png" alt="Template Aria" fill sizes="(max-width:1024px) 50vw, 240px" className="object-cover object-top" /></div>
            </div>
            <div className="animate-float overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl [animation-delay:1.2s] dark:border-white/10 dark:bg-white/5">
              <div className="relative aspect-[16/11] w-full"><Image src="/templates/p7.png" alt="Template Milo" fill sizes="(max-width:1024px) 50vw, 240px" className="object-cover object-top" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech marquee */}
      <section className="overflow-hidden border-y border-gray-100 bg-white py-4 dark:border-white/10 dark:bg-[#0c0c16]">
        <div className="flex w-max animate-marquee items-center">
          {[0, 1].map((r) => (
            <div key={r} className="flex shrink-0 items-center" aria-hidden={r === 1}>
              {['Next.js', 'Tailwind CSS', 'Framer Motion', 'Fully Responsive', 'SEO-ready', 'Vercel-ready', 'Multi-page'].map((t) => (
                <span key={t} className="flex items-center">
                  <span className="px-6 text-sm font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">{t}</span>
                  <span className="text-indigo-300 dark:text-indigo-500/60">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 pb-6 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-4 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:grid-cols-4 md:p-8 dark:border-white/10 dark:bg-white/5">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <CountUp value={s.value} className="block text-3xl font-extrabold text-indigo-600 md:text-4xl dark:text-indigo-400" />
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Catalog */}
      <section id="templates" className="scroll-mt-20 px-4 pt-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">Koleksi Template</h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-600 dark:text-gray-400">Pilih, preview langsung, lalu pesan. Semua template multi-halaman & siap dikustomisasi.</p>
          </Reveal>

          <div className="relative mx-auto mt-8 max-w-md">
            <MagnifyingGlassIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari template atau gaya…"
              className="w-full rounded-full border border-gray-200 bg-white py-3 pl-12 pr-4 text-sm shadow-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-gray-500 dark:focus:ring-indigo-500/20"
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-5 dark:border-white/10">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${cat === c ? 'bg-indigo-600 text-white' : 'border border-gray-300 text-gray-600 hover:border-indigo-400 hover:text-indigo-600 dark:border-white/15 dark:text-gray-300 dark:hover:text-white'}`}
                >
                  {c}
                </button>
              ))}
            </div>
            <label className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              Urutkan:
              <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 outline-none focus:border-indigo-400 dark:border-white/15 dark:bg-[#12121c] dark:text-gray-200">
                <option value="featured">Pilihan</option>
                <option value="az">Nama A–Z</option>
              </select>
            </label>
          </div>

          <div className="py-10">
            <motion.div layout className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 [&>*:first-child]:lg:col-span-2">
              <AnimatePresence mode="popLayout">
                {list.map((t) => <TemplateCard key={t.id} template={t} onDetail={setActive} />)}
              </AnimatePresence>
            </motion.div>
            {list.length === 0 && <p className="py-16 text-center text-gray-500 dark:text-gray-400">Tidak ada template yang cocok. Coba kata kunci lain.</p>}
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section id="keunggulan" className="scroll-mt-20 bg-white px-4 py-16 sm:px-6 lg:px-8 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">Kenapa pilih {site.name}?</h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-600 dark:text-gray-400">Semua yang kamu butuhkan untuk tampil profesional, tanpa ribet.</p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => {
              const Icon = ICONS[f.icon];
              return (
                <Reveal key={f.title} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-indigo-500/40">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300">{Icon && <Icon className="h-6 w-6" />}</span>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{f.title}</h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{f.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cara Pesan */}
      <section id="cara-pesan" className="scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">Cara Pesan</h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-600 dark:text-gray-400">Hanya 4 langkah mudah dari pilih template sampai website online.</p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.08}>
                <div className="relative h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
                  <span className="text-4xl font-extrabold text-indigo-100 dark:text-indigo-500/30">{p.step}</span>
                  <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">{p.title}</h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">Kata Mereka</h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-600 dark:text-gray-400">Sebagian klien yang sudah tampil lebih profesional bersama {site.name}.</p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="h-full rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-white/10 dark:bg-white/5">
                  <p className="text-yellow-400">★★★★★</p>
                  <blockquote className="mt-3 text-gray-700 dark:text-gray-300">“{t.quote}”</blockquote>
                  <figcaption className="mt-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">{t.name[0]}</span>
                    <span>
                      <span className="block font-semibold text-gray-900 dark:text-white">{t.name}</span>
                      <span className="block text-sm text-gray-500 dark:text-gray-400">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">Pertanyaan Umum</h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-600 dark:text-gray-400">Hal-hal yang sering ditanyakan sebelum memesan.</p>
          </Reveal>
          <div className="mt-10 space-y-3">
            {faqs.map((f) => (
              <Disclosure key={f.q}>
                {({ open }) => (
                  <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-white/10 dark:bg-white/5">
                    <Disclosure.Button className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-gray-900 dark:text-white">
                      {f.q}
                      <ChevronDownIcon className={`h-5 w-5 shrink-0 text-indigo-600 transition-transform dark:text-indigo-400 ${open ? 'rotate-180' : ''}`} />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-6 pb-5 text-gray-600 dark:text-gray-400">{f.a}</Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-700 p-10 text-center text-white shadow-xl"
        >
          <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">Siap Naik Level dengan Website Profesional?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Pilih template favoritmu, dan biar kami yang wujudkan website portofolio modern, cepat, dan siap tampilkan yang terbaik dari dirimu.
          </p>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-indigo-700 shadow-md transition hover:bg-indigo-100">
            Hubungi Sekarang
          </a>
        </motion.div>
      </section>

      {/* Detail modal */}
      <AnimatePresence>
        {active && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/70 p-4 backdrop-blur" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)}>
            <motion.div initial={{ scale: 0.95, y: 12 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-[#12121c] dark:ring-1 dark:ring-white/10">
              <div className="relative aspect-[16/10] w-full">
                <Image src={active.image} alt={active.title} fill sizes="640px" className="object-cover object-top" />
                <button onClick={() => setActive(null)} aria-label="Tutup" className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-gray-700 hover:text-gray-900"><XMarkIcon className="h-5 w-5" /></button>
              </div>
              <div className="p-7">
                <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">{active.category}</span>
                <h3 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">{active.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{active.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {active.pages.map((pg) => <span key={pg} className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300">{pg}</span>)}
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">Tech stack</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {active.stack.map((s) => <span key={s} className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-white/10 dark:text-gray-300">{s}</span>)}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {active.comingSoon ? (
                    <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-gray-100 px-6 py-2.5 text-sm font-semibold text-gray-400 dark:bg-white/10 dark:text-gray-500">Live preview · Segera</span>
                  ) : (
                    <a href={active.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700">
                      Live Preview <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    </a>
                  )}
                  <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-full border border-gray-300 px-6 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-indigo-300 hover:text-indigo-600 dark:border-white/15 dark:text-gray-300 dark:hover:text-white">
                    Pesan template ini
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
