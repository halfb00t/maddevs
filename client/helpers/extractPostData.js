import formatDate from '@/helpers/formatDate'

export default post => {
  if (!post.data) return {}

  return {
    type: post.type,
    id: post.id,
    uid: post.uid,
    title: post.data.title,
    subtitle: post.data.subtitle,
    featuredImage: post.data.featured_image,
    recommendedPosts: post.recommendedPosts,
    postAuthor: post.data.post_author,
    tableOfContents: post.data.table_of_contents,
    slices: post.data.body,
    tags: post.tags,
    date: formatDate(post.data.date),
    metaTitle: post.data.meta_title || post.data.title[0].text,
    metaDescription: post.data.meta_description,
  }
}
