import { ref, watch } from '@vue/composition-api'
import useWindowSize from '@/components/strapi/common/windowSize'

export function useTextSize() {
  const currentScreenSize = reactive(useWindowSize())
  const textSize = ref('')

  function getTextSize(screenSize) {
    if (screenSize.x <= 333) {
      return 'nice-size'
    }
    return 'fail-size-string'
  }

  watch(currentScreenSize.x,
    (newSize, oldSize) => {
      console.log('watch', newSize, oldSize)
      getTextSize(newSize)
    }) // { deep: true }

  // eslint-disable-next-line
  debugger

  return { textSize }
}

export default useTextSize
