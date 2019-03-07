import { rhythm } from '../utils/typography'

export const colors = {
  lightGrey: '#F2F6F6',
  mediumGrey: '#969fa8',
  brightBlue: '#41a4ce',
  lightestGrey: '#F2F6F6',
}

export const presets = {
  Mobile: '@media (min-width: 400px)',
  Phablet: '@media (min-width: 550px)',
  Tablet: '@media (min-width: 750px)',
  Desktop: '@media (min-width: 1000px)',
  Hd: '@media (min-width: 1200px)'
}

export const metrics = {
  defaultMargin: rhythm(2),
  defaultPadding: rhythm(3),
  defaultMobilePadding: rhythm(1),
  contentWidth: "1000px"
}

export const themeStyles = {
  contentWidth: { width: "100%", maxWidth: metrics.contentWidth, margin: '0 auto'},
  blueTitleText: { color: colors.brightBlue, fontSize: rhythm(1.5), fontWeight: '400', textAlign: 'center' },
  shadow: { boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.61)'},
  elementMargin: {
    marginTop: rhythm(2),
  },
  innerTextBreak: { width: '100%', maxWidth: '700px', padding: '0 10px', margin: '0 auto' },
  textPadding: {
    paddingLeft: metrics.defaultMobilePadding,
    paddingRight: metrics.defaultMobilePadding,
    paddingTop: rhythm(1),
      paddingBottom: rhythm(1),
    [presets.Desktop]: {
      paddingLeft: metrics.defaultPadding,
      paddingRight: metrics.defaultPadding,
      paddingTop: rhythm(1),
      paddingBottom: rhythm(1),
    },
  }
}