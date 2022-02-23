import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import Main from '@/components/Cases/peklo/Main'

const stubs = ['About',
  'BenefitsFromPekloTool',
  'HowPekloToolWorks',
  'KeywordGrouping',
  'ClusterisationAlgorithm',
  'PekloToolUnderTheHood',
  'Technologies',
  'Team',
  'LazyHydrate',
]

describe('Main component', () => {
  it('should render correctly', () => {
    const { container } = render(Main, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
  describe('Dymanic imports', () => {
    beforeEach(() => {
      jest.resetModules()
    })
    it('should find text in dymanic imports', async () => {
      const App = (await import('@/components/Cases/peklo/BenefitsFromPekloTool')).default
      const wrapper = shallowMount(App)

      expect(wrapper.find('.case_title_h2').exists()).toBe(true)
    })
  })
})
