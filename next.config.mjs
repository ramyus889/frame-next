/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_GATEWAY_URL:
      "https://green-imaginative-trout-795.mypinata.cloud",
    NEXT_PUBLIC_BASE_URL: "https://api.pinata.cloud",
  },
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
