import { render } from '@testing-library/vue'
import UISlider from '@/components/shared/UISlider'

const stubs = ['Swiper', 'SwiperSlide']

describe('UISlider component', () => {
  it('should render correctly', () => {
    const { container } = render(UISlider, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
