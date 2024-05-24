/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/carcitycode",
        destination: "https://carcitycode.vercel.app",
        permanent: false,
      },
      {
        source: "pinatacloud",
        destination: "https://pinata.cloud/blog",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
