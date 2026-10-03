/** @type {import('next').NextConfig} */
// Portal ini tayang di https://www.pintuweb.com/website-portofolio: PintuWeb meneruskan path /website-portofolio
// ke project ini (pola multi-zone), jadi semua rute & aset hidup di bawah basePath yang sama.
const nextConfig = {
  basePath: '/website-portofolio',
  async redirects() {
    // Alamat lama portal-porto-neon.vercel.app di luar basePath -> alamat utama.
    return [
      { source: '/', destination: 'https://www.pintuweb.com/website-portofolio', basePath: false, permanent: true },
      { source: '/:lama((?!website-portofolio(?:/|$)).+)', destination: 'https://www.pintuweb.com/website-portofolio', basePath: false, permanent: true },
    ];
  },
};

export default nextConfig;
