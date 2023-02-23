import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',
      gray900: '#121214',
      gray800: '#202024',
      gray400: '#8D8D99',
      gray300: '#c4c4cc',
      gray100: '#e1e1e6',

      green500: '#00875f',
      green300: '#00b37e',
    },
    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
  media: {
    initial: '(max-width: 1440px)',
    laptopM: '(max-width: 1024px)',
    tabletL: '(max-width: 768px)',
    tabletM: '(max-width: 660px)',
    tabletS: '(max-width: 600px)',
    mobileL: '(max-width: 425px)',
    mobileM: '(max-width: 375px)',
    mobileS: '(max-width: 320px)',
  },
})
