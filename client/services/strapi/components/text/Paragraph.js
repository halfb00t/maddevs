import { ITextParagraph } from '@/services/strapi/components/interfaces/ITextParagraph'

export class TextParagraph extends ITextParagraph {
  /**
   * @param {{text:string}} props
   * @param {{max_width:string}} props
   * @param {{background:{background}}} props
   * @param {{gradient:{gradient}}} props
   * @param {{theme_color: {theme_color}}} props
   * @param {{text_size:{xxl_screen, xl_screen, lg_screen, md_screen, sm_screen}}} props

   */
  constructor(props) {
    super()
    // eslint-disable-next-line
    this.componentName = props['__component'] || ''
    this.text = props.text || ''
    this.maxWidth = props.max_width || ''
    this.background = props.background.background || ''
    this.themeColor = props.theme_color.theme_color || ''
    this.textSizeXXL = props.text_size.xxl_screen || ''
    this.textSizeXL = props.text_size.xl_screen || ''
    this.textSizeLG = props.text_size.lg_screen || ''
    this.textSizeMD = props.text_size.md_screen || ''
    this.textSizeSM = props.text_size.sm_screen || ''
  }
}
