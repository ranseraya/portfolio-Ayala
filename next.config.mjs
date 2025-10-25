/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-Ayala' : '',
  output: "export",
  images: {
    unoptimized: true,
  },
    // experimental: {
    //   turbo: false, // Disable turbopack
    // },
  };

export default nextConfig;
