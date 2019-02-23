import React from 'react'
import { rhythm } from '../utils/typography'
import { themeStyles, colors, presets } from '../utils/theme'
import { parent } from 'glamor'
import { Link, navigate } from 'gatsby'
import logo from '../assets/we-are-clarks-logo.png'

class Header extends React.Component {
  render() {
    return (
      <div css={themeStyles.textPadding}>
        <div css={{borderBottom: '1px solid black', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Link to="/">
            <img src={logo} css={{maxWidth: '250px'}}/>
          </Link>
        </div>
      </div>
    )
  }
}

export default Header
