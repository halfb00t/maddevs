import { render } from '@testing-library/vue'
import CaseStudies from '@/components/core/CaseStudies'

const stubs = ['NuxtLink', 'CasesListItem']

describe('CaseStudies', () => {
  const props = {
    type: 'index',
  }

  it('should render correctly', () => {
    const { container } = render(CaseStudies, {
      stubs,
      props,
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
    })

    expect(container).toMatchSnapshot()
  })
})
