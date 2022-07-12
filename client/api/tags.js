export const getTags = async prismic => {
  try {
    const response = await prismic.api.query(prismic.predicates.at('document.type', 'tags'), {
      orderings: '[my.post.date desc]',
      pageSize: 100,
    })
    return response.results
  } catch (error) {
    return error
  }
}
