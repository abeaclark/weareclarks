import React from 'react'
import Helmet from 'react-helmet'
import familyPic from '../assets/2018_SF_Family.jpg'

const defaultDescription = "we're traveling the world and sometimes post photos here"
const defaultTitle = "the clark family | travel blog"
const defaultImage = familyPic
const defaultKeywords = 'family, travel'

const mainScript={
  "type": "application/ld+json",
  "innerHTML": `{
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "the clark family",
    "url": "https://www.weareclarks.com",
    "sameAs": [
      "https://www.instagram.com/weareclarks/"
      "https://www.instagram.com/lschwendi/"
      "https://www.instagram.com/abe_clark/"
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
