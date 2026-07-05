# Portal Portfolio — Design System (Template Showcase Gallery)

> Concept: **premium product showcase / template gallery** — halaman katalog yang memamerkan koleksi template portofolio (Noelle, Carlos, Sorelle, dst) ala Dribbble/ThemeForest: bersih, modern, fokus pada preview. Platform: responsive web. Bahasa: Indonesia.

## Brand voice
Profesional, persuasif, ringkas. "Koleksi template portofolio modern, siap pakai." Mengarah ke konversi (hubungi/pesan).

## Color tokens
| Token | Hex | Pakai |
|---|---|---|
| `bg` | `#f7f8fb` | latar slate-50 |
| `surface` | `#ffffff` | kartu |
| `ink` | `#0f172a` | teks utama |
| `muted` | `#64748b` | teks sekunder |
| `primary` | `#4f46e5` | aksi (indigo) |
| `accent` | `#06b6d4` | highlight |
| `border` | `#e2e8f0` | garis |
Dark mode (toggle): bg `#0b1020`, surface `#141a2e`, ink `#e8ecf6`.

## Typography
- Display/heading: **Space Grotesk** / **Geist** (600–700).
- Body/UI: **Inter** (400–600).

## Shape & elevation
Radius 14–20px; bayangan berlapis lembut; kartu preview dengan **device/browser frame** (mockup) supaya terasa "produk".

## Sections & functional complexity (tingkatkan dari grid sederhana)
1. **Hero**: judul + subjudul + jumlah template + **search** + **dark mode toggle**.
2. **Toolbar**: **filter kategori/tag** (Semua, Personal, Kreatif, Developer, …), **sort** (Terbaru/Populer), tampilan grid.
3. **Template grid**: kartu preview (screenshot dalam **browser frame**), judul, **tag chips**, tombol **Live Preview** + **Detail**; hover → overlay aksi; **lazy image**.
4. **Detail modal/drawer**: preview besar, deskripsi, fitur, stack, tombol Live & Hubungi.
5. **Stats/feature strip** (mis. responsif, cepat, SEO-ready).
6. **CTA**: "Siap naik level?" + WhatsApp (sudah ada — pertahankan, percantik).
7. **Footer**.
Tambahan UX: filter+search realtime, empty-state, skeleton loading, animated grid (stagger/layout), keyboard-accessible, reduced-motion.

## Motion
Smooth & premium: card hover lift + overlay, layout animation saat filter, modal/drawer slide, count-up. 200–350ms.

## Layout
Container ~1200px; grid 1→2→3 kolom; toolbar sticky. Mobile: filter jadi chip scroll + search penuh.

## Data
Tetap dari `app/data/templates.js` (id, title, image, url) — tambahkan field opsional: `tags`, `desc`, `stack` untuk filter & detail.
