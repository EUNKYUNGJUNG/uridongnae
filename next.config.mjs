/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "imgix",
    unoptimized: true,
    path: "https://uridongnae.com", // Base path for your images on localhost
    domains: ["https://uridongnae.com"], // Allow loading images from localhost
  },
  output: "export",
  reactStrictMode: false,
};

export default nextConfig;
