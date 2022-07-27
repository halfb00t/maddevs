import { ISpacer } from '@/services/strapi/components/interfaces/ISpacer'

export class Spacer extends ISpacer {
  /**
   * @param {{height_default:string}} props
   * @param {{height_xl:string}} props
   * @param {{height_lg:string}} props
   * @param {{height_md:string}} props
   * @param {{height_sm:string}} props
   * @param {{background:string}} props
   */
  constructor(props) {
    super()
    this.heightDefault = props.height_default || ''
    this.heightScreenXl = props.height_xl || ''
    this.heightScreenLg = props.height_lg || ''
    this.heightScreenMd = props.height_md || ''
    this.heightScreenSm = props.height_sm || ''
    this.background = props.background?.background || ''
  }
}
