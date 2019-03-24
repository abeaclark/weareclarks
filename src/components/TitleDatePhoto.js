import React from 'react'
import { rhythm } from '../utils/typography'
import Img from "gatsby-image"
import { GatsbyImageSharpFluid } from 'gatsby-transformer-sharp'

const TitleDatePhoto = ({ title, date, imageResponsive, hidePhoto }) =>
  <div>
    <h2 css={{fontSize: rhythm(1.5), marginBottom: 0}}>{title}</h2>
    <div css={{fontSize: rhythm(1), marginBottom: rhythm(1/2)}}>{date}</div>
    {imageResponsive && !hidePhoto &&
      <Img fluid={imageResponsive} css={{marginBottom: 0}}/>
    }
  </div>

export default TitleDatePhoto