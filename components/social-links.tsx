import { ArrowUpRight } from 'lucide-react'

const SOCIALS = [
  { label: 'Email', href: 'mailto:prat162k@gmail.com' },
  { label: 'Instagram', href: 'https://instagram.com/pratt.ekk' },
  { label: 'X/Twitter', href: 'https://x.com/pratt_ekk' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kalepratik' },
  { label: 'Substack', href: 'https://substack.com/@prattekk' },
]

export function SocialLinks() {
  return (
    <section className="py-section border-t border-border-subtle">
      <div className="mx-auto max-w-container px-gutter">
        {/* Orange pill label */}
        <div className="flex justify-center mb-14">
          <span className="bg-accent text-black font-mono font-bold text-[11px] uppercase tracking-[0.15em] px-5 py-2 rounded-full">
            Follow Me Elsewhere
          </span>
        </div>

        {/* Social links */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {SOCIALS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="group flex items-center gap-2 font-display font-bold text-[28px] md:text-[34px] text-on-surface hover:text-accent transition-colors duration-200 tracking-[-0.02em]"
            >
              {label}
              <ArrowUpRight
                size={20}
                className="text-zinc-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
