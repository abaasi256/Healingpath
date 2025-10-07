/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['localhost', 'healingpath.care'],
  },
}

module.exports = nextConfig