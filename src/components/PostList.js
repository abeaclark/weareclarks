import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import { rhythm } from '../utils/typography'
import { presets, themeStyles } from '../utils/theme'
import Img from "gatsby-image"
import { GatsbyImageSharpFluid } from 'gatsby-transformer-sharp'
import TitleDatePhoto from './TitleDatePhoto'

const PostList = ({ posts }) => {
  const publishedPosts = posts.filter(post => post.node.frontmatter.published)

  const postElements = publishedPosts.map(({ node }, index) => {
    const title = get(node, 'frontmatter.title')
    const imageResponsive = get(node, 'frontmatter.featuredImage.childImageSharp.fluid')
    const date = get(node, 'frontmatter.date')
    const excerpt = get(node, 'excerpt')
    return (
      <Link to={node.fields.slug} key={index} css={{color: 'inherit', textDecoration: 'none'}}>
        <TitleDatePhoto title={title} date={date} imageResponsive={imageResponsive}/>
        <p css={{marginBottom: rhythm(2), marginTop: rhythm(1/2), fontSize: rhythm(3/4)}}>
          {excerpt}
        </p>
      </Link>
    )
  })
  return (
    <div css={themeStyles.textPadding}>
      {postElements}
    </div>
  )
}

export default PostList
