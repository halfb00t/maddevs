import { shallowMount } from '@vue/test-utils'
import UIBeforeAfterImage from '@/components/shared/UIBeforeAfterImage'

const directives = {
  'lazy-load': () => {},
}

const props = {
  afterImage: 'img.jpg',
  beforeImage: 'img.jpg',
  value: 50,
  step: 0.1,
}

const spy = jest.fn()
const testWidth = 420

describe('UIBeforeAfterImage component', () => {
  let wrapper

  beforeAll(() => {
    window.addEventListener('resize', spy)
  })

  beforeEach(() => {
    wrapper = shallowMount(UIBeforeAfterImage, {
      directives,
      propsData: props,
    })
  })

  afterEach(() => {
    wrapper = null
  })

  it('should render correctly with images', () => {
    expect(wrapper.props()).toEqual(props)
    expect(wrapper.is(UIBeforeAfterImage)).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })

  it('the compareWidth should correctly react to change value of the input', () => {
    const rangeInput = wrapper.find('.img-wrapper__compare-range')
    rangeInput.setValue(89)
    rangeInput.trigger('input change')

    expect(wrapper.vm.compareWidth).toBe('89')
    expect(wrapper).toMatchSnapshot()
  })

  it('does not fire resize event by default', () => {
    expect(spy).not.toHaveBeenCalled()
    expect(window.innerWidth).not.toBe(testWidth)
  })

  it('updates the window width', () => {
    window.innerWidth = testWidth
    window.dispatchEvent(new Event('resize'))

    expect(spy).toHaveBeenCalledTimes(1)
    expect(window.innerWidth).toBe(testWidth)
  })
})
