'use client'

import { useState } from 'react'
import { BlogCard } from '@/components/blog-card'
import { BlogCardFeatured } from '@/components/blog-card-featured'
import type { Post } from '@/lib/types'

export function BlogList({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState('All')

  const categories = ['All', ...Array.from(new Set(posts.map((p) => p.category))).sort()]

  const filtered = active === 'All' ? posts : posts.filter((p) => p.category === active)

  const featured = active === 'All' ? (posts.find((p) => p.featured) ?? posts[0]) : filtered[0]
  const rest = filtered.filter((p) => p.slug !== featured?.slug)
  const medium = active === 'All' ? rest.slice(0, 2) : rest.slice(0, 2)
  const small = rest.slice(2)

  return (
    <>
      {/* Header row */}
      <div className="flex items-start justify-between gap-4 mb-12 flex-wrap">
        <h1 className="font-display font-bold text-headline-lg text-on-surface tracking-[-0.02em]">
          Blogs
        </h1>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-mono text-[10px] uppercase tracking-[0.08em] px-3 py-1.5 rounded-full border transition-all duration-150 ${
                active === cat
                  ? 'bg-accent border-accent text-black'
                  : 'border-border-mid text-zinc-muted hover:border-accent hover:text-on-surface'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 && (
        <p className="font-body text-body-md text-on-surface-variant mt-12">
          No posts in this category yet.
        </p>
      )}

      {/* Featured */}
      {featured && (
        <div className="mb-8">
          <BlogCardFeatured post={featured} />
        </div>
      )}

      {/* Medium grid — 2 columns */}
      {medium.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {medium.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}

      {/* Small list — 3 columns */}
      {small.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 mt-4">
          {small.map((post) => (
            <BlogCard key={post.slug} post={post} size="sm" />
          ))}
        </div>
      )}
    </>
  )
}
