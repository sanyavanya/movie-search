/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: '@import "./styles/variables.scss";',
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/search',
        permanent: true,
      },
      {
        source: '/movie',
        destination: '/search',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
