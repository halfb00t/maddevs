import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import ModelCard from '@/components/DeliveryModels/shared/ModelCard'
import { cardClickEvent } from '@/analytics/events'

const props = {
  full: false,
  uid: 'uid',
  title: 'title',
  animationName: 'staff',
  startAnimationOnScreenPercent: 23,
}

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const stubs = ['NuxtLink']

jest.mock('~/helpers/generatorUid')
const sendEventMock = jest.spyOn(cardClickEvent, 'send').mockImplementation(() => {})

const animation = {
  setSpeed: jest.fn(),
  play: jest.fn(),
}

describe('ModelCard component', () => {
  it('should render correctly', () => {
    const { container } = render(ModelCard, {
      stubs,
      props,
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly click on card', () => {
    const wrapper = shallowMount(ModelCard, {
      stubs,
      propsData: props,
      mocks,
    })

    wrapper.vm.animCreatedHandler(animation)
    const link = wrapper.find('.model-card__link')
    link.trigger('click')
    expect(sendEventMock).toHaveBeenCalledTimes(1)
    expect(wrapper.vm.animation).toEqual(animation)
  })

  it('should correctly work handleCardAnimation', () => {
    const wrapper = shallowMount(ModelCard, {
      stubs,
      propsData: props,
      mocks,
    })

    const playAnimationMock = jest.spyOn(wrapper.vm, 'playAnimation')

    wrapper.vm.animCreatedHandler(animation)
    window.innerHeight = 100

    jest.spyOn(wrapper.vm.$refs.card, 'getBoundingClientRect').mockImplementation(() => ({ bottom: 20, top: 10, height: 30 }))
    wrapper.vm.handleCardAnimation()
    expect(playAnimationMock).toHaveBeenCalledTimes(1)
  })

  it('should correctly throw error when call playAnimation', () => {
    const wrapper = shallowMount(ModelCard, {
      stubs,
      propsData: props,
      mocks,
    })

    const playAnimationMock = jest.spyOn(wrapper.vm, 'playAnimation')

    delete animation.play
    wrapper.vm.animCreatedHandler(animation)
    window.innerHeight = 100

    jest.spyOn(wrapper.vm.$refs.card, 'getBoundingClientRect').mockImplementation(() => ({ bottom: 20, top: 10, height: 30 }))
    wrapper.vm.handleCardAnimation()
    expect(playAnimationMock).toHaveBeenCalledTimes(1)
  })
})
