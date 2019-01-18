import Typography from 'typography'

const theme = {
  title: 'Custom Theme',
  baseFontSize: '15px',
  baseLineHeight: 1.25,
  googleFonts: [
    {
      name: 'Thasadith',
      styles: ['400', '400i', '700', '700i'],
    },
  ],
  headerFontFamily: ['Thasadith', 'sans-serif'],
  bodyFontFamily: ['Thasadith', 'sans-serif'],
  bodyColor: 'hsla(0,0%,0%,0.6)',
  headerColor: 'hsla(0, 0%, 0%, 0.8)',
  headerWeight: '700',
  bodyWeight: '400',
  boldWeight: '700',
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    // h1: {
    //   ...scale(2),
    // },
    // [TABLET_MEDIA_QUERY]: {
    //   h1: {
    //     ...scale(5 / 5),
    //   },
    // },
    a: {
      color: options.bodyColor,
      textDecoration: 'none',
    },
    p: {
      paddingBottom: rhythm(1/2),
    },
    // 'a:hover': {
    //   color: '#ea9629',
    //   textDecoration: 'underline',
    // },
    'ol,ul': {
      marginLeft: 0,
      paddingLeft: rhythm(1.5),
    },
    'li>ul,li>ol': {
      marginLeft: 0,
      paddingLeft: rhythm(1.5),
    },
    blockquote: {
      ...scale(1 / 5),
      fontWeight: 300,
      fontStyle: 'italic',
      marginLeft: rhythm(1.5),
      marginRight: rhythm(1.5),
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      fontWeight: options.bodyWeight,
      textTransform: 'uppercase',
    },
    h6: {
      marginTop: rhythm(1.25),
      marginBottom: rhythm(1.25),
    },
    table: {
      ...scale(-1 / 5),
    },
    th: {
      fontWeight: options.boldWeight,
      textTransform: 'uppercase',
    },
    dl: {
      marginLeft: rhythm(3 / 4),
    },
  }),
}

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
