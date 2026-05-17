import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import type { Post } from './types'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

function parsePost(slug: string, raw: string): Post {
  const { data, content } = matter(raw)
  const { text } = readingTime(content)
  return {
    slug,
    title: data.title ?? '',
    excerpt: data.excerpt ?? '',
    date: data.date ?? '',
    category: data.category ?? 'Uncategorized',
    tags: data.tags ?? [],
    readTime: text,
    content,
    coverGradient:
      data.coverGradient ??
      'linear-gradient(150deg, #111111 0%, #1c1c1c 55%, #0c0c0c 100%)',
    coverImage: data.coverImage,
    featured: data.featured ?? false,
  }
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '')
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8')
      return parsePost(slug, raw)
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  return parsePost(slug, raw)
}
