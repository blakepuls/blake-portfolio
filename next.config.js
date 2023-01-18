/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true
      }
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig