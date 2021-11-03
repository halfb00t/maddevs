import { shallowMount } from '@vue/test-utils'
import LottieMad from '@/components/shared/LottieMad'
import '../../__mocks__/intersectionObserverMock'

const propsData = {
  height: '100%',

  width: '100%',

  lottieLink: 'https://d6xkme6dcvajw.cloudfront.net/images/Cases/citycam/lottie/about-citycam.json',

  autoplay: true,
}

describe('LottieMad component', () => {
  it('should render correctly', () => {
    const wrapper = shallowMount(LottieMad, {
      propsData,
    })

    const lottieContainer = wrapper.find('div').element
    expect(lottieContainer.getAttribute('style')).toBe('--height: 100%; --width: 100%;')
    expect(wrapper).toMatchSnapshot()
  })
})
