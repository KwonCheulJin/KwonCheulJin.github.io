const isProduction = process.env.NODE_ENV === 'production';
const productionURL = 'https://kwoncheuljin.github.io';

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: isProduction ? productionURL : '',
  },
};

module.exports = nextConfig;
