import {
  onMounted, onUnmounted, reactive, toRefs,
} from '@vue/composition-api'

export function useWindowSize() {
  const windowSize = reactive({
    x: 0,
    y: 0,
  })
  const resizeListener = () => {
    // eslint-disable-next-line
    debugger
    ({
      innerWidth: windowSize.x,
      innerHeight: windowSize.y,
    } = window)
  }
  onMounted(() => {
    // eslint-disable-next-line
    debugger
    window.addEventListener('resize', resizeListener)
  })

  onUnmounted(() => window.removeEventListener('resize', resizeListener))
  resizeListener()
  return toRefs(windowSize)
}

export default useWindowSize

// todo move common folder to oth location?
