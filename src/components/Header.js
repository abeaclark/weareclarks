import React from 'react'
import { rhythm } from '../utils/typography'
import { themeStyles, colors, presets } from '../utils/theme'
import { parent } from 'glamor'
import { Link, navigate } from 'gatsby'

import { FaFacebookF, FaInstagram, FaGooglePlusG, FaBloggerB, FaYoutube, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { IoIosMenu } from 'react-icons/io';

class Header extends React.Component {
  render() {
    return (
      <div css={{ zIndex: 100, backgroundColor: 'rgba(256,256,256,.7)', }}>
        <div
          css={{
            ...themeStyles.contentWidth,
            display: 'flex',
            alignSelf: 'stretch',
            marginBottom: rhythm(2.5),
            padding: rhythm(3),
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 100,
          }}
        >
          <Link to="/">
            The Real Clarks
          </Link>
        </div>
      </div>
    )
  }
}

export default Header
