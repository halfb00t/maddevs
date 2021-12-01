import { render } from '@testing-library/vue'
import CardAnimation from '@/prismicSlices/pageParts/CardGridSlice/components/CardAnimation'
import '../../../../__mocks__/intersectionObserverMock'

jest.mock('uuid')

const stubs = ['lottieOptions']

const props = {
  animationData: 'android-app',
}

const mocks = {
  $getMediaFromS3: image => image,
}

const computed = {
  lottieOptions: () => ({
    animationData: 'test',
    autoplay: false,
    loop: false,
  }),
}

describe('LottieCard', () => {
  describe('LottieCard with items', () => {
    it('should render correctly with data', () => {
      const { container } = render(CardAnimation, {
        props,
        stubs,
        computed,
        mocks,
      })
      expect(container).toMatchSnapshot()
    })
  })
})
