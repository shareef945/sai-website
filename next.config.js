/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
      {
        protocol: "https",
        hostname: "files.saitechnology.co",
      },
      {
        protocol: "https",
        hostname: "cms.saitechnology.co",
      },
    ],
  },
  // Configure pageExtensions to include md, mdx and mdoc
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx', 'mdoc'],
};

// Set up MDX
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

// Merge configurations properly
module.exports = withMDX(nextConfig);