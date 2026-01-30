import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // Игнорировать ESLint во время сборки
  },
  /* config options here */
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    // prependData: `@use 'variables' as *;`,
  },

  // images: {
  //   domains: ['xn--e1aedkmddr7af0f.xn--p1ai'],
  //   remotePatterns: [
  //     {
  //       protocol: 'http',
  //       hostname: '83.147.245.180',
  //       port: '',
  //       pathname: '**',
  //     },
  //   ],
  // },

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
