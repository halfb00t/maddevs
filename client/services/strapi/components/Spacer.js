import { ISpacer } from '@/services/strapi/components/interfaces/ISpacer'

export default class Spacer extends ISpacer {
  constructor(props) {
    super()
    this.generateData(props)
  }

  /**
   * @param {{height:string}} props
   * @param {{height_xl:string}} props
   * @param {{height_lg:string}} props
   * @param {{height_md:string}} props
   * @param {{height_sm:string}} props
   * @param {{background:string}} props
   */
  generateData(props) {
    this.heightDefault = props.height
    this.heightScreenXl = props.height_xl
    this.heightScreenLg = props.height_lg
    this.heightScreenMd = props.height_md
    this.heightScreenSm = props.height_sm
    this.background = props.background?.color || ''
  }
}
