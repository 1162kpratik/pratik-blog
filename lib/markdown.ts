import { marked, Renderer } from 'marked'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''

function buildRenderer() {
  const r = new Renderer()

  r.image = ({ href, title, text }: { href: string; title: string | null; text: string }) => {
    const src = href.startsWith('/') ? `${BASE}${href}` : href
    const caption = title
      ? `<figcaption class="text-center font-mono text-label-sm text-zinc-muted mt-3 italic">${title}</figcaption>`
      : ''
    return `<figure class="my-10">\n<img src="${src}" alt="${text}" class="rounded-lg w-full" loading="lazy" />${caption}\n</figure>`
  }

  return r
}

export function markdownToHtml(content: string): string {
  return marked.parse(content, { renderer: buildRenderer() }) as string
}
