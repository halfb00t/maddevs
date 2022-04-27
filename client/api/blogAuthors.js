export const getBlogAuthors = async prismic => {
  try {
    const response = await prismic.api.query(
      prismic.predicates.at('document.type', 'author'),
      { pageSize: 100 },
    )
    return response.results
  } catch (error) {
    return error
  }
}

export const getBlogAuthor = async (prismic, payload) => {
  try {
    const response = await prismic.api.getByUID('author', payload)
    return response
  } catch (error) {
    return error
  }
}

export const getAuthorPostsHelper = async (prismic, whatAuthor, payload) => {
  try {
    return await prismic.api.query([
      prismic.predicates.at('document.type', 'post'),
      prismic.predicates.at(`my.post.${whatAuthor}`, payload),
    ], {
      orderings: '[my.post.date desc]',
      pageSize: 100,
    })
  } catch (error) {
    return error
  }
}

export const getAuthorPosts = async (prismic, payload) => {
  try {
    const response = await getAuthorPostsHelper(prismic, 'post_author', payload)
    const responseCoAuthor = await getAuthorPostsHelper(prismic, 'post_coauthor', payload)

    response.results = Array.from(new Set(response.results.concat(responseCoAuthor.results)))
      .sort((a, b) => new Date(b.first_publication_date) - new Date(a.first_publication_date))

    return response.results
  } catch (error) {
    return error
  }
}
