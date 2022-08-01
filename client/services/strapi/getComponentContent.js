/* eslint-disable */
// const { data } = await axios.get(`http://127.0.0.1:1337/pages?uid=${this.uid}`)
import { Spacer } from '@/services/strapi/components/spacer/Spacer'
import { TextTitle } from '@/services/strapi/components/text/Title'
import { TextParagraph } from '@/services/strapi/components/text/Paragraph'

export const generateComponentData = component => {
  const name = component['__component']

  /** text components  **/
  if (name.startsWith('text')) {
    /** Title component  **/
    if (name.includes('text.title')) {
      console.log('text.title')
      return new TextTitle(component)
    }
    /** Title+Text component  **/
    if (name.includes('text.title-and-text')) { // todo not implemented in cms + name is not correct?
      return { type: 'text.title-and-text', component } // todo change to class call
    }
    /** Paragraph component  **/
    if (name.includes('text.paragraph')) {
      console.log('text.paragraph')
      return new TextParagraph(component)
    }
    // todo add all variations
  }

  /** Spacer component  **/
    if (name.includes('spacer.spacer')) {
      console.log('spacer')
      return new Spacer(component)
  }

  /** startScreen component  **/
  if (name.startsWith('start_screen')) {
    console.log('start_screen')
    // todo add all variations
  }
  return { type: 'none', component } // todo replace to error throw when component will done
}

export const getComponentContent = item => { // todo remove this?
  try {
    return generateComponentData(item)
  } catch (e) {
    console.log(e)
  }
  return []
}
