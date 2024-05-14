/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "uploadthing.com",
      },
      {
        hostname: "utfs.io",
      },
      {
        hostname: "media.rawg.io",
      }
    ],
  },
};

export default nextConfig;
