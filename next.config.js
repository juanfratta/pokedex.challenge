/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    backUrl: process.env.NEXT_PUBLIC_BACK_URL,
  },
  images: {
    domains: ['raw.githubusercontent.com'],
  },
};

module.exports = nextConfig;
