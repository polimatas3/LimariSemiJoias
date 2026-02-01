import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        // Sistema de cores semânticas para semi-joias
        // Cores primárias - Dourado (mais dourado)
        gold: {
          50: '#fef9e7',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#D4AF37', // Dourado principal mais rico
          600: '#B8941F',
          700: '#9A7A1A',
          800: '#7C6015',
          900: '#5E4610',
          950: '#402C0B',
        },
        // Cores secundárias - Cinza (#808080)
        black: {
          50: '#f5f5f5',
          100: '#e8e8e8',
          200: '#d1d1d1',
          300: '#b3b3b3',
          400: '#999999',
          500: '#808080', // Cinza principal
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#1a1a1a',
          950: '#0d0d0d',
        },
        // Cor coral/pele (#d18f6a)
        coral: {
          50: '#f9f0eb',
          100: '#f2d8c9',
          200: '#e8b8a3',
          300: '#de9880',
          400: '#d18f6a', // Coral principal
          500: '#b87a56',
          600: '#9f6542',
          700: '#865035',
          800: '#6d3b28',
          900: '#54261b',
          950: '#3b120e',
        },
        // Cores neutras - Branco
        white: {
          DEFAULT: '#ffffff',
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        // Cores semânticas para uso no design
        primary: {
          light: '#fde68a',    // gold-200
          DEFAULT: '#D4AF37',   // gold-500 (dourado mais rico)
          dark: '#B8941F',     // gold-600
          darker: '#9A7A1A',   // gold-700
        },
        secondary: {
          light: '#b3b3b3',    // black-300
          DEFAULT: '#808080',  // black-500 (cinza médio)
          dark: '#4d4d4d',     // black-700
        },
        neutral: {
          light: '#fafafa',    // white-50
          DEFAULT: '#ffffff',  // white
          dark: '#f5f5f5',     // white-100
        },
        accent: {
          DEFAULT: '#d18f6a',  // coral-400 (coral principal)
          hover: '#b87a56',    // coral-500
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        display: ['Cormorant Garamond', 'Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold': '0 4px 6px -1px rgba(212, 175, 55, 0.1), 0 2px 4px -1px rgba(212, 175, 55, 0.06)',
        'gold-lg': '0 10px 15px -3px rgba(212, 175, 55, 0.1), 0 4px 6px -2px rgba(212, 175, 55, 0.05)',
        'luxury': '0 20px 60px -15px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(212, 175, 55, 0.1)',
        'luxury-lg': '0 30px 80px -20px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(212, 175, 55, 0.15)',
      },
      letterSpacing: {
        'luxury': '0.1em',
        'luxury-wide': '0.15em',
      },
    },
  },
}
