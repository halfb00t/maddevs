/* eslint-disable */
import { ref, watch, reactive } from '@vue/composition-api'
import useWindowSize from '@/components/strapi/common/windowSize'

export function useTextSize(textSizes) {
  const currentScreenSize = useWindowSize()
  const textSizeClassName = ref('')

  /**
   * used bootstrap 5 grid system
   *
   * current / old
   * strapi / prismic
   * xxl = ['size-xl']
   * xl = ['size-lg']
   * lg = ['size-md']
   * md = ['size-sm']
   * sm = ['size-xs']
   * **/
  function getTextSize(currentScreenSize) {
    const windowWidth = currentScreenSize.x.value
    if (windowWidth <= 768) {
      textSizeClassName.value = textSizes.sm
        || textSizes.md
        || textSizes.lg
        || textSizes.xl
        || textSizes.xxl
    } if (windowWidth > 768 && windowWidth <= 1024) {
      textSizeClassName.value = textSizes.md
        || textSizes.lg
        || textSizes.xl
        || textSizes.xxl
    } if (windowWidth > 1024 && windowWidth <= 1200) {
      textSizeClassName.value = textSizes.lg
        || textSizes.xl
        || textSizes.xxl
    } if (windowWidth > 1200 && windowWidth <= 1440) {
      textSizeClassName.value = textSizes.xl
        || textSizes.xxl
    } if (windowWidth > 1440) {
      textSizeClassName.value = textSizes.xxl
    }
  }

  watch(() => currentScreenSize,
    (newSize, oldSize) => {
      getTextSize(newSize)
    }, { deep: true })

  getTextSize(currentScreenSize)

  return { textSizeClassName }
}

export default useTextSize
