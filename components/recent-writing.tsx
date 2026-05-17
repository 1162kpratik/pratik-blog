import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { BlogCard } from './blog-card'
import { getAllPosts } from '@/lib/mdx'

export function RecentWriting() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <section className="pb-section">
      <div className="mx-auto max-w-container px-gutter">
        <div className="flex items-center justify-between mb-element">
          <h2 className="font-display font-bold text-[28px] md:text-headline-lg text-white tracking-[-0.02em]">
            Recent Writing
          </h2>
          <Link
            href="/blog"
            className="flex items-center gap-1.5 font-mono text-label-sm uppercase tracking-[0.08em] text-zinc-muted hover:text-white transition-colors duration-150 group"
          >
            View All
            <ArrowRight
              size={12}
              className="group-hover:translate-x-0.5 transition-transform duration-150"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
