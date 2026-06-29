/** @type {import('next').NextConfig} */
const repoBasePath = "/niharika-dangayach";

const nextConfig = {
  output: "export",
  basePath: process.env.GITHUB_PAGES ? repoBasePath : "",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
