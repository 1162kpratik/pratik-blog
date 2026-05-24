import { assetUrl } from '@/lib/utils'

export function Hero() {
  return (
    <section className="min-h-[50vh] flex flex-col items-center justify-center pt-24 pb-12 text-center">
      <div className="mx-auto max-w-container px-gutter w-full flex flex-col items-center">

        {/* Avatar with light leak background and wink on hover */}
        <div className="relative flex items-center justify-center mb-8 cursor-pointer group w-64 h-64">
          {/* Light leak background — centered, fills container */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetUrl('/images/Light Leak BG.png')}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
          />
          {/* Avatar — centered inside the container */}
          <div className="relative w-32 h-32 z-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetUrl('/images/Normal Face.png')}
              alt="Pratik"
              className="absolute inset-0 w-full h-full object-cover rounded-full transition-opacity duration-200 opacity-100 group-hover:opacity-0"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetUrl('/images/Wink face.png')}
              alt="Pratik winking"
              className="absolute inset-0 w-full h-full object-cover rounded-full transition-opacity duration-200 opacity-0 group-hover:opacity-100"
            />
          </div>
        </div>

        <h1 className="font-display font-bold text-[40px] md:text-[56px] lg:text-display-xl leading-[1.08] tracking-[-0.04em] mb-7 max-w-[780px]">
          <span className="text-on-surface">Exploring Ideas across </span>
          <span className="text-accent">Tech, Creativity &amp; Life.</span>
        </h1>
        <p className="font-body text-body-lg text-on-surface-variant leading-[1.8] max-w-[500px]">
          Hi, I&apos;m Pratik. I work in the world of Engineering and Smart Buildings but
          I&apos;ve always been equally drawn toward Stories, Art, Ideas and Philosophy.
          This place is where both sides of me coexist.
        </p>
      </div>
    </section>
  )
}
