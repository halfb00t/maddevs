import { ref } from '@vue/composition-api'
import { extractText } from '@/services/strapi/common/extractData'

export class TextSizesClassName {
  refClassName = ref('')

  constructor(props) {
    this.textSizes = {
      xxl: extractText(props.xxl_screen),
      xl: extractText(props.xl_screen),
      lg: extractText(props.lg_screen),
      md: extractText(props.md_screen),
      sm: extractText(props.sm_screen),
    }
  }

  handleResize(windowWidth) {
    if (windowWidth <= 768) {
      this.refClassName.value = this.textSizes.sm
        || this.textSizes.md
        || this.textSizes.lg
        || this.textSizes.xl
        || this.textSizes.xxl
    }
    if (windowWidth > 768 && windowWidth <= 1024) {
      this.refClassName.value = this.textSizes.md
        || this.textSizes.lg
        || this.textSizes.xl
        || this.textSizes.xxl
    }
    if (windowWidth > 1024 && windowWidth <= 1200) {
      this.refClassName.value = this.textSizes.lg
        || this.textSizes.xl
        || this.textSizes.xxl
    }
    if (windowWidth > 1200 && windowWidth <= 1440) {
      this.refClassName.value = this.textSizes.xl
        || this.textSizes.xxl
    }
    if (windowWidth > 1440) {
      this.refClassName.value = this.textSizes.xxl
    }
  }
}
