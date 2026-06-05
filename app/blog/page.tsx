import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { BlogList } from '@/components/blog-list'
import { getAllPosts } from '@/lib/mdx'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blogs - Pratik Kale',
  description: 'Essays and reflections on tech, creativity, engineering, and life.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Nav />
      <main className="pt-24 pb-section">
        <div className="mx-auto max-w-container px-gutter">
          <BlogList posts={posts} />
        </div>
      </main>
      <Footer />
    </>
  )
}
