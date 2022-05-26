import { shallowMount } from '@vue/test-utils'
import UIBeforeAfterImage from '@/components/shared/UIBeforeAfterImage'
import 'regenerator-runtime'

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
const inputValue = 89

jest.spyOn(window, 'removeEventListener').mockImplementation()

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
    rangeInput.setValue(inputValue)
    rangeInput.trigger('input change')

    setTimeout(() => {
      expect(wrapper.find('.img-wrapper__compare-overlay').attributes().style).toBe(`width: ${inputValue}%;`)
    }, 0)
    expect(wrapper.vm.compareWidth).toBe(`${inputValue}`)
  })

  it('does not fire resize event by default', () => {
    expect(window.innerWidth).not.toBe(testWidth)
  })

  it('updates the window width', () => {
    window.innerWidth = testWidth
    window.dispatchEvent(new Event('resize'))

    expect(window.innerWidth).toBe(testWidth)
  })

  it('should call removeEventListener when component has destroyed', async () => {
    await wrapper.destroy()
    expect(window.removeEventListener).toHaveBeenCalledTimes(1)
  })
})
