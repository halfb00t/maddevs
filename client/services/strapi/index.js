import axios from 'axios'
import { markRaw } from '@vue/composition-api'

import { getComponentContent } from '@/services/strapi/getComponentContent'

export class Strapi {
  pageData = {}

  queryOptions = '/api/pages?&populate=deep&filters[uid][$eq]='

  constructor(options) {
    this.options = options
  }

  // eslint-disable-next-line
  async serviceGet(url) {
    return axios.get(url)
  }

  createAxiosUrl(uid) { // bad naming and position
    try {
      return `${process.env.strapiApiUrl}${this.queryOptions}${uid}`
    } catch (e) {
      console.log(e)
    }
    return { data: [] }
  }

  /**
   * @param uid
   */
  async getPageContent(uid) {
    const { data } = await this.serviceGet(this.createAxiosUrl(uid))
    // eslint-disable-next-line
    const strapiData = data.data[0]['attributes'].components.map(item => getComponentContent(item))
    markRaw(strapiData)
    return strapiData
  }
}
