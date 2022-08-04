import { Spacer } from '@/services/strapi/components/spacer/Spacer'
import { TextTitle } from '@/services/strapi/components/text/Title'
import { TextParagraph } from '@/services/strapi/components/text/Paragraph'

export const generateComponentData = component => {
  // eslint-disable-next-line
  const name = component['__component']

  /** text components  * */
  if (name.startsWith('text')) {
    /** Title component  * */
    if (name.includes('text.title')) {
      return new TextTitle(component)
    }
    /** Title+Text component  * */
    if (name.includes('text.title-and-text')) {
      // todo add variation
    }
    /** Paragraph component  * */
    if (name.includes('text.paragraph')) {
      return new TextParagraph(component)
    }
    // todo add all variations
  }

  /** Spacer component  * */
  if (name.includes('spacer.spacer')) {
    return new Spacer(component)
  }

  /** startScreen component  * */
  if (name.startsWith('start_screen')) {
    // todo add all variations
  }
  return { type: 'none', component } // todo replace to error throw when component will done
}

export const getComponentContent = item => {
  try {
    return generateComponentData(item)
  } catch (e) {
    // eslint-disable-next-line
    console.log(e)
  }
  return []
}
