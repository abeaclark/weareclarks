import React from 'react'
import Helmet from 'react-helmet'
import profilePic from './profile-pic.jpg'

const defaultDescription = "A normal family traveling the world"
const defaultTitle = "The Real Clarks | Family Blog"
const defaultImage = profilePic
const defaultKeywords = 'family, travel'

const mainScript={
  "type": "application/ld+json",
  "innerHTML": `{
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "The Real Clarks",
    "url": "https://www.therealclarks.com",
    "sameAs": [
    ]
  }`
}

export default ({ description=defaultDescription, title=defaultTitle, image=defaultImage, keywords=defaultKeywords, script }) => (
  <Helmet
    title={title}
    meta={[
      { property: 'description', content: description },
      { property: 'keywords', content:  keywords },
      { property: 'image', content: image },
    ]}
    script={[Object.assign(mainScript, script)]}
  >
    <meta property="og:description" content={description} />
    <meta property="twitter:description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:image" content={image} />
    <meta property="og:image" content={image} />
    <meta
      property="twitter:image"
      content={image}
    />
  </Helmet>
)
