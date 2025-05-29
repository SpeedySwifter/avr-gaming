/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/news",
        destination: "/news/page/1",
        permanent: true,
      },
      {
        source: "/blog.tsx",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;