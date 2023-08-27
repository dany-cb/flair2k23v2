/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
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
