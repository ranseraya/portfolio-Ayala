/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/cybersecurity-web-portfolio-Ayala_V1' : '',
  output: "export",
  images: {
    unoptimized: true,
  },
    // experimental: {
    //   turbo: false, // Disable turbopack
    // },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true,
      },
    ];
  },
  };

export default nextConfig;
