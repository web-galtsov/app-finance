const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  }
})
/*
/!** @type {import('next').NextConfig} *!/
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "/app_sosofinance",
  },
  basePath: "/app_sosofinance",
  assetPrefix: "/app_sosofinance",
};

module.exports = nextConfig;
*/
