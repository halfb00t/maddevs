import { render, screen } from '@testing-library/vue'
import GridLottieLink from '@/prismicSlices/pageParts/GridLottieSlice/variations/GridLottieLink'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
  $prismic: {
    asHtml: prop => prop,
  },
}

jest.mock('~/helpers/generatorUid')

const props = {
  items: [
    {
      content: '<p>First item content</p>',
      background: '#FFFFFF',
      alignText: 'center',
      'lottie-animation': 'about-consulting',
      'lottie-S3-path': 'custom/about/',
      lottiePosition: 'bottom',
      lottieHeight: '100px',
      link: {
        url: 'https://maddevs.io/',
      },
    },
    {
      content: '<p>second item content</p>',
      background: '#FFFFFF',
      alignText: 'center',
      'lottie-animation': 'about-consulting',
      'lottie-S3-path': 'custom/about/',
      lottiePosition: 'bottom',
      lottieHeight: '100px',
      link: {
        url: 'https://maddevs.io/',
      },
    },
    {
      content: '<p>third item content</p>',
      background: '#000000',
      alignText: 'center',
      'lottie-animation': 'about-consulting',
      'lottie-S3-path': 'custom/about/',
      lottiePosition: 'bottom',
      lottieHeight: '100px',
      link: {
        url: 'https://maddevs.io/',
      },
    },
  ],
}

describe('GridLottieLink - CardGridWithIcon variation', () => {
  it('should render correctly with data', () => {
    const { container } = render(GridLottieLink, {
      props,
      mocks,
    })
    expect(screen.getByText('First item content')).not.toBeNull()
    expect(screen.getByText('second item content')).not.toBeNull()
    expect(screen.getByText('third item content')).not.toBeNull()
    expect(screen.getAllByTestId('grid-lottie-animation-item')).toHaveLength(props.items.length)
    expect(container).toMatchSnapshot()
  })

  it('should render correctly without data', () => {
    const { container } = render(GridLottieLink, {
      props: {
        items: [],
      },
      mocks,
    })
    expect(container).toMatchSnapshot()
  })
})
