/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // 342 local portfolio images are served straight from /public without the
    // Next.js image optimizer to keep the build fast and avoid sharp memory spikes.
    unoptimized: true,
  },
};

module.exports = nextConfig;
