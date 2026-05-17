import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { RecentWriting } from '@/components/recent-writing'
import { Newsletter } from '@/components/newsletter'
import { SocialLinks } from '@/components/social-links'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <RecentWriting />
        <Newsletter />
        <SocialLinks />
        <p className="text-center font-body text-body-md text-zinc-muted pb-12">
          Made with ❤️ by Pratik Kale
        </p>
      </main>
      <Footer />
    </>
  )
}
