import React from 'react'
import Layout from '../components/layout'
import Header from '../components/Header'
import { presets, themeStyles } from '../utils/theme'
import { GatsbyImageSharpFluid } from 'gatsby-transformer-sharp'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"
import get from 'lodash/get'
import { rhythm } from '../utils/typography'

const About = ({ location, data }) => {
  console.log(data)
  const imgFluid = get(data, 'file.childImageSharp.fluid')
  console.log(imgFluid)
  return (
    <Layout location={location}>
      <Header />
      <div css={themeStyles.textPadding}>
        {imgFluid &&<Img fluid={imgFluid} css={{marginBottom: rhythm(1)}}/> }
        <h1>About the Clark Family</h1>
        <p>Hello there! We're the Clarks.</p>
        <p>Lindsay is from West Virginia and Abe is from Washington. We met at BYU and were married. Then we moved to San Francisco, where we spent 3.5yrs.</p>
        <p>Last year, Abe tried out working remotely from Utah and found that it worked pretty well.
        During the summer we came up with the crazy idea to go travel the world.
        A crazy idea became a crazy reality after 6 months of planning and preparation.</p>
        <p>
          We started on our current trip in January of 2019 and plan to be gone until mid-summer 2019.
          This blog is a collection of our adventures.
        </p>

        <p>
          Now to what you all really care about: STELLA!
        </p>

        <p>
          Stella was born July of 2017. She's a great baby and has been an awesome traveller. She LOVES animals and lately, chocolate milk.
          She always says "Hi" to people and loves giving high-fives.
        </p>
      </div>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "2018_SF_Family.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`