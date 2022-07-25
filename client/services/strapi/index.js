import axios from 'axios'
import Spacer from '@/services/strapi/components/Spacer'
import Text from '@/services/strapi/components/Text'

export class Strapi {
  uid = ''

  pageData = {}

  constructor(props) {
    this.uid = props.uid
  }

  /**
   * @param {{__component:Object}} component
   */
  static generateComponentData(component) {
    // eslint-disable-next-line
    switch (component['__component']) {
      case 'prismic-slices.spacer':
        return new Spacer(component)
      case 'prismic-slices.text':
        return new Text(component)
      default:
        return []
    }
  }

  async getPageContent() {
    const { data } = await axios.get(`http://158.181.22.126:1337/pages?uid=${this.uid}`)
    let pageData = []
    try {
      pageData = data[0].content.map(item =>
        // eslint-disable-next-line
         Strapi.generateComponentData(item))
    } catch (e) {
      // eslint-disable-next-line
      console.log(e)
    }
    this.pageData = pageData
  }
}
