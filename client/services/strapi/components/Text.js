import { IText } from '@/services/strapi/components/interfaces/IText'

export default class Text extends IText {
  constructor(props) {
    super()
    this.generateData(props)
  }

  /**
   * @param {{text:string}} props
   * @param {{ColorTheme:object}} props
   * @param {{Position:object}} props
   * @param {{size_xl:string}} props
   * @param {{size_sm:string}} props
   * @param {{size_xs:string}} props
   * @param {{max_width:string}} props
   * @param {{ShowAnchorLink:string}} props
   * @param {{HeaderTag:string}} props
   */
  generateData(props) {
    this.text = props.text
    this.colorTheme = props.ColorTheme.type
    this.position = props.Position.type
    this.fontSizeXl = props.size_xl
    this.fontSizeSm = props.size_sm
    this.fontSizeXs = props.size_xs
    this.maxWidth = props.max_width
    this.showAnchorLink = props.ShowAnchorLink
    this.headerTag = props.HeaderTag
  }
}
