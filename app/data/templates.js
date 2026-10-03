export const site = {
  name: 'PortalPorto',
  tagline: 'Portal Template Portofolio',
  description:
    'Tujuh template website portofolio, masing-masing dengan gaya sendiri. Buka demo live-nya, lihat studi kasus di dalamnya, lalu pesan untuk diisi dengan karyamu.',
  whatsapp: 'https://wa.me/6281339908765',
};

// Halaman yang sama di setiap template: 5 halaman utama + 6 studi kasus + 3 artikel.
const HALAMAN = ['Beranda', 'Tentang', 'Karya', '6 studi kasus', 'Blog', '3 artikel', 'Kontak'];

const templates = [
  {
    id: 'noelle',
    terjual: 0,
    title: 'Noelle',
    tagline: 'Minimal editorial — desainer UI/UX',
    image: '/website-portofolio/templates/p1.webp',
    url: 'https://portfolio-noelle-one.vercel.app',
    category: 'Personal',
    tags: ['Minimal', 'Terang', 'UI/UX'],
    desc: 'Putih lapang, judul tipis, dan grid bento untuk desainer produk. Studi kasusnya aplikasi tugas dan sistem booking, masing-masing menaut ke demo live.',
    stack: ['Next.js', 'Tailwind', 'Framer Motion', 'next-themes'],
    pages: HALAMAN,
  },
  {
    id: 'carlos',
    terjual: 7,
    title: 'Carlos',
    tagline: 'Gelap tegas — desainer & developer',
    image: '/website-portofolio/templates/p2.webp',
    url: 'https://portfolio-carlos-eosin.vercel.app',
    category: 'Developer',
    tags: ['Gelap', 'Tegas', 'Developer'],
    desc: 'Abu gelap beraksen kuning untuk product designer yang juga menulis kode. Studi kasus marketplace properti dan sistem booking, plus halaman Privasi & Ketentuan.',
    stack: ['Next.js', 'Tailwind', 'AOS', 'next-themes'],
    pages: [...HALAMAN, 'Privasi', 'Ketentuan'],
  },
  {
    id: 'sorelle',
    terjual: 3,
    title: 'Sorelle',
    tagline: 'Ceria & hangat — desainer UI/UX',
    image: '/website-portofolio/templates/p3.webp',
    url: 'https://portfolio-sorelle.vercel.app',
    category: 'Creative',
    tags: ['Ceria', 'Pastel', 'Biru'],
    desc: 'Blob pastel, judul Syne, dan aksen biru untuk desainer situs keluarga, edukasi, dan pengrajin. Filter portofolionya benar-benar menyaring.',
    stack: ['Next.js', 'Tailwind', 'Framer Motion', 'next-themes'],
    pages: HALAMAN,
  },
  {
    id: 'aria',
    terjual: 2,
    title: 'Aria',
    tagline: 'Glassmorphism — creative developer',
    image: '/website-portofolio/templates/p4.webp',
    url: 'https://portfolio-aria-pearl.vercel.app',
    category: 'Developer',
    tags: ['Gelap', 'Kaca', 'Animasi'],
    desc: 'Kartu kaca buram di atas aurora yang bergerak pelan, untuk creative developer. Studi kasusnya properti mewah, webinar, dan toko audio; artikelnya soal tombol jeda dan kontras tema gelap.',
    stack: ['Next.js', 'Tailwind', 'Framer Motion', 'next-themes'],
    pages: HALAMAN,
  },
  {
    id: 'rex',
    terjual: 0,
    title: 'Rex',
    tagline: 'Neo-brutalis — tegas & lantang',
    image: '/website-portofolio/templates/p5.webp',
    url: 'https://portfolio-rex-zeta.vercel.app',
    category: 'Creative',
    tags: ['Brutalis', 'Tegas', 'Lime'],
    desc: 'Garis tebal, bayangan keras, dan blok lime untuk desainer grafis yang juga menulis kode. Studi kasusnya radio, toko kecil, dan halaman band.',
    stack: ['Next.js', 'Tailwind', 'Framer Motion', 'next-themes'],
    pages: HALAMAN,
  },
  {
    id: 'celeste',
    terjual: 4,
    title: 'Celeste',
    tagline: 'Editorial serif — hangat & elegan',
    image: '/website-portofolio/templates/p6.webp',
    url: 'https://portfolio-celeste-one.vercel.app',
    category: 'Personal',
    tags: ['Editorial', 'Serif', 'Hangat'],
    desc: 'Kertas krem, huruf serif, dan aksen terakota untuk brand designer & art director. Studi kasusnya kedai kopi, restoran, dan undangan.',
    stack: ['Next.js', 'Tailwind', 'Framer Motion', 'next-themes'],
    pages: ['Beranda', 'Tentang', 'Karya', '6 studi kasus', 'Journal', '3 esai', 'Kontak'],
  },
  {
    id: 'milo',
    terjual: 1,
    title: 'Milo',
    tagline: 'Bento ceria — cerah & ramah',
    image: '/website-portofolio/templates/p7.webp',
    url: 'https://portfolio-milo.vercel.app',
    category: 'Creative',
    tags: ['Ceria', 'Bento', 'Pastel'],
    desc: 'Ubin pastel membulat dan font Fredoka untuk desainer & ilustrator. Studi kasusnya halaman link-in-bio dan undangan bergaya buku cerita.',
    stack: ['Next.js', 'Tailwind', 'Framer Motion', 'next-themes'],
    pages: HALAMAN,
  },
];

export const categories = ['All', 'Personal', 'Developer', 'Creative'];

// Angka dari isi koleksi; durasi & harga dari paket Portofolio di pintuweb.com.
export const stats = [
  { value: '7', label: 'Template, gaya berbeda' },
  { value: '14', label: 'Halaman per template' },
  { value: '3–5', label: 'Hari kerja pengerjaan' },
  { value: '2', label: 'Tema: terang & gelap' },
];

export const features = [
  { icon: 'DevicePhoneMobileIcon', title: 'Responsif', desc: 'Dicek di lebar 360 px sampai desktop, tanpa gulir menyamping.' },
  { icon: 'SparklesIcon', title: 'Studi kasus siap isi', desc: 'Tiap proyek punya halaman sendiri: tantangan, yang dikerjakan, hasil, dan tautan live.' },
  { icon: 'MagnifyingGlassIcon', title: 'SEO dasar', desc: 'Judul per halaman, Open Graph, sitemap yang memuat semua studi kasus dan artikel.' },
  { icon: 'PaintBrushIcon', title: 'Terang & gelap', desc: 'Kedua tema dicek kontrasnya (WCAG AA), bukan sekadar dibalik warnanya.' },
  { icon: 'BoltIcon', title: 'Isi yang jujur', desc: 'Tanpa testimoni, logo klien, atau angka karangan. Yang tampil nanti karyamu sendiri.' },
  { icon: 'ChatBubbleLeftRightIcon', title: 'Dibantu sampai online', desc: 'Dari pengisian konten sampai domain aktif, lewat WhatsApp.' },
];

export const process = [
  { step: '01', title: 'Pilih Template', desc: 'Buka demo live tiap template dan pilih gaya yang paling cocok.' },
  { step: '02', title: 'Hubungi via WhatsApp', desc: 'Klik "Pesan" dan ceritakan karya serta kebutuhanmu.' },
  { step: '03', title: 'Isi & Sesuaikan', desc: 'Kirim proyek, foto, dan teks — kami ganti isi contohnya dengan milikmu.' },
  { step: '04', title: 'Website Online', desc: 'Situs di-deploy ke domainmu dan siap dibagikan.' },
];

export const faqs = [
  { q: 'Apa itu PortalPorto?', a: 'Katalog tujuh template website portofolio buatan PintuWeb. Setiap template bisa dibuka sebagai demo live sebelum dipesan.' },
  { q: 'Apakah klien dan proyek di template itu nyata?', a: 'Bukan. Persona di setiap template fiktif, dan proyeknya adalah demo live dari koleksi kami sendiri. Saat dipesan, semuanya diganti dengan karya, foto, dan kontak milikmu.' },
  { q: 'Berapa biaya dan lama pengerjaannya?', a: 'Paket Portofolio di PintuWeb mulai Rp1,5 juta sampai Rp2,5 juta, dikerjakan 3–5 hari kerja setelah materi lengkap. Rinciannya ada di pintuweb.com.' },
  { q: 'Apakah templatenya bisa dikustomisasi?', a: 'Bisa. Warna, teks, foto, jumlah proyek, dan halaman bisa disesuaikan dengan kebutuhanmu.' },
  { q: 'Bagaimana cara memesan?', a: 'Pilih template, klik "Pesan template ini" atau "Hubungi", lalu kita lanjutkan lewat WhatsApp.' },
];

export default templates;
