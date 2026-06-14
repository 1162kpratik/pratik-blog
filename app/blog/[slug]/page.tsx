import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { markdownToHtml } from '@/lib/markdown'
import { Nav } from '@/components/nav'
import { SocialLinks } from '@/components/social-links'
import { Footer } from '@/components/footer'
import { getAllPosts, getPostBySlug } from '@/lib/mdx'
import { formatDate, assetUrl } from '@/lib/utils'
import type { Metadata } from 'next'

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} — Pratik Kale`,
    description: post.excerpt,
  }
}

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const htmlContent = markdownToHtml(post.content)

  return (
    <>
      <Nav />
      <main className="pt-28">
        <div className="mx-auto max-w-container px-gutter">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-label-sm uppercase tracking-[0.08em] text-zinc-muted hover:text-on-surface transition-colors duration-150 mb-12 group"
          >
            <ArrowLeft
              size={12}
              className="group-hover:-translate-x-0.5 transition-transform duration-150"
            />
            All Posts
          </Link>

          {/* Article header */}
          <div className="max-w-reading mx-auto mb-10">
            <p className="font-mono text-label-sm uppercase tracking-[0.1em] text-accent mb-4">
              {post.category}
            </p>
            <h1 className="font-display font-bold text-[36px] md:text-headline-lg text-on-surface leading-[1.15] tracking-[-0.025em] mb-5">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-zinc-muted font-mono text-label-sm uppercase tracking-[0.06em]">
              <span>{formatDate(post.date)}</span>
              <span className="w-[3px] h-[3px] rounded-full bg-zinc-muted opacity-50" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Cover image / gradient */}
          <div className="relative h-[300px] md:h-[420px] w-full rounded-lg overflow-hidden mb-14">
            {post.coverImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={assetUrl(post.coverImage)}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0" style={{ background: post.coverGradient }} />
            )}
          </div>

          {/* Content */}
          <div className="max-w-reading mx-auto">
            <article
              className="prose prose-midnight max-w-none"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border-subtle">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-label-sm uppercase tracking-[0.08em] text-zinc-muted border border-border-mid rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <SocialLinks />
      </main>
      <Footer />
    </>
  )
}
