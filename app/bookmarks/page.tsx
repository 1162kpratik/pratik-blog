import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { BookmarkCard } from '@/components/bookmark-card'
import { bookmarks } from '@/content/bookmarks/data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bookmarks - Pratik Kale',
  description: 'Notes and reflections on the best books I\'ve read.',
}

export default function BookmarksPage() {
  return (
    <>
      <Nav />
      <main className="pt-24 pb-section">
        <div className="mx-auto max-w-container px-gutter">
          {/* Header */}
          <div className="mb-12">
            <h1 className="font-display font-bold text-headline-lg text-on-surface tracking-[-0.02em] mb-4">
              Bookmarks
            </h1>
            <p className="font-body text-body-lg text-on-surface-variant max-w-[520px]">
              I enjoy reading and get through more books than I can count. Here&apos;s some of
              the notes I&apos;ve taken on the best books I&apos;ve read so far.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {bookmarks.map((bookmark) => (
              <BookmarkCard key={bookmark.id} bookmark={bookmark} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
