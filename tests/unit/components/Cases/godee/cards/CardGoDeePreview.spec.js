import { render, screen } from '@testing-library/vue'
import CardGoDeePreview from '@/components/Cases/godee/cards/CardGoDeePreview.vue'

const props = {
  title: 'some-title',
  description: 'some-description',
  fileName: 'some-filename',
  pictureFolder: '',
  fileExtension: 'png',
  alt: 'godee',
  className: 'some-class',
  mobileImage: true,
  mobileImageName: 'mobile-image',
  width: 50,
  height: 50,
}

const stubs = ['Picture']

describe('CardGoDeePreview component', () => {
  it('should render correctly', () => {
    const { container } = render(CardGoDeePreview, {
      props,
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly render classname', () => {
    const { html } = render(CardGoDeePreview, {
      props,
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
      stubs,
    })

    expect(screen.getByText(props.title)).toBeTruthy()
    expect(html()).toContain(`card-content_${props.className}`)
  })
})
