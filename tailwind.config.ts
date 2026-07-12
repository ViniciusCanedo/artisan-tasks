import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      colors: {
        terracotta: '#C05E51',
        sand: '#EAE6D7',
        clay: '#B99B85',
        olive: '#70755C',
        charcoal: '#2D2D2D',
        offwhite: '#F9F8F6'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        editorial: '0 4px 20px -2px rgba(45, 45, 45, 0.05)',
        'editorial-hover': '0 8px 30px -4px rgba(45, 45, 45, 0.08)'
      },
      borderRadius: {
        organic: '0.35rem'
      },
      transitionProperty: {
        reveal: 'opacity, transform'
      }
    }
  }
} satisfies Config
