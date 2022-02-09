import Vue from 'vue'

Vue.directive('s-parallax', {
  bind(el) {
    const elem = el
    const parentHeight = elem.parentElement.getBoundingClientRect().height
    const pxToMove = parentHeight - elem.getBoundingClientRect().height
    window.addEventListener('scroll', () => {
      const y = window.innerHeight - (elem.getBoundingClientRect().top + (elem.getBoundingClientRect().height / 2))
      if (y < 0) {
        elem.style.transition = 'transform 0.1s ease-out'
        elem.style.transform = 'translateY(0px)'
      } else if (y + pxToMove + parentHeight < window.scrollY) {
        elem.style.transition = 'transform 0.1s ease-out'
        elem.style.transform = `translateY(${pxToMove}px)`
      }
      if (y >= 0 && y <= pxToMove) {
        elem.style.transition = 'transform 0.1s ease-out'
        elem.style.transform = `translateY(${y}px)`
      }
    })
  },
})
