/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["www.google.com"],
  },
};

module.exports = nextConfig;
