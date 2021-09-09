export const getCustomPage = async (prismic, payload) => {
  try {
    const response = await prismic.api.getByUID('custom_page', payload)
    return response
  } catch (error) {
    return error
  }
}
