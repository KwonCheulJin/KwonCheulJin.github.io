/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  optimizeFonts: false,
  images: {
    loader: 'imgix',
    path: '',
    disableStaticImages: true,
  },
};

module.exports = nextConfig;
