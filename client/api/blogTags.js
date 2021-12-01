import { getBlogPosts } from '@/api/blog'
import convertStringToSlug from '@/helpers/convertStringToSlug'

export const getBlogTags = async prismic => {
  try {
    const blogTags = []
    const blogPosts = await getBlogPosts(prismic)
    for (const post of blogPosts) {
      for (const tag of post.tags) {
        if (!blogTags.includes(tag)) blogTags.push(tag)
      }
    }

    return blogTags
  } catch (error) {
    return error
  }
}

export const getBlogTag = async (prismic, payload) => {
  try {
    const blogTags = await getBlogTags(prismic)
    return blogTags.find(tag => convertStringToSlug(tag) === payload)
  } catch (error) {
    return error
  }
}

export const getPostsByTag = async (prismic, payload) => {
  try {
    const response = await prismic.api.query(prismic.predicates.at('document.tags', [payload]), {
      orderings: '[my.post.date desc]',
      pageSize: 100,
    })
    return response.results.filter(recommendedPost => Boolean(recommendedPost.data?.post_author?.id))
  } catch (error) {
    return error
  }
}
