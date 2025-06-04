/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/indian-atlas",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
