export const getLinkWithLifeTime = async (axios, payload) => {
  try {
    const response = await axios.post('api/get-link-with-life-time', payload)
    return response
  } catch (error) {
    return error
  }
}
