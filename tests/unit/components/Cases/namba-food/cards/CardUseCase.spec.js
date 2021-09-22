import { render, screen } from '@testing-library/vue'
import CardUseCase from '@/components/Cases/nambafood/cards/CardUseCase.vue'

const props = {
  title: 'some-title',
  description: 'some-description',
  pictureFolder: '',
  fileName: 'some-filename',
  fileExtension: 'png',
  alt: 'alt',
}

const stubs = ['Picture', 'ClientOnly']

describe('CardUseCase component', () => {
  it('should render correctly', () => {
    const { container } = render(CardUseCase, {
      props,
      stubs,
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly render classname', () => {
    const classList = {
      uniqueСlass: 'uniqueСlass',
    }
    const { html } = render(CardUseCase, {
      props: {
        ...props,
        classList,
      },
      stubs,
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
    })

    expect(screen.getByText(props.title)).toBeTruthy()
    expect(html()).toContain(`card-use-case__${classList.uniqueСlass}-title`)
  })
})
