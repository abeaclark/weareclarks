import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql, StaticQuery } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import { rhythm, scale } from '../utils/typography'
import Header from '../components/Header'
import { presets, themeStyles } from '../utils/theme'
import { TitleDatePhoto } from '../pages/index'
import MainHelmet from '../components/MainHelmet'
import Img from "gatsby-image"
import { GatsbyImageSharpFluid } from 'gatsby-transformer-sharp'

class BlogPostTemplate extends React.Component {
  render() {
    console.log(this.props)
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    const title = get(post, 'frontmatter.title')
    const image = get(post, 'frontmatter.image')
    const date = get(post, 'frontmatter.date')
    const excerpt = get(post, 'excerpt')
    const titleImageResponsive = get(post, 'frontmatter.featuredImage.childImageSharp.fluid')

    return (
      <Layout location={this.props.location}>
        <MainHelmet
          description={excerpt}
          image={image}
          title={`${siteTitle} | ${title}`}
        />
        <Header />
        <div css={themeStyles.textPadding}>
          <TitleDatePhoto title={title} date={date} imageResponsive={titleImageResponsive}/>
          <div css={{marginBottom: rhythm(1)}}/>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
    
  }
`
