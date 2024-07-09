/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "leetcode.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
