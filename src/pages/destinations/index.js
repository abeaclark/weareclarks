import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../../components/layout'
import Header from '../../components/Header'
import { rhythm } from '../../utils/typography'
import { presets, themeStyles } from '../../utils/theme'
import Img from "gatsby-image"
import { GatsbyImageSharpFluid } from 'gatsby-transformer-sharp'

const styles = {
  link: {
    position: 'relative',
    width: '100%',
  },
  destinationTitle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    color: 'white',
    zIndex: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Karla',
    fontSize: rhythm(1.5),
    [presets.Tablet]: {
      fontSize: rhythm(5),
    },
    [presets.Phablet]: {
      fontSize: rhythm(3),
    },
  }
}

export const DestinationImage = ({ title, imageResponsive, slug }) => {
  const internals = (
    <div css={styles.link}>
      <div css={styles.destinationTitle}>
        {title}
      </div>
      {imageResponsive && <Img fluid={imageResponsive} css={{marginBottom: rhythm(1)}}/> }
    </div>
  )
  if (slug) {
    return (
      <Link to={slug}>
        {internals} 
      </Link>
    )
  }
  return internals
}
  

// TODO: Add mainHeader

class BlogIndex extends React.Component {
  render() {
    let posts = get(this, 'props.data.allMarkdownRemark.edges') || []
    posts = posts.filter(post => post.node.frontmatter.published)
    const postElements = posts.map(({ node }) => {
      const title = get(node, 'frontmatter.title')
      const imageResponsive = get(node, 'frontmatter.featuredImage.childImageSharp.fluid')
      return <DestinationImage slug={node.fields.slug} title={title} imageResponsive={imageResponsive}/>
    })
    return (
      <Layout location={this.props.location}>
        <Header />
        <div css={themeStyles.textPadding}>
          {postElements}
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(filter: {fields: {slug: { regex: "/destinations/"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            published
          }
        }
      }
    }
  }
`
