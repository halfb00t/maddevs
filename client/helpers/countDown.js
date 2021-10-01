import { CountUp } from 'countup.js'

export default function countDown(entry, observer) {
  const { id } = entry.target
  const { endValue, startValue } = entry.target.dataset
  const animation = new CountUp(id, startValue, { startVal: endValue, duration: 3 })

  animation.start()
  observer.unobserve(entry.target)
}
