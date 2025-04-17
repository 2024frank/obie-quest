/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    unoptimized: process.env.NODE_ENV !== 'production',
  },
  // Enable static exports for better performance on Vercel
  output: 'standalone',
};

module.exports = nextConfig; 