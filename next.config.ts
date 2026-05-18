import type { NextConfig } from 'next'

const isGithubPages = process.env.DEPLOY_TARGET === 'github'

const nextConfig: NextConfig = {
  ...(isGithubPages && {
    output: 'export',
    basePath: '/pratik-blog',
    images: { unoptimized: true },
  }),
}

export default nextConfig
