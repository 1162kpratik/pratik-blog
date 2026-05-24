import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Star, ExternalLink } from 'lucide-react'
import { assetUrl } from '@/lib/utils'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { bookmarks } from '@/content/bookmarks/data'
import type { Metadata } from 'next'

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  return bookmarks.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const book = bookmarks.find((b) => b.slug === slug)
  if (!book) return {}
  return {
    title: `${book.title} — Book Notes by Pratik Kale`,
    description: book.quote,
  }
}

export default async function BookmarkDetailPage({ params }: { params: Params }) {
  const { slug } = await params
  const book = bookmarks.find((b) => b.slug === slug)
  if (!book) notFound()

  return (
    <>
      <Nav />
      <main className="pt-24 pb-section">
        <div className="mx-auto max-w-container px-gutter">
          {/* Back */}
          <Link
            href="/bookmarks"
            className="inline-flex items-center gap-2 font-mono text-label-sm uppercase tracking-[0.08em] text-zinc-muted hover:text-on-surface transition-colors duration-150 mb-12 group"
          >
            <ArrowLeft size={12} className="group-hover:-translate-x-0.5 transition-transform duration-150" />
            All Books
          </Link>

          {/* ── Hero: Book Cover (left) + Meta (right) ── */}
          <div className="flex flex-col md:flex-row gap-10 mb-14 pb-10 border-b border-border-subtle">

            {/* Book cover — portrait rectangle */}
            <div className="flex-shrink-0 w-48 md:w-56 mx-auto md:mx-0">
              <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden shadow-2xl">
                {book.coverImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={assetUrl(book.coverImage)}
                    alt={book.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0" style={{ background: book.coverGradient }} />
                )}
              </div>
            </div>

            {/* Meta — author, title, rating, link */}
            <div className="flex flex-col justify-center gap-4">
              <p className="font-mono text-label-sm uppercase tracking-[0.12em] text-accent">
                {book.author}
              </p>
              <h1 className="font-display font-bold text-[28px] md:text-headline-lg text-on-surface leading-[1.2] tracking-[-0.02em]">
                {book.title}
              </h1>

              {book.goodreadsRating && (
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        className={
                          i < Math.round(book.goodreadsRating!)
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-border-mid'
                        }
                      />
                    ))}
                  </div>
                  <span className="font-mono text-label-sm text-zinc-muted tracking-[0.05em]">
                    {book.goodreadsRating.toFixed(1)} on Goodreads
                  </span>
                </div>
              )}

              {book.goodreadsUrl && (
                <a
                  href={book.goodreadsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-label-sm uppercase tracking-[0.08em] text-accent hover:underline w-fit"
                >
                  View on Goodreads
                  <ExternalLink size={11} />
                </a>
              )}
            </div>
          </div>

          <div className="max-w-reading">
            {/* ── My Favourite Quotes ── */}
            {book.favouriteQuotes && book.favouriteQuotes.length > 0 && (
              <section className="mb-14">
                <h2 className="font-display font-bold text-headline-md text-on-surface tracking-[-0.01em] mb-8">
                  My Favourite Quotes
                </h2>
                <div className="space-y-5">
                  {book.favouriteQuotes.map((quote, i) => (
                    <blockquote
                      key={i}
                      className="border-l-2 border-accent pl-5 py-1"
                    >
                      <p className="font-body text-body-lg text-on-surface-variant leading-[1.8] italic">
                        &ldquo;{quote}&rdquo;
                      </p>
                    </blockquote>
                  ))}
                </div>
              </section>
            )}

            <div className="border-t border-border-subtle mb-14" />

            {/* ── Who Should Read It? ── */}
            {book.whoShouldRead && (
              <section className="mb-14">
                <h2 className="font-display font-bold text-headline-md text-on-surface tracking-[-0.01em] mb-5">
                  Who Should Read It?
                </h2>
                <p className="font-body text-body-lg text-on-surface-variant leading-[1.85]">
                  {book.whoShouldRead}
                </p>
              </section>
            )}

            <div className="border-t border-border-subtle mb-14" />

            {/* ── Book Notes + Summary ── */}
            {book.notesAndSummary && book.notesAndSummary.length > 0 && (
              <section>
                <h2 className="font-display font-bold text-headline-md text-on-surface tracking-[-0.01em] mb-8">
                  Book Notes &amp; Summary
                </h2>
                <div className="space-y-6">
                  {book.notesAndSummary.map((para, i) => (
                    <p key={i} className="font-body text-body-lg text-on-surface-variant leading-[1.85]">
                      {para}
                    </p>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
