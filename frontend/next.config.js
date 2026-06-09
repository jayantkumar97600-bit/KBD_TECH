/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  };
module.exports = {
  eslint: { ignoreDuringBuilds: true },
  ...nextConfig,
  env: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  },
};
