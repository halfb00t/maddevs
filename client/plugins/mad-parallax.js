import Vue from 'vue'

Vue.directive('mad-parallax', {
  bind(el, binding) {
    const options = {
      speed: binding.value?.speed || 0.1,
    }
    const elem = el
    const parentHeight = elem.parentElement.getBoundingClientRect().height
    const pxToMove = parentHeight - elem.getBoundingClientRect().height
    window.addEventListener('scroll', () => {
      const y = window.innerHeight - (elem.getBoundingClientRect().top + (elem.getBoundingClientRect().height / 2))
      elem.style.transition = `transform ${options.speed}s ease-out`
      if (y < 0) {
        elem.style.transform = 'translateY(0px)'
      } else if (y + pxToMove + parentHeight < window.scrollY) {
        elem.style.transform = `translateY(${pxToMove}px)`
      }
      if (y >= 0 && y <= pxToMove) {
        elem.style.transform = `translateY(${y}px)`
      }
    })
  },
})
