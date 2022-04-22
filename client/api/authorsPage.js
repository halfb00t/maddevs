export const getAllAuthors = async prismic => {
  const graphQuery = `{
    author {
      name
    }
  }`
  try {
    const response = await prismic.api.query(
      prismic.predicates.at('document.type', 'author'),
      {
        pageSize: 100,
        graphQuery,
      },
    )
    return response.results
  } catch (error) {
    return error
  }
}

export async function getAllPostsAuthors(prismic, currentPageOffset = 1) {
  try {
    const graphQuery = `
    {
      post {
        post_author {
          uid
        }
      }
    }`
    const response = await prismic.api.query(
      prismic.predicates.at('document.type', 'post'),
      {
        pageSize: 100,
        page: currentPageOffset,
        graphQuery,
      },
    )
    const currentPosts = response.results
    if (!response.next_page) {
      return currentPosts
    }
    const newPageOffset = currentPageOffset + 1
    const newPosts = await getAllPostsAuthors(prismic, newPageOffset)
    return ([...currentPosts, ...newPosts])
  } catch (error) {
    return error
  }
}
