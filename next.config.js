/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  optimizeFonts: false,
  images: {
    loader: 'imgix',
    path: '/_next/image',
    disableStaticImages: true,
  },
};

module.exports = nextConfig;
