import Link from 'next/link'
import type { Bookmark } from '@/lib/types'

export function BookmarkCard({ bookmark, index }: { bookmark: Bookmark; index: number }) {
  return (
    <Link href={`/bookmarks/${bookmark.slug}`} className="group block h-full">
      <article className="h-full flex flex-col bg-level-1 border border-border-subtle rounded-lg overflow-hidden hover:border-border-mid transition-colors duration-300">
        {/* Book cover */}
        <div className="relative h-52 flex-shrink-0">
          <div className="absolute inset-0" style={{ background: bookmark.coverGradient }} />
          {/* Index badge */}
          <span className="absolute top-4 right-4 font-mono text-label-sm text-zinc-muted tracking-[0.04em]">
            {String(index + 1).padStart(2, '0')} / {String(bookmark.totalNotes).padStart(2, '0')}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-7">
          <p className="font-mono text-label-sm uppercase tracking-[0.08em] text-accent mb-2">
            {bookmark.author}
          </p>
          <h3 className="font-display font-bold text-headline-md text-on-surface mb-4 leading-[1.3] group-hover:text-accent transition-colors duration-200">
            {bookmark.title}
          </h3>
          <p className="font-body text-body-md text-on-surface-variant leading-[1.7] italic flex-1 mb-6 line-clamp-3">
            &ldquo;{bookmark.quote}&rdquo;
          </p>

          <span className="inline-flex items-center gap-1.5 font-mono text-label-sm uppercase tracking-[0.08em] text-zinc-muted group-hover:text-accent transition-colors duration-150">
            Read Notes →
          </span>
        </div>
      </article>
    </Link>
  )
}
