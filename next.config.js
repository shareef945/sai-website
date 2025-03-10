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
};

const withMarkdoc = require('@markdoc/next.js');

module.exports = withMarkdoc(/* options */)({
  pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx']
});

module.exports = nextConfig;
