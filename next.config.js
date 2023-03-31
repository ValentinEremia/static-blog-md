/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },

  // images: {
  //   domains: ['res.cloudinary.com', 'www.androidu.ro'],
  // },

  // --- pt pwa ---
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
 
};


// --- pt pwa 2---
const runtimeCaching = require("next-pwa/cache");

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  runtimeCaching,
  skipWaiting: true,
  // sw: "/sw.js",
});

module.exports = withPWA(nextConfig);
