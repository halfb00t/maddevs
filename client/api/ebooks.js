export const getEbooks = async prismic => {
  try {
    return await prismic.api.query(
      prismic.predicates.at('document.tags', ['Ebooks']),
      {
        orderings: '[document.first_publication_date desc]',
        pageSize: 100,
      },
    )
  } catch (error) {
    return error
  }
}
