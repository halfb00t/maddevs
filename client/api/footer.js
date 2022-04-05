export const getFooterContent = async prismic => {
  try {
    const response = await prismic.api.getSingle('footer')
    return response.data
  } catch (error) {
    return error
  }
}
