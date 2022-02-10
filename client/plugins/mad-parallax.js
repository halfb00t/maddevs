import Vue from 'vue'

const parallaxScrollHandler = (elem, options) => {
  if (elem.target !== document) {
    const elemInToView = window.innerHeight - (
      elem?.getBoundingClientRect().top + (elem?.getBoundingClientRect().height / options.startPoint)
    )
    const parentHeight = elem?.parentElement?.getBoundingClientRect().height
    elem.style.transition = `transform ${options.speed}s ease-out`
    if (!options.customMove) {
      const pxToMove = parentHeight - elem?.getBoundingClientRect().height
      if (elemInToView < 0) {
        elem.style.transform = `translate${options.direction.toUpperCase()}(0px)`
      } else if (elemInToView + pxToMove + parentHeight < window.scrollY) {
        elem.style.transform = `translate${options.direction.toUpperCase()}(${pxToMove}px)`
      }
      if (elemInToView >= 0 && elemInToView <= pxToMove) {
        elem.style.transform = `translate${options.direction.toUpperCase()}(${elemInToView}px)`
      }
    } else {
      if (elemInToView < 0) {
        elem.style.transform = `translate${options.direction.toUpperCase()}(0px)`
      } else if (elemInToView + options.maxMove + parentHeight < window.scrollY) {
        elem.style.transform = `translate${options.direction.toUpperCase()}(${options.maxMove}px)`
      }
      if (elemInToView >= 0 && elemInToView <= Math.abs(options.maxMove)) {
        if (options.reverse) {
          elem.style.transform = `translate${options.direction.toUpperCase()}(-${elemInToView}px)`
        }
      }
    }
  }
}

const checkIsMobileSize = (elem, options) => {
  if (window.innerWidth <= options.mobileSize) {
    elem.style.transform = `translate${options.direction.toUpperCase()}(0px)`
    window.removeEventListener('scroll', parallaxScrollHandler)
  } else {
    window.addEventListener('scroll', parallaxScrollHandler)
  }
}

let elems = []
let options = {}

const onScroll = () => {
  for (const elem of elems) {
    parallaxScrollHandler(elem.el, elem.options)
  }
}

const onResize = () => {
  for (const elem of elems) {
    checkIsMobileSize(elem.el, elem.options)
  }
}

Vue.directive('mad-parallax', {
  bind(el, binding) {
    options = {
      speed: binding.value?.speed || 0.1,
      direction: binding.value?.direction || 'y',
      mobileSize: binding.value?.mobileSize || 976,
      maxMove: binding.value?.maxMove || 0,
      reverse: binding.value?.reverse || false,
      customMove: binding.value?.customMove || false,
      startPoint: binding.value?.startPoint || 1.5,
      disabled: binding.value?.disabled || false,
    }
    if (!options.disabled) {
      if (options.reverse) {
        options.maxMove = -options.maxMove
      }
      if (binding.value?.setIndentTop) {
        el.style.position = 'relative'
        el.style.top = `${Math.abs(options.maxMove)}px`
      }
      if (elems.length === 0) {
        window.addEventListener('scroll', onScroll)
        window.addEventListener('resize', onResize)
      }
      elems.push({
        el,
        options,
      })
    }
  },
  unbind(el) {
    elems = elems.filter(element => element.el !== el)
    if (elems.length === 0) {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  },
})
