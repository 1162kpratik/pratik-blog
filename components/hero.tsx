export function Hero() {
  return (
    <section className="min-h-[68vh] flex flex-col items-center justify-center pt-16 pb-section text-center">
      <div className="mx-auto max-w-container px-gutter w-full flex flex-col items-center">
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
