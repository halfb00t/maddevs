import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import Main from '@/components/Cases/sjmc/Main'

const directives = {
  'lazy-load': () => {},
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

    it('should find text in dymanic imports About', async () => {
      const App = (await import('@/components/Cases/sjmc/About')).default
      const wrapper = shallowMount(App, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
      })

      expect(wrapper.find('.container_regular').exists()).toBe(true)
    })

    it('should find text in dymanic imports Partnership', async () => {
      const App = (await import('@/components/Cases/sjmc/Partnership')).default
      const wrapper = shallowMount(App, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
      })

      expect(wrapper.find('.case_title_h2').exists()).toBe(true)
    })

    it('should find text in dymanic imports TheChallenges', async () => {
      const App = (await import('@/components/Cases/sjmc/TheChallenges')).default
      const wrapper = shallowMount(App, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
      })

      expect(wrapper.find('.case_title_h3').exists()).toBe(true)
    })

    it('should find text in dymanic imports Software', async () => {
      const App = (await import('@/components/Cases/sjmc/Software')).default
      const wrapper = shallowMount(App, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
      })

      expect(wrapper.find('.case_title_h2').exists()).toBe(true)
    })

    it('should find text in dymanic imports MobileApplications', async () => {
      const App = (await import('@/components/Cases/sjmc/MobileApplications')).default
      const wrapper = shallowMount(App, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
      })

      expect(wrapper.find('.case_title_h2').exists()).toBe(true)
    })

    it('should find text in dymanic imports Hardware', async () => {
      const App = (await import('@/components/Cases/sjmc/Hardware')).default
      const wrapper = shallowMount(App, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
      })

      expect(wrapper.find('.case_title_h3').exists()).toBe(true)
    })

    it('should find text in dymanic imports KeyGoals', async () => {
      const App = (await import('@/components/Cases/sjmc/KeyGoals')).default
      const wrapper = shallowMount(App, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
      })

      expect(wrapper.find('.case_title_h2').exists()).toBe(true)
    })

    it('should find text in dymanic imports Technologies', async () => {
      const App = (await import('@/components/Cases/sjmc/Technologies')).default
      const wrapper = shallowMount(App, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
      })

      expect(wrapper.find('.case_title_h3').exists()).toBe(true)
    })

    it('should find text in dymanic imports Office', async () => {
      const App = (await import('@/components/Cases/sjmc/Office')).default
      const wrapper = shallowMount(App, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
      })

      expect(wrapper.find('.case_title_h3').exists()).toBe(true)
    })

    it('should find text in dymanic imports TeamIssues', async () => {
      const App = (await import('@/components/Cases/sjmc/TeamIssues')).default
      const wrapper = shallowMount(App, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
      })

      expect(wrapper.find('.case_title_h3').exists()).toBe(true)
    })

    it('should find text in dymanic imports SystemMonitoring', async () => {
      const App = (await import('@/components/Cases/sjmc/SystemMonitoring')).default
      const wrapper = shallowMount(App, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
      })

      expect(wrapper.find('.case_title_h2').exists()).toBe(true)
    })

    it('should find text in dymanic imports AutomatedTesting', async () => {
      const App = (await import('@/components/Cases/sjmc/AutomatedTesting')).default
      const wrapper = shallowMount(App, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
      })

      expect(wrapper.find('.case_title_h2').exists()).toBe(true)
    })

    it('should find text in dymanic imports Trip', async () => {
      const App = (await import('@/components/Cases/sjmc/Trip')).default
      const wrapper = shallowMount(App, {
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
        directives,
      })

      expect(wrapper.find('.case_title_h2').exists()).toBe(true)
    })

    it('should find text in dymanic imports OngoingPartnership', async () => {
      const App = (await import('@/components/Cases/sjmc/OngoingPartnership')).default
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
