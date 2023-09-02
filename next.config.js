/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/events",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
