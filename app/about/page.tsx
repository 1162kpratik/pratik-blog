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
      <main className="pb-0">

        {/* Hero section */}
        <section className="pt-28 pb-0 text-center">
          <div className="mx-auto max-w-container px-gutter flex flex-col items-center">

            {/* Heading */}
            <h1 className="font-display font-bold text-[42px] md:text-[56px] leading-[1.1] tracking-[-0.03em] mb-3">
              <span className="text-on-surface">Hi, I&apos;m </span>
              <span className="text-accent">Pratik</span>
            </h1>

            {/* Tagline */}
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-zinc-muted mb-8">
              Engineer&nbsp;·&nbsp;Explorer&nbsp;·&nbsp;Learner&nbsp;·&nbsp;Writer
            </p>

            {/* Photo with light leak background */}
            <div className="relative flex items-center justify-center w-72 h-72 md:w-80 md:h-80">
              {/* Light leak BG */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetUrl('/images/Light Leak BG.png')}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
              />
              {/* Profile photo — no background PNG */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetUrl('/images/pfpnoBG.png')}
                alt="Pratik Kale"
                className="relative z-10 w-56 h-56 md:w-64 md:h-64 object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Bio card — overlaps the hero slightly */}
        <section className="relative z-10 -mt-6">
          <div className="mx-auto max-w-2xl px-gutter">
            <div className="bg-level-1 border border-border-subtle rounded-2xl px-8 md:px-12 py-10 shadow-xl">
              <div className="space-y-6">
                {[
                  "I don't believe we have to choose between being analytical or creative.",
                  "I work in the world of Engineering and Smart Buildings but I've always been equally drawn toward Stories, Art, Ideas and Philosophy.",
                  "This is my digital garden. A space where both sides of me coexist.",
                  "One side loves technology, AI, systems and learning how things work. The other side keeps observing life, collecting thoughts, writing reflections and finding meaning in stories.",
                  "I use this space to document what I learn, explore ideas that keep me up at night and share writings that come from curiosity more than certainty.",
                  "I hope you find something that sparks your curiosity.",
                ].map((para, i) => (
                  <p key={i} className="font-body text-body-lg text-on-surface-variant leading-[1.85]">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="mt-16">
          <SocialLinks />
        </div>

        <p className="text-center font-body text-body-md text-zinc-muted pb-12">
          Made with ❤️ by Pratik Kale
        </p>
      </main>
      <Footer />
    </>
  )
}
