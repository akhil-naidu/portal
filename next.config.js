/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.lorem.space'],
  },
  // experimental: {
  //   optimizeCss: true,
  // },
};

module.exports = nextConfig;
