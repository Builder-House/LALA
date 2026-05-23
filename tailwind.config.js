/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: '#1a2e1a',
        bottle: '#1e3a1e',
        moss: '#2d4a2d',
        sage: '#3d5c3a',
        fern: '#4a6741',
        cream: '#f5f2ec',
        warm: '#ede8e0',
        muted: '#8a8a80',
        charcoal: '#1c1c1a',
        ink: '#0e0e0c',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      letterSpacing: {
        // Use a custom key so we don't override Tailwind's built-in 'widest'
        ultrawide: '0.25em',
      },
    },
  },
  plugins: [],
}
