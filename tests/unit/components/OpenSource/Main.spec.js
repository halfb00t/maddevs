import { render } from '@testing-library/vue'
import Main from '@/components/OpenSource/Main'

const stubs = ['Banner', 'ParagraphSection', 'FeaturedProjects', 'Boilerplates', 'CTABanner']

describe('Main component', () => {
  it('should render correctly', () => {
    const { container } = render(Main, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
