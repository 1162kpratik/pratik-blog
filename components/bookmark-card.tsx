import Link from 'next/link'
import { assetUrl } from '@/lib/utils'
import type { Bookmark } from '@/lib/types'

export function BookmarkCard({ bookmark }: { bookmark: Bookmark }) {
  return (
    <Link href={`/bookmarks/${bookmark.slug}`} className="group block">
      {/* Portrait book-cover shape — 2:3 aspect ratio */}
      <article className="relative w-full aspect-[2/3] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        {/* Cover image fills entire card */}
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

        {/* Gradient overlay at bottom with text */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-10 pb-4 px-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-accent mb-1">
            {bookmark.author}
          </p>
          <h3 className="font-display font-bold text-[14px] text-white leading-[1.3] mb-2 line-clamp-2">
            {bookmark.title}
          </h3>
          <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-zinc-muted group-hover:text-accent transition-colors duration-150">
            Read Notes →
          </span>
        </div>
      </article>
    </Link>
  )
}
