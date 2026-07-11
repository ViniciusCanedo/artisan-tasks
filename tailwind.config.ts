import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        editorial: {
          cream: '#F4EFEA',   // Main background tone from screen references
          sand: '#EFE9E0',    // Secondary navigation blocks
          dark: '#2A2421',    // Primary body text/typography
          accent: '#C86A4B',  // Terracotta primary action buttons
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif']
      }
    }
  }
}
