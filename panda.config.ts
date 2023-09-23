import { defineConfig } from '@pandacss/dev'
import radixColorsPreset from 'pandacss-preset-radix-colors'

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  presets: [radixColorsPreset(), '@pandacss/preset-panda'],
  theme: {
    extend: {},
  },
  jsxFramework: 'react',
  outdir: 'styled-system',
})
