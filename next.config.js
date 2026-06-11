/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/ictim26/:path*',
        destination: 'https://ictim26.vercel.app/:path*',
      },
      {
        source: '/ictim26',
        destination: 'https://ictim26.vercel.app',
      },
    ]
  },
}

module.exports = nextConfig
