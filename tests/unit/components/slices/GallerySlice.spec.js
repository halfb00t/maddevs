import { render } from '@testing-library/vue'
import GallerySlice from '@/components/slices/GallerySlice'

describe('galary slice component', () => {
  const props = {
    slice: {
      items: [
        {
          gallery_image: {
            Mobile: '',
          },
        },
      ],
      primary: {},
    },
  }
  it('is a Vue instance', () => {
    const { container } = render(GallerySlice, {
      props,
      stubs: ['PrismicImage'],
      mocks: {
        $prismic: {
          asText: name => name,
        },
      },
    })

    expect(container).toMatchSnapshot()
  })
})
