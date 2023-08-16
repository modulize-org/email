const { createContentlayerPlugin } = require("next-contentlayer")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["@modulize/ui"],
  images: {
    domains: ["images.unsplash.com"],
  },
}
const withContentlayer = createContentlayerPlugin({})

module.exports = withContentlayer(nextConfig)
