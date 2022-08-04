import {
  onMounted, onUnmounted, reactive, toRefs,
} from '@vue/composition-api'

export default function useResize(instance) {
  const windowSize = reactive({
    x: 0,
    y: 0,
  })
  const resizeListener = () => {
    windowSize.x = window.innerWidth
    windowSize.y = window.innerHeight
    instance.handleResize(window.innerWidth)
  }
  onMounted(() => {
    window.addEventListener('resize', resizeListener)
  })

  onUnmounted(() => window.removeEventListener('resize', resizeListener))
  resizeListener()
  return toRefs(windowSize)
}
