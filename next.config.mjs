/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "static.tildacdn.one" },
      { protocol: "https", hostname: "thb.tildacdn.one" },
      { protocol: "https", hostname: "optim.tildacdn.one" },
    ],
  },
};

export default nextConfig;
