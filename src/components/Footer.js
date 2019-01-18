import React from 'react'

import { rhythm } from '../utils/typography'
import { themeStyles, colors } from '../utils/theme'

class Footer extends React.Component {
  render() {
    return (
      <div style={{ margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span>instagram: @weareclarks @lschwendi @abe_clark</span>
      </div>
    )
  }
}

export default Footer
