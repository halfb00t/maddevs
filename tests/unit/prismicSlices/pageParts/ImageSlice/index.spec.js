import { render, fireEvent, screen } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import ImageSlice from '@/prismicSlices/pageParts/ImageSlice'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const props = {
  slice: {
    primary: {
      image: {
        url: '../../../../client/assets/img/Home/jpg/experts/Alice.jpg',
        alt: 'image',
      },
    },
  },
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('ImageSlice component', () => {
  it('should render correctly', async () => {
    const { container } = render(ImageSlice, {
      props,
      localVue,
    })

    const imageData = screen.getByTestId('test-picture-img')

    await fireEvent.load(imageData)

    expect(container).toMatchSnapshot()
  })
})
