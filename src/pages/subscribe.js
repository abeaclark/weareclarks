import React from 'react'
import Layout from '../components/layout'
import Header from '../components/Header'
import { presets, themeStyles } from '../utils/theme'
import SubscribeForm from '../components/SubscribeForm'
const url = "https://weareclarks.us20.list-manage.com/subscribe/post?u=9b7815376d12da46a6538d866&amp;id=d735ef801d"

const Subscribe = ({ location }) => (
  <Layout location={location}>
    <Header />
    <div css={[themeStyles.textPadding, {display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}]}>
      <h1>Get the latest in your inbox.</h1>
      <p>We'll let you know when our newest posts come out so you can follow along</p>
      <SubscribeForm url={url} />
    </div>
  </Layout>
)

export default Subscribe
