import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Header from '../components/Header'
import { rhythm } from '../utils/typography'
import { presets, themeStyles } from '../utils/theme'
import Img from "gatsby-image"
import { GatsbyImageSharpFluid_tracedSVG } from 'gatsby-transformer-sharp'

const styles = {
  menuItem: {
    marginLeft: '10px'
  },
  flexGrid: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  col: {
    width: '100%',
    [presets.Phablet]: {
      width: '47%',
    },
    [presets.Tablet]: {
      width: '32%',
    },
    objectFit: 'contain',
  },
}

export const TitleDatePhoto = ({ title, date, imageResponsive }) =>
  <div>
    <h2 css={{fontSize: rhythm(1.5), marginBottom: 0}}>{title}</h2>
    <div css={{fontSize: rhythm(1), marginBottom: rhythm(1/2)}}>{date.toLowerCase()}</div>
    {imageResponsive &&
      <Img fluid={imageResponsive} css={{marginBottom: 0}}/>
    }
  </div>

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    let posts = get(this, 'props.data.allMarkdownRemark.edges') || []
    posts = posts.filter(post => post.node.frontmatter.published)
    let currentLocation = null


    const postElements = posts.map(({ node }) => {
      const title = get(node, 'frontmatter.title')
      const imageResponsive = get(node, 'frontmatter.featuredImage.childImageSharp.fluid')
      const date = get(node, 'frontmatter.date')
      const excerpt = get(node, 'excerpt')
      return (
        <Link css={styles.col} to={node.fields.slug}>
          <TitleDatePhoto title={title} date={date} imageResponsive={imageResponsive}/>
          <p css={{marginBottom: rhythm(2), marginTop: rhythm(1/2), fontSize: rhythm(3/4)}}>
            {excerpt}
          </p>
        </Link>
      )
    })

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
                  ...GatsbyImageSharpFluid_tracedSVG
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
