/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  optimizeFonts: false,
  images: {
    loader: 'default',
    path: '/_next/image',
    disableStaticImages: true,
  },
};

module.exports = nextConfig;
