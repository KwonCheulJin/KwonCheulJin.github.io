/* eslint-disable @typescript-eslint/ban-ts-comment */
/**
 * @type {import('next').NextConfig}
 */
// @ts-ignore
const isProduction = process.env.NODE_ENV === 'production';
const productionURL = 'https://kwoncheuljin.github.io';

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: isProduction ? productionURL : 'http://localhost:3000',
  },
};

module.exports = nextConfig;
