import { reactive, ref } from '@vue/composition-api'
import { extractText } from '@/services/strapi/common/extractData'

export class TextSizes {
  valueRef = ref(null)

  constructor(props) {
    this.valueRef = reactive({
      xxl: extractText(props.xxl_screen),
      xl: extractText(props.xl_screen),
      lg: extractText(props.lg_screen),
      md: extractText(props.md_screen),
      sm: extractText(props.sm_screen),
    })
  }
}
