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
        // Brand accent
        accent: '#F97316',

        // Midnight Editorial elevation levels (dark-mode values)
        'level-0': '#000000',
        'level-1': '#0a0a0a',
        'level-2': '#1a1a1a',
        'on-surface': '#e2e2e2',
        'on-surface-variant': '#c4c7c8',
        'zinc-muted': '#a1a1aa',
        'border-subtle': '#1a1a1a',
        'border-mid': '#2a2a2a',
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
            '--tw-prose-body': '#c4c7c8',
            '--tw-prose-headings': '#ffffff',
            '--tw-prose-links': '#F97316',
            '--tw-prose-bold': '#e2e2e2',
            '--tw-prose-counters': '#a1a1aa',
            '--tw-prose-bullets': '#444748',
            '--tw-prose-hr': '#1a1a1a',
            '--tw-prose-quotes': '#c4c7c8',
            '--tw-prose-quote-borders': '#444748',
            '--tw-prose-captions': '#a1a1aa',
            '--tw-prose-code': '#e2e2e2',
            '--tw-prose-pre-code': '#e2e2e2',
            '--tw-prose-pre-bg': '#0a0a0a',
            '--tw-prose-th-borders': '#2a2a2a',
            '--tw-prose-td-borders': '#1a1a1a',
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
