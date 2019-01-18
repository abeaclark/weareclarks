import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import { rhythm } from '../utils/typography'
import { presets } from '../utils/theme'

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

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    let currentLocation = null

    const postElements = posts.map(({ node }) => {
      const title = get(node, 'frontmatter.title')
      const image = get(node, 'frontmatter.image')
      return (
        <Link css={styles.col} to={node.fields.slug}>
          <div css={{fontSize: rhythm(1), marginBottom: rhythm(1/2)}}>{title}</div>
          <img src={image} />
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
        <div css={{padding: '20px'}}>
          <div css={{[presets.Phablet]: {flexDirection: 'row',}, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
            <h1 css={{flex: 1, display: 'flex'}}>
              the clark family
            </h1>
            <div css={{marginBottom: '20px', fontSize: rhythm(1)}}>
              <a css={{marginRight: '10px'}} href="https://www.instagram.com/weareclarks/">@weareclarks</a>
              <a css={{marginRight: '10px'}} href="https://www.instagram.com/lschwendi/">@lschwendi</a>
              <a css={{marginRight: '10px'}} href="https://www.instagram.com/abe_clark/">@abe_clark</a>
            </div>
          </div>
          <div css={styles.flexGrid}>
            {postElements}
          </div>
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
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            image
          }
        }
      }
    }
  }
`
