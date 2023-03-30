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
}

module.exports = nextConfig
