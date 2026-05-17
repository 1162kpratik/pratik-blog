import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Blogs', href: '/blog' },
  { label: 'Bookmarks', href: '/bookmarks' },
  { label: 'About', href: '/about' },
]

export function Footer() {
  return (
    <footer className="bg-level-1 border-t border-border-subtle">
      <div className="mx-auto max-w-container px-gutter py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Wordmark — all white, no color accent */}
        <span className="font-mono font-black text-sm uppercase tracking-[0.1em] text-on-surface select-none">
          PRATIK KALE
        </span>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="font-mono text-[11px] text-zinc-muted hover:text-on-surface transition-colors duration-150 tracking-[0.05em]"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p className="font-mono text-[11px] text-zinc-muted tracking-[0.04em]">
          © {new Date().getFullYear()} PratiK Kale.
        </p>
      </div>
    </footer>
  )
}
