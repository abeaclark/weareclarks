import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import { colors, themeStyles } from '../utils/theme'
import Header from './Header'
import Footer from './Footer'
import MainHelmet from './MainHelmet'

class Template extends React.Component {
  render() {
    const { location, children, hideForm } = this.props
    return (
      <div
        style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: colors.white }}
      >
        <MainHelmet />
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', backgroundColor: 'white', ...themeStyles.contentWidth, margin: '0 auto' }}>
          {children}
        </div>
      </div>
    )
  }
}

export default Template
