import { ITextParagraph } from '@/services/strapi/components/interfaces/ITextParagraph'

// import { ,TEXT, WIDTH, BACKGROUND, THEME_COLOR, TEXT_SIZES } from '@/services/strapi/common/extractData'

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
    this.componentName = 'TextParagraph'
    // eslint-disable-next-line
    this.text = props.text || ''
    this.maxWidth = props.max_width || ''
    this.background = props.background.background || ''
    this.animation = props.background.animation || ''
    this.position = props.background.position || ''
    this.themeColor = props.theme_color.theme_color || ''
    this.textSizes = {
      xxl: props.text_size.xxl_screen || '',
      xl: props.text_size.xl_screen || '',
      lg: props.text_size.lg_screen || '',
      md: props.text_size.md_screen || '',
      sm: props.text_size.sm_screen || '',
    }
  }

  getComponentName() {
    return this.componentName
  }
}
