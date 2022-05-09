/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ['image.shutterstock.com', 'media.istockphoto.com'],
  },
}

module.exports = nextConfig
