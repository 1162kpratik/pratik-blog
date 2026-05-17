export interface Post {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  tags: string[]
  readTime: string
  content: string
  coverGradient: string
  coverImage?: string
  featured?: boolean
}

export interface Bookmark {
  id: number
  slug: string
  title: string
  author: string
  noteCount: number
  totalNotes: number
  coverGradient: string
  coverImage?: string
  quote: string           // short quote shown on the card
  // Detail page fields
  goodreadsRating?: number
  goodreadsUrl?: string
  favouriteQuotes?: string[]
  whoShouldRead?: string
  notesAndSummary?: string[]  // array of paragraphs
}
