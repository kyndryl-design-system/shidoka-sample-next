/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'picsum.photos',
            port: '',
            pathname: '/id/237/**',
            search: '',
          },
        ],
      },
}

module.exports = nextConfig
