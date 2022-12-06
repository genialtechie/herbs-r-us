/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    fontLoaders: [
      {
        loader: '@next/font/google',
        options: { display: 'swap', subsets: ['latin'] },
      },
    ],
  },
};

module.exports = nextConfig;
