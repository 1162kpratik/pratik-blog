import Link from 'next/link'
import { assetUrl } from '@/lib/utils'
import type { Bookmark } from '@/lib/types'

export function BookmarkCard({ bookmark }: { bookmark: Bookmark }) {
  return (
    <Link href={`/bookmarks/${bookmark.slug}`} className="group block h-full">
      <article className="h-full flex flex-col bg-level-1 border border-border-subtle rounded-lg overflow-hidden hover:border-border-mid transition-colors duration-300">
        {/* Book cover */}
        <div className="relative h-52 flex-shrink-0">
          {bookmark.coverImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={assetUrl(bookmark.coverImage)}
              alt={bookmark.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0" style={{ background: bookmark.coverGradient }} />
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-7">
          <p className="font-mono text-label-sm uppercase tracking-[0.08em] text-accent mb-2">
            {bookmark.author}
          </p>
          <h3 className="font-display font-bold text-headline-md text-on-surface mb-4 leading-[1.3] group-hover:text-accent transition-colors duration-200">
            {bookmark.title}
          </h3>
          <span className="inline-flex items-center gap-1.5 font-mono text-label-sm uppercase tracking-[0.08em] text-zinc-muted group-hover:text-accent transition-colors duration-150">
            Read Notes →
          </span>
        </div>
      </article>
    </Link>
  )
}
