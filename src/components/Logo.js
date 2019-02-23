import React from 'react'
import { rhythm } from '../utils/typography'

const Logo = () =>
  <div css={{ fontFamily: 'Karla', fontWeight: 700, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
    <div css={{ display: 'flex', flexDirection: 'column', fontSize: '20px'}}>
      <span>
        We
      </span>
      <span>
        Are
      </span>
    </div>
    <div css={{fontSize: '50px'}}>
      Clarks
    </div>
  </div>

export default Logo
