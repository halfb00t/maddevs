export const getEbooks = async (prismic, tag, page = 1) => {
  try {
    return await prismic.api.query(
      prismic.predicates.at('document.tags', [tag]),
      {
        orderings: '[document.first_publication_date desc]',
        pageSize: 6,
        page,
      },
    )
  } catch (error) {
    return error
  }
}
