import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: 'var(--color-accent)',
        'level-0': 'var(--color-level-0)',
        'level-1': 'var(--color-level-1)',
        'level-2': 'var(--color-level-2)',
        'on-surface': 'var(--color-on-surface)',
        'on-surface-variant': 'var(--color-on-surface-variant)',
        'zinc-muted': 'var(--color-zinc-muted)',
        'border-subtle': 'var(--color-border-subtle)',
        'border-mid': 'var(--color-border-mid)',
      },

      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },

      fontSize: {
        'display-xl': ['64px', { lineHeight: '1.08', letterSpacing: '-0.04em' }],
        'headline-lg': ['40px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'headline-md': ['24px', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
        'body-lg': ['18px', { lineHeight: '1.8' }],
        'body-md': ['16px', { lineHeight: '1.6' }],
        'label-sm': ['12px', { lineHeight: '1', letterSpacing: '0.05em' }],
      },

      maxWidth: {
        container: '1120px',
        reading: '720px',
      },

      spacing: {
        section: '120px',
        'section-sm': '64px',
        element: '32px',
        gutter: '24px',
      },

      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
        full: '9999px',
      },

      typography: {
        midnight: {
          css: {
            '--tw-prose-body': 'var(--color-on-surface-variant)',
            '--tw-prose-headings': 'var(--color-on-surface)',
            '--tw-prose-links': 'var(--color-accent)',
            '--tw-prose-bold': 'var(--color-on-surface)',
            '--tw-prose-counters': 'var(--color-zinc-muted)',
            '--tw-prose-bullets': 'var(--color-border-mid)',
            '--tw-prose-hr': 'var(--color-border-subtle)',
            '--tw-prose-quotes': 'var(--color-on-surface-variant)',
            '--tw-prose-quote-borders': 'var(--color-border-mid)',
            '--tw-prose-captions': 'var(--color-zinc-muted)',
            '--tw-prose-code': 'var(--color-on-surface)',
            '--tw-prose-pre-code': 'var(--color-on-surface)',
            '--tw-prose-pre-bg': 'var(--color-level-1)',
            '--tw-prose-th-borders': 'var(--color-border-mid)',
            '--tw-prose-td-borders': 'var(--color-border-subtle)',
            fontFamily: 'var(--font-body), system-ui, sans-serif',
            fontSize: '18px',
            lineHeight: '1.8',
            maxWidth: 'none',
            a: { textDecoration: 'none', '&:hover': { textDecoration: 'underline' } },
            'h1,h2,h3,h4': { fontFamily: 'var(--font-display), sans-serif', fontWeight: '700' },
            pre: { border: '1px solid #1a1a1a', borderRadius: '0.5rem' },
            code: {
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '0.875em',
              backgroundColor: '#0a0a0a',
              borderRadius: '0.25rem',
              padding: '0.15em 0.4em',
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
          },
        },
      },
    },
  },
  plugins: [typography],
}

export default config
