import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import type { Post } from '@/lib/types'

export function BlogCardFeatured({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="bg-level-1 border border-border-subtle rounded-lg overflow-hidden hover:border-border-mid transition-colors duration-300">
        {/* Cover — full width, taller */}
        <div className="relative h-[340px] w-full overflow-hidden">
          {post.coverImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.coverImage}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0" style={{ background: post.coverGradient }} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-level-1 via-level-1/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8 md:p-10">
          <p className="font-mono text-label-sm uppercase tracking-[0.1em] text-zinc-muted mb-4">
            {post.category}&nbsp;&nbsp;·&nbsp;&nbsp;{formatDate(post.date)}&nbsp;&nbsp;·&nbsp;&nbsp;{post.readTime}
          </p>
          <h2 className="font-display font-bold text-[28px] md:text-headline-lg text-white leading-[1.2] tracking-[-0.02em] group-hover:text-accent transition-colors duration-200 max-w-reading">
            {post.title}
          </h2>
        </div>
      </article>
    </Link>
  )
}
