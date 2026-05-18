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
    <section className="py-10 border-t border-border-subtle">
      <div className="mx-auto max-w-container px-gutter">
        {/* Orange pill label */}
        <div className="flex justify-center mb-7">
          <span className="bg-accent text-black font-mono font-bold text-[11px] uppercase tracking-[0.15em] px-5 py-2 rounded-full">
            Follow Me Elsewhere
          </span>
        </div>

        {/* Social links */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {SOCIALS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 font-display font-bold text-[18px] md:text-[22px] text-on-surface hover:text-accent transition-colors duration-200 tracking-[-0.02em]"
            >
              {label}
              <ArrowUpRight
                size={15}
                className="text-zinc-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
