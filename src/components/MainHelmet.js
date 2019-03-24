import React from 'react'
import Helmet from 'react-helmet'
import familyPic from '../assets/2018_SF_Family.jpg'

const defaultDescription = "We're traveling the world and sometimes post photos here"
const defaultTitle = "The Clark Family | Travel Blog"
const defaultImage = familyPic
const defaultKeywords = 'family, travel'
export const baseURL = 'https://www.weareclarks.com'

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

export default ({ description=defaultDescription, title=defaultTitle, image=defaultImage, keywords=defaultKeywords, script, path="", type="blog" }) => (
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
    <meta property='og:url' content={baseURL + path} />
    <meta property='og:type' content={type} />
    <meta
      property="twitter:image"
      content={image}
    />
  </Helmet>
)
