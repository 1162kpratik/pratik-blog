'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Bookmarks', href: '/bookmarks' },
  { label: 'About', href: '/about' },
]

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="w-7 h-7" />

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className="p-1.5 rounded-full text-zinc-muted hover:text-on-surface transition-colors duration-150"
    >
      {theme === 'dark' ? (
        <Sun size={15} strokeWidth={1.8} />
      ) : (
        <Moon size={15} strokeWidth={1.8} />
      )}
    </button>
  )
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-level-0/80 backdrop-blur-[20px] border-b border-border-subtle'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-container px-gutter h-16 grid grid-cols-3 items-center">
        {/* Left — logo */}
        <Link href="/" className="flex items-center gap-2 group w-fit">
          <span className="text-base leading-none">⚡</span>
          <span className="hidden md:inline font-display font-semibold text-[13px] tracking-[-0.01em] text-on-surface">
            Pratik Kale
          </span>
        </Link>

        {/* Center — nav links */}
        <nav className="flex items-center justify-center gap-8">
          {NAV_LINKS.map(({ label, href }) => {
            const active = isActive(href)
            return (
              <Link
                key={href}
                href={href}
                className={`relative font-mono text-[11px] font-medium uppercase tracking-[0.08em] transition-colors duration-150 group pb-0.5 ${
                  active ? 'text-on-surface' : 'text-zinc-muted hover:text-on-surface'
                }`}
              >
                {label}
                {/* Orange underline — scales in from left */}
                <span
                  className={`absolute -bottom-px left-0 w-full h-[1.5px] bg-accent origin-left transition-transform duration-200 ${
                    active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            )
          })}
        </nav>

        {/* Right — theme toggle */}
        <div className="flex items-center justify-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
