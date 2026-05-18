import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/pratik-blog',
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/pratik-blog',
  },
}

export default nextConfig
