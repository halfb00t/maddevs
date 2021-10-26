import { render, fireEvent, screen } from '@testing-library/vue'
import ImageSlice from '@/prismicSlices/pageParts/ImageSlice'

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

describe('ImageSlice component', () => {
  it('should render correctly', async () => {
    const { container } = render(ImageSlice, {
      props,
    })

    const imageData = screen.getByTestId('test-picture-img')

    await fireEvent.load(imageData)

    expect(container).toMatchSnapshot()
  })
})
