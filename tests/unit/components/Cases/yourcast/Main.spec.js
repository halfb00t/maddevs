import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import Main from '@/components/Cases/yourcast/Main'
import '../../../__mocks__/intersectionObserverMock'

const directives = {
  'lazy-load': () => {},
  'mad-parallax': () => {},
}

describe('Main component', () => {
  it('should render correctly', () => {
    const { container } = render(Main, {
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
      stubs: [
        'NuxtLink',
        'TextQuote',
        'Picture',
        'ListTechnologiesItem',
        'PhaseLiveStreamingTechnology',
        'LazyHydrate',
      ],
      directives,
    })
    expect(container).toMatchSnapshot()
  })

  describe('Dymanic imports Main', () => {
    beforeEach(() => {
      jest.resetModules()
    })
    it('should find text in dymanic imports AboutYourcast', async () => {
      const App = (await import('@/components/Cases/yourcast/AboutYourcast')).default
      const wrapper = shallowMount(App, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
      })

      expect(wrapper.find('.case_title_h2').exists()).toBe(true)
    })
    it('should find text in dymanic imports ProjectInNumbers', async () => {
      const App = (await import('@/components/Cases/yourcast/ProjectInNumbers')).default
      const wrapper = shallowMount(App, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
      })

      expect(wrapper.find('.case_title_h2').exists()).toBe(true)
    })
    it('should find text in dymanic imports SupportedGadgets', async () => {
      const App = (await import('@/components/Cases/yourcast/SupportedGadgets')).default
      const wrapper = shallowMount(App, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
      })

      expect(wrapper.find('.case_title_h2').exists()).toBe(true)
    })
    it('should find text in dymanic imports Technologies', async () => {
      const App = (await import('@/components/Cases/yourcast/Technologies')).default
      const wrapper = shallowMount(App, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
      })

      expect(wrapper.find('.case_title_h2').exists()).toBe(true)
    })
    it('should find text in dymanic imports KeyProjectMilestones', async () => {
      const App = (await import('@/components/Cases/yourcast/KeyProjectMilestones')).default
      const wrapper = shallowMount(App, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
      })

      expect(wrapper.find('.case_title_h2').exists()).toBe(true)
    })
    it('should find text in dymanic imports PhaseOnlineCinema', async () => {
      const App = (await import('@/components/Cases/yourcast/PhaseOnlineCinema')).default
      const wrapper = shallowMount(App, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
      })

      expect(wrapper.find('.case_title_h2').exists()).toBe(true)
    })
    it('should find text in dymanic imports PhaseLiveStreamingTechnology', async () => {
      const App = (await import('@/components/Cases/yourcast/PhaseLiveStreamingTechnology')).default
      const wrapper = shallowMount(App, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
      })

      expect(wrapper.find('.case_title_h2').exists()).toBe(true)
    })
    it('should find text in dymanic imports PhaseRedesignAndOptimisations', async () => {
      const App = (await import('@/components/Cases/yourcast/PhaseRedesignAndOptimisations')).default
      const wrapper = shallowMount(App, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
      })

      expect(wrapper.find('.case_title_h2').exists()).toBe(true)
    })
    it('should find text in dymanic imports PhaseVideoOnDemand', async () => {
      const App = (await import('@/components/Cases/yourcast/PhaseVideoOnDemand')).default
      const wrapper = shallowMount(App, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
      })

      expect(wrapper.find('.case_title_h2').exists()).toBe(true)
    })
    it('should find text in dymanic imports PhaseUserAuthorisation', async () => {
      const App = (await import('@/components/Cases/yourcast/PhaseUserAuthorisation')).default
      const wrapper = shallowMount(App, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
      })

      expect(wrapper.find('.case_title_h2').exists()).toBe(true)
    })
    it('should find text in dymanic imports WatchWhatYouLikeVideo', async () => {
      const App = (await import('@/components/Cases/yourcast/WatchWhatYouLikeVideo')).default
      const wrapper = shallowMount(App, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
      })

      expect(wrapper.find('.case_image-wrapp').exists()).toBe(true)
    })
    it('should find text in dymanic imports PlansForSimilarProjects', async () => {
      const App = (await import('@/components/Cases/yourcast/PlansForSimilarProjects')).default
      const wrapper = shallowMount(App, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
      })

      expect(wrapper.find('.case_title_h3').exists()).toBe(true)
    })
    it('should find text in dymanic imports Team', async () => {
      const App = (await import('@/components/Cases/yourcast/Team')).default
      const wrapper = shallowMount(App, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
      })

      expect(wrapper.find('.case_title_h2').exists()).toBe(true)
    })
  })
})
