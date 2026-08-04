import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: '#007DCC',
        accent: '#FFB900',
        brand: {
          DEFAULT: '#D10056',
          dark: '#B2054C',
        },
      },
    },
  },
}