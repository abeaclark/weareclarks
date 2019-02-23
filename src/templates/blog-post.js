import React from 'react'
import Helmet from 'react-helmet'
import { Link,graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import { rhythm, scale } from '../utils/typography'
import Header from '../components/Header'
import { presets, themeStyles } from '../utils/theme'
import { TitleDatePhoto } from '../pages/index'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    const title = get(post, 'frontmatter.title')
    const image = get(post, 'frontmatter.image')
    const date = get(post, 'frontmatter.date')
    const excerpt = get(post, 'excerpt')

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <Header />
        <div css={themeStyles.textPadding}>
          <TitleDatePhoto title={title} date={date} image={image}/>
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
        image
      }
    }
  }
`
