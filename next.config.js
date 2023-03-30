/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  // images: {
  //   domains: ['res.cloudinary.com', 'www.androidu.ro'],
  // },
};

// module.exports = nextConfig

const runtimeCaching = require("next-pwa/cache");

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  sw: '/sw.js',
  skipWaiting: true,
  runtimeCaching,
});

module.exports = withPWA(nextConfig);
