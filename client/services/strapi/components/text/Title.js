import { ITextTitle } from '@/services/strapi/components/interfaces/ITextTitle'

export class TextTitle extends ITextTitle {
  /**
   * @param {{title:string}} props
   * @param {{show_anchor_link:boolean}} props
   * @param {{max_width:string}} props
   * @param {{animation:string}} props
   * @param {{theme_color:string}} props
   * @param {{position:string}} props
   * @param {{header_tag:string}} props
   * @param {{text_size:{xxl_screen, xl_screen, lg_screen, md_screen, sm_screen}}} props
   */
  constructor(props) {
    super()
    this.componentName = 'TextTitle'
    this.text = props.title || ''
    this.show_anchor_link = props.show_anchor_link || ''
    this.max_width = props.max_width || ''
    this.animation = props.animation.animation || ''
    this.position = props.position.position || ''
    this.header_tag = props.header_tag.header_tag || ''
    this.theme_color = props.theme_color.theme_color || ''
    this.textSizeXXL = props.text_size.xxl_screen || ''
    this.textSizeXL = props.text_size.xl_screen || ''
    this.textSizeLG = props.text_size.lg_screen || ''
    this.textSizeMD = props.text_size.md_screen || ''
    this.textSizeSM = props.text_size.sm_screen || ''
  }

  getComponentName() {
    return this.componentName
  }
}
