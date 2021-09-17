import { render } from '@testing-library/vue'
import TextQuoteAuthor from '@/components/Cases/shared/TextQuoteAuthor'

const props = {
  authorName: 'Author name',
  authorPosition: 'Author position',
  pictureFolder: 'nambafood',
  fileName: 'apple-iphone-xr-silver',
  fileExtension: 'png',
  alt: 'alt',
}

const slots = {
  default: 'Main Content',
}

const stubs = ['Picture']

describe('TextQuoteAuthor component', () => {
  it('should render correctly', () => {
    const { container } = render(TextQuoteAuthor, {
      slots,
      props,
      stubs,
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
    })

    expect(container).toMatchSnapshot()
  })

  it('Should correct display author name', () => {
    const { html } = render(TextQuoteAuthor, {
      slots,
      props,
      stubs,
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
    })

    expect(html()).toContain(props.authorName)
  })
})
