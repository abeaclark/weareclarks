import React from 'react'

import { rhythm } from '../utils/typography'
import { themeStyles, colors } from '../utils/theme'

class Footer extends React.Component {
  render() {
    return (
      <div style={{ height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderTop: `5px solid ${colors.brightBlue}`, backgroundColor: colors.mediumGrey}}>
        <div style={{ margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span>The Real Clarks © 2018.</span> <span css={{whiteSpace: 'nowrap'}}>All rights reserved.</span>
        </div>
      </div>
    )
  }
}

export default Footer
