/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  optimizeFonts: false,
  images: {
    disableStaticImages: true,
  },
};

module.exports = nextConfig;
