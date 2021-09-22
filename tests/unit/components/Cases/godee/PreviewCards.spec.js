import { render } from '@testing-library/vue'
import PreviewCards from '@/components/Cases/godee/PreviewCards.vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('PreviewCards component', () => {
  it('should render correctly', () => {
    const { container } = render(PreviewCards, {
      mocks,
      stubs: ['Picture'],
    })

    expect(container).toMatchSnapshot()
  })
})
