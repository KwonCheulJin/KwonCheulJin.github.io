/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  optimizeFonts: false,
  images: {
    loader: 'akamai',
    disableStaticImages: true,
  },
};

module.exports = nextConfig;
