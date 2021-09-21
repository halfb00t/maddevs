import { render } from '@testing-library/vue'
import ProjectsCountries from '@/components/Careers/ProjectsCountries'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
  $t: () => 'translated',
}

const stubs = ['UICustomersList', 'UIButton', 'NuxtLink']

const directives = {
  'lazy-load': () => {},
}

describe('ProjectsCountries component', () => {
  it('should render correctly', () => {
    const { container } = render(ProjectsCountries, {
      mocks,
      stubs,
      directives,
    })

    expect(container).toMatchSnapshot()
  })
})
