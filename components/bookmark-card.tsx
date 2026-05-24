import Link from 'next/link'
import { assetUrl } from '@/lib/utils'
import type { Bookmark } from '@/lib/types'

export function BookmarkCard({ bookmark }: { bookmark: Bookmark }) {
  return (
    <Link href={`/bookmarks/${bookmark.slug}`} className="group block">
      {/* Portrait book-cover shape — 2:3 aspect ratio */}
      <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300 mb-3">
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

      {/* Title + author below the cover */}
      <div>
        <h3 className="font-display font-bold text-[13px] text-on-surface leading-[1.3] mb-0.5 line-clamp-2 group-hover:text-accent transition-colors duration-200">
          {bookmark.title}
        </h3>
        <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-zinc-muted">
          {bookmark.author}
        </p>
      </div>
    </Link>
  )
}
