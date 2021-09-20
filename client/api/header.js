export const getHeaderContent = async prismic => {
  try {
    const response = await prismic.api.getSingle('header')
    return response.data
  } catch (error) {
    return error
  }
}
