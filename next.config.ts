import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  // productionBrowserSourceMaps: true, // Включить генерацию source maps только для production, но код можно будет увитель на стороне браузера
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },

  images: {
    formats: ['image/avif', 'image/webp'],
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
