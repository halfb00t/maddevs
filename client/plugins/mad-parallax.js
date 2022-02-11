import Vue from 'vue'

const setCustomProperties = (elem, options, elemInToView, parentHeight) => {
  let maxMove = options.maxMove || elem.getBoundingClientRect().height
  let scrollAnimation = elemInToView
  if (options.reverse) {
    scrollAnimation = -elemInToView
    if (Math.sign(maxMove) !== -1) {
      maxMove = -maxMove
    }
  }
  if (elemInToView < 0) {
    elem.style.transform = `translate${options.direction.toUpperCase()}(0px)`
  } else if (elemInToView + Math.abs(maxMove) + parentHeight < window.scrollY) {
    elem.style.transform = `translate${options.direction.toUpperCase()}(${maxMove}px)`
  }
  if (elemInToView >= 0 && elemInToView <= Math.abs(maxMove)) {
    elem.style.transform = `translate${options.direction.toUpperCase()}(${scrollAnimation}px)`
  }
}

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
        elem.style.transform = 'translateY(0px)'
      } else if (elemInToView + pxToMove + parentHeight < window.scrollY) {
        elem.style.transform = `translateY(${pxToMove}px)`
      }
      if (elemInToView >= 0 && elemInToView <= pxToMove) {
        elem.style.transform = `translateY(${elemInToView}px)`
      }
    } else {
      setCustomProperties(elem, options, elemInToView, parentHeight)
    }
  }
}

const checkIsMobileSize = (elem, options) => {
  if (window.innerWidth <= options.mobileSize) {
    elem.style.transform = `translate${options.direction.toUpperCase()}(0px)`
    // eslint-disable-next-line no-use-before-define
    window.removeEventListener('scroll', onScroll)
  } else {
    // eslint-disable-next-line no-use-before-define
    window.addEventListener('scroll', onScroll)
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
      onResize()
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
