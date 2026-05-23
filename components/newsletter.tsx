'use client'

import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault()
    if (!email.trim()) return

    const apiKey = process.env.NEXT_PUBLIC_RESEND_API_KEY
    const audienceId = process.env.NEXT_PUBLIC_RESEND_AUDIENCE_ID

    if (!apiKey || !audienceId) {
      setSubmitted(true)
      setEmail('')
      return
    }

    setLoading(true)
    setError(false)

    try {
      const res = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim(), unsubscribed: false }),
      })

      if (res.ok) {
        setSubmitted(true)
        setEmail('')
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="pb-section">
      <div className="mx-auto max-w-container px-gutter">
        <div className="bg-level-1 border border-border-subtle rounded-lg px-8 md:px-20 py-14 md:py-16 text-center">
          <h2 className="font-display font-bold text-[28px] md:text-headline-lg text-on-surface tracking-[-0.02em] mb-4">
            Stay in the Loop
          </h2>
          <p className="font-body text-body-md text-on-surface-variant leading-[1.75] max-w-[460px] mx-auto mb-10">
            My newsletter goes out every fortnight. It ranges widely across books, media and
            modern life and always written to feel like a note from a friend.
          </p>

          {submitted ? (
            <p className="font-mono text-label-sm uppercase tracking-[0.1em] text-accent">
              You&apos;re in — talk soon.
            </p>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="flex items-center gap-2 max-w-[380px] mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={loading}
                  className="flex-1 min-w-0 bg-level-0 border border-border-mid rounded-full px-5 py-2.5 font-body text-body-md text-on-surface placeholder:text-zinc-muted placeholder:opacity-50 focus:outline-none focus:border-accent transition-colors duration-150 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-shrink-0 bg-accent text-white font-display font-bold text-[13px] tracking-[-0.01em] px-6 py-2.5 rounded-full hover:brightness-110 active:scale-95 transition-all duration-150 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? 'Subscribing…' : 'Subscribe'}
                </button>
              </form>
              {error && (
                <p className="font-mono text-label-sm uppercase tracking-[0.08em] text-red-400 mt-4">
                  Something went wrong — please try again.
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
