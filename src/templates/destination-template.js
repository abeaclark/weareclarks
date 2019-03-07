import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql, StaticQuery } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import { rhythm, scale } from '../utils/typography'
import Header from '../components/Header'
import { presets, themeStyles } from '../utils/theme'
import TitleDatePhoto from '../components/TitleDatePhoto'
import PostList from '../components/PostList'
import MainHelmet from '../components/MainHelmet'
import Img from "gatsby-image"
import { GatsbyImageSharpFluid } from 'gatsby-transformer-sharp'
import { DestinationImage } from '../pages/destinations'


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    let posts = get(this, 'props.data.allMarkdownRemark.edges') || []
    posts = posts.filter(p => get(p, 'node.frontmatter.destination') === get(post, 'frontmatter.title'))
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    const title = get(post, 'frontmatter.title')
    const excerpt = get(post, 'excerpt')
    const thumbnailImage = get(post, 'frontmatter.featuredImage.childImageSharp.fluid.src')
    const fullThumbnailImageURL = `${this.props.location.origin}${thumbnailImage}`
    const imageResponsive = get(post, 'frontmatter.featuredImage.childImageSharp.fluid')
    return (
      <Layout location={this.props.location}>
        <MainHelmet
          description={excerpt}
          image={fullThumbnailImageURL}
          title={`${siteTitle} | ${title}`}
        />
        <Header />
        <div css={themeStyles.textPadding}>
          {imageResponsive && <DestinationImage title={title} imageResponsive={imageResponsive}/> }
          <div css={{textAlign: 'center'}} dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr />
        </div>
        <PostList posts={posts} />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query Destination($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allMarkdownRemark(filter: {fields: {slug: { regex: "/blog/"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            destination
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
