import React from 'react'
import { rhythm } from '../utils/typography'
import { themeStyles, colors, presets } from '../utils/theme'
import { parent } from 'glamor'
import { Link, navigate } from 'gatsby'
import logo from '../assets/we-are-clarks-logo.png'

const styles = {
  link: {
    marginLeft: '15px',
    color: 'inherit',
    textDecoration: 'none',
  }
}

class Header extends React.Component {
  render() {
    return (
      <div css={themeStyles.textPadding}>
        <div css={{borderBottom: '1px solid black', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Link to="/">
            <img src={logo} css={{maxWidth: '250px', margin: 0, marginBottom: '5px'}}/>
          </Link>
        </div>
        <div css={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <Link to="/subscribe" css={[styles.link, {marginLeft: 0}]}>
            subscribe
          </Link>
          <Link to="/about" css={styles.link}>
            about
          </Link>
          <Link to="/destinations" css={styles.link}>
            destinations
          </Link>
        </div>
      </div>
    )
  }
}

export default Header
