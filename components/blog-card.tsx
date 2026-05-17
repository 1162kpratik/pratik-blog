import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import type { Post } from '@/lib/types'

interface Props {
  post: Post
  size?: 'md' | 'sm'
}

export function BlogCard({ post, size = 'md' }: Props) {
  if (size === 'sm') {
    return (
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="border-t border-border-subtle pt-6 pb-2">
          <p className="font-mono text-label-sm uppercase tracking-[0.08em] text-zinc-muted mb-3">
            {formatDate(post.date)}
          </p>
          <h3 className="font-display font-bold text-[18px] text-white mb-3 leading-[1.3] group-hover:text-accent transition-colors duration-200">
            {post.title}
          </h3>
          <span className="font-mono text-label-sm uppercase tracking-[0.08em] text-zinc-muted group-hover:text-white transition-colors duration-150">
            {post.readTime} →
          </span>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="h-full flex flex-col bg-level-1 border border-border-subtle rounded overflow-hidden hover:border-border-mid transition-colors duration-300">
        {/* Cover */}
        <div className="relative h-52 flex-shrink-0 overflow-hidden">
          {post.coverImage ? (
            <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
          ) : (
            <div className="absolute inset-0" style={{ background: post.coverGradient }} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-level-1 via-level-1/10 to-transparent" />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-7">
          <p className="font-mono text-label-sm uppercase tracking-[0.08em] text-zinc-muted mb-3">
            {post.category} &nbsp;·&nbsp; {formatDate(post.date)}
          </p>
          <h3 className="font-display font-bold text-headline-md text-white mb-3 leading-[1.3] group-hover:text-accent transition-colors duration-200">
            {post.title}
          </h3>
          <p className="font-body text-body-md text-on-surface-variant leading-[1.6] line-clamp-3 mb-6 flex-1">
            {post.excerpt}
          </p>
          <span className="font-mono text-label-sm uppercase tracking-[0.08em] text-zinc-muted group-hover:text-white transition-colors duration-150 mt-auto">
            {post.readTime} →
          </span>
        </div>
      </article>
    </Link>
  )
}
