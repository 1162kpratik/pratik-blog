import { assetUrl } from '@/lib/utils'
import { Nav } from '@/components/nav'
import { SocialLinks } from '@/components/social-links'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Pratik Kale',
  description: 'Engineer, thinker, and writer exploring ideas across tech, creativity, and life.',
}

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero — full-bleed photo with name overlay */}
        <div className="relative w-full overflow-hidden" style={{ height: '85vh' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetUrl('/images/pratik.jpeg')}
            alt="Pratik Kale"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center 18%' }}
          />
          {/* Gradient only at the bottom so face stays fully visible */}
          <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black to-transparent" />

          {/* Name + location — pinned to the bottom of the photo */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="mx-auto max-w-container px-gutter pb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
              <h1 className="font-display font-bold text-[44px] md:text-[60px] text-white leading-none tracking-[-0.03em]">
                Pratik Kale
              </h1>
              <p className="font-mono text-label-sm uppercase tracking-[0.12em] text-zinc-muted pb-1">
                Based in: Pune, India
              </p>
            </div>
          </div>
        </div>

        {/* Bio */}
        <section className="py-section">
          <div className="mx-auto max-w-container px-gutter">
            <div className="max-w-reading space-y-7">
              {[
                "I don't believe we have to choose between being analytical or creative.",
                "I work in the world of Engineering and Smart Buildings but I've always been equally drawn toward Stories, Art, Ideas and Philosophy.",
                "This is my digital garden. A space where both sides of me coexist.",
                "One side loves technology, AI, systems and learning how things work. The other side keeps observing life, collecting thoughts, writing reflections and finding meaning in stories.",
                "I use this space to document what I learn, explore ideas that keep me up at night and share writings that come from curiosity more than certainty.",
                "I hope you find something that sparks your curiosity.",
              ].map((para, i) => (
                <p
                  key={i}
                  className="font-body text-body-lg text-on-surface-variant leading-[1.85]"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        <SocialLinks />

        <p className="text-center font-body text-body-md text-zinc-muted pb-12">
          Made with ❤️ by Pratik Kale
        </p>
      </main>
      <Footer />
    </>
  )
}
