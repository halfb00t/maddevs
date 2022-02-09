import Vue from 'vue'

Vue.directive('mad-parallax', {
  bind(el, binding) {
    const options = {
      speed: binding.value?.speed || 0.1,
    }
    const elem = el
    const mobileSize = 976
    const parallaxScrollHander = () => {
      const parentHeight = elem.parentElement.getBoundingClientRect().height
      const pxToMove = parentHeight - elem.getBoundingClientRect().height
      const elemInToView = window.innerHeight - (
        elem.getBoundingClientRect().top + (elem.getBoundingClientRect().height / 2)
      )
      elem.style.transition = `transform ${options.speed}s ease-out`
      if (elemInToView < 0) {
        elem.style.transform = 'translateY(0px)'
      } else if (elemInToView + pxToMove + parentHeight < window.scrollY) {
        elem.style.transform = `translateY(${pxToMove}px)`
      }
      if (elemInToView >= 0 && elemInToView <= pxToMove) {
        elem.style.transform = `translateY(${elemInToView}px)`
      }
    }
    window.addEventListener('scroll', parallaxScrollHander)
    window.addEventListener('resize', () => {
      if (window.innerWidth <= mobileSize) {
        elem.style.transform = 'translateY(0px)'
        window.removeEventListener('scroll', parallaxScrollHander)
      } else {
        window.addEventListener('scroll', parallaxScrollHander)
      }
    })
  },
})
