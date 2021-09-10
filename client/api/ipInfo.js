import axios from 'axios'

export const getIPInfo = async () => {
  let response = {}
  try {
    response = await axios.get(`https://ipinfo.io/json?token=${process.env.ipInfoToken}`)
    return response.data
  } catch (error) {
    return response
  }
}
