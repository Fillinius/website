import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  eslint: {
    ignoreDuringBuilds: true, // Игнорировать ESLint во время сборки
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

  // experimental: {
  //   esmExternals: 'loose',
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
