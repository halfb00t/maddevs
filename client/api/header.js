export const getHeaderContent = async prismic => {
  const fetchLink = [
    'post.body',
    'post.meta_title',
    'post.featured_image',
    'post.title',
    'post.date',
    'post.post_author',
    'customer_university.body',
    'customer_university.meta_title',
    'customer_university.featured_image',
    'customer_university.title',
    'customer_university.date',
    'customer_university.post_author',
    'author.name',
    'author.position',
    'author.uid',
    'author.thumbnail',
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
