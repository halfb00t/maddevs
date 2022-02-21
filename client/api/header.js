export const getHeaderContent = async prismic => {
  const fetchLink = [
    'post.body',
    'post.meta_title',
    'post.featured_image',
    'post.title',
    'post.date',
    'post.post_author',
    'author.name',
    'author.position',
    'author.uid',
    'author.thumbnail_image',
    'author.social_networks',
    'author.image',
    'author.meta_title',
    'author.meta_description',
    'author.schema_org_snippets',
  ]
  try {
    const response = await prismic.api.getSingle('header', {
      fetchLinks: fetchLink,
    })
    return response.data
  } catch (error) {
    return error
  }
}
