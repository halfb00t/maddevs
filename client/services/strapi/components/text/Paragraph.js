import { ITextParagraph } from '@/services/strapi/components/interfaces/ITextParagraph'
import { TextSizesClassName } from '@/services/strapi/common/TextSizesClassName'

export class TextParagraph extends ITextParagraph {
  /**
   * @param {{text:string}} props
   * @param {{max_width:string}} props
   * @param {{background:{background}}} props
   * @param {{animation:{animation}}} props
   * @param {{position:{position}}} props
   * @param {{theme_color: {theme_color}}} props
   * @param {{text_size:{xxl_screen, xl_screen, lg_screen, md_screen, sm_screen}}} props
   */
  constructor(props) {
    super()
    this.componentName = 'TextParagraph'
    this.baseClassName = 'text-paragraph'
    this.text = props.text || ''
    this.maxWidth = props.max_width || ''
    this.background = props.background.background || ''
    this.animation = props.animation.animation || ''
    this.position = props.position.position || ''
    this.themeColor = props.theme_color.theme_color || ''
    this.textSizes = new TextSizesClassName(props.text_size)
  }

  handleResize(currentScreenSize) {
    this.textSizes.handleResize(currentScreenSize)
  }

  getComponentName() {
    return this.componentName
  }
}
