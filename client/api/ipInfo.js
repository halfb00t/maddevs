import axios from 'axios'

export const getIPInfo = async () => {
  let response = {}
  try {
    response = await axios.get('https://ipinfo.io/json?token=a8977b4e0667ed')
    return response.data
  } catch (error) {
    return response
  }
}
