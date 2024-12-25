/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shorturl.at",
      },
    ],
  },
};

module.exports = nextConfig;
