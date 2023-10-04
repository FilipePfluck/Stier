import { defineConfig, defineGlobalStyles } from '@pandacss/dev'
import radixColorsPreset from 'pandacss-preset-radix-colors'

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  presets: [
    radixColorsPreset({
      darkMode: true,
    }),
    '@pandacss/preset-panda',
  ],
  theme: {
    extend: {
      keyframes: {
        fadein: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pop: {
          '0%': { transform: 'scale(1)', boxShadow: 'var(--box-shadow)' },
          '100%': {
            transform: 'scale(var(--scale))',
            boxShadow: 'var(--box-shadow-picked-up)',
          },
        },
      },
    },
  },
  jsxFramework: 'react',
  outdir: 'styled-system',
  globalCss: defineGlobalStyles({
    '::-webkit-scrollbar': {
      width: '16px',
    },

    '::-webkit-scrollbar-track': {
      bg: 'gray.3',
    },

    '::-webkit-scrollbar-thumb': {
      bg: 'gray.5',
      transition: '0.2s',
      '&:hover': {
        bg: 'gray.6',
      },
    },
  }),
})
