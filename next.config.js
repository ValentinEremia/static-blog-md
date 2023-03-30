/** @type {import('next').NextConfig} */

// module.exports = nextConfig

const runtimeCaching = require("next-pwa/cache");

const withPWA = require("next-pwa")({
  dest: "public",
});

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   experimental: {
//     appDir: true,
//   },
//   compiler: {
//     removeConsole: process.env.NODE_ENV !== "development",
//   },
//   // images: {
//   //   domains: ['res.cloudinary.com', 'www.androidu.ro'],
//   // },
// };

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },

  pwa: {
    dest: "public",
    runtimeCaching,
    skipWaiting: true,
    sw: "/sw.js",
    disable: process.env.NODE_ENV === "development",
    register: true,
  },

 
});
