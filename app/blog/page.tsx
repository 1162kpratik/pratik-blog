import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { BlogCard } from '@/components/blog-card'
import { BlogCardFeatured } from '@/components/blog-card-featured'
import { getAllPosts } from '@/lib/mdx'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blogs - Pratik Kale',
  description: 'Essays and reflections on tech, creativity, engineering, and life.',
}

export default function BlogPage() {
  const posts = getAllPosts()
  const featured = posts.find((p) => p.featured) ?? posts[0]
  const rest = posts.filter((p) => p.slug !== featured?.slug)
  const medium = rest.slice(0, 2)
  const small = rest.slice(2)

  return (
    <>
      <Nav />
      <main className="pt-24 pb-section">
        <div className="mx-auto max-w-container px-gutter">
          <h1 className="font-display font-bold text-headline-lg text-on-surface tracking-[-0.02em] mb-12">
            Blogs
          </h1>

          {/* Featured post — pinned by featured: true flag */}
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

          {posts.length === 0 && (
            <p className="font-body text-body-md text-on-surface-variant mt-12">
              No posts yet — check back soon.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
