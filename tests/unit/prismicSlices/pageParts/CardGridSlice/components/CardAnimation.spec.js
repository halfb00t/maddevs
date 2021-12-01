import { render } from '@testing-library/vue'
import LottieCard from '@/prismicSlices/pageParts/GridLottieSlice/components/LottieCard'
import '../../../../__mocks__/intersectionObserverMock'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

jest.mock('uuid')

const stubs = ['lottieOptions']

const props = {
  animationData: 'android-app',
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
      const { container } = render(LottieCard, {
        props,
        stubs,
        computed,
        mocks,
      })
      expect(container).toMatchSnapshot()
    })
  })
})
