import { transparentize } from 'polished'

const px2rem = px => px / 16 + 'rem'

const colors = {
  dark1: '#23272a',
  dark2: '#41474c',
  dark3: '#59636b',
  light1: '#9cacba',
  light2: '#bac8d3',
  light3: '#c8d2da',
  light4: '#eef3f7',
  white: '#fff',
  black: '#000',
  green1: '#00a265',
  green2: '#00c97e',
  green3: '#52d7a5',
  green4: '#a9ebd2',
  yellow1: '#dea64b',
  yellow2: '#ffb867',
  yellow3: '#ffd99c',
  yellow4: '#ffe1be',
  purple1: '#860479',
  purple2: '#b306a2',
  purple3: '#b34da8',
  purple4: '#f7cff3',
  blue1: '#008aab',
  blue2: '#00a5c9',
  blue3: '#43caea',
  blue4: '#cdf2ff',
  darkblue1: '#11333b',
  darkblue2: '#02566a',
  red1: '#bb2e3e',
  red2: '#ed4a59',
  red3: '#fc7b87',
  red4: '#fcaab2',
  darkred1: '#5b1419',
  darkred2: '#7d202b',
  darkred3: '#972936',
}

const space = {
  xxs: px2rem(3),
  xs: px2rem(7),
  s: px2rem(11),
  m: px2rem(16),
  l: px2rem(23),
  xl: px2rem(40),
}

const radii = {
  default: '2px',
  l: '4px',
  infinite: '9999em',
}

const shadows = {
  subtle: `
    0 1px 0 0 ${colors.light3},
    0 1px 2px ${transparentize(0.85, colors.black)}
  `,
  light: `
    0 2px 4px ${transparentize(0.8, colors.black)},
    0 1px 0 0 ${transparentize(0.8, colors.light1)}
  `,
  default: `0 1px 2px ${transparentize(0.85, colors.black)}`,
  heavy: `0 2px 8px 0 ${transparentize(0.9, colors.dark2)}`,
  top: `0 1px 2px ${transparentize(0.9, colors.dark2)}`,
}

// small, medium, xlarge
const fontSizes = {
  xs: px2rem(13),
  s: px2rem(16),
  m: px2rem(19),
  l: px2rem(23),
  xl: px2rem(28),
  display: px2rem(48),
  displayLarge: px2rem(83),
}

const lineHeights = {
  xs: px2rem(19),
  s: 'normal',
  m: px2rem(27),
  l: px2rem(33),
  xl: px2rem(39),
  display: px2rem(48),
  displayLarge: px2rem(83),
}

const transition = '0.2s cubic-bezier(0.38, 1.59, 0.82, 0.96)'

const fonts = {
  base:
    'BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
  primary:
    'Milo, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
}

export default {
  colors,
  fonts,
  fontSizes,
  lineHeights,
  radii,
  shadows,
  space,
  transition,
}
