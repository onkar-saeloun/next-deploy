/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ['image.shutterstock.com', 'media.istockphoto.com'],
  },
  env: {
    ROOT: __dirname,
  },
}

module.exports = nextConfig
