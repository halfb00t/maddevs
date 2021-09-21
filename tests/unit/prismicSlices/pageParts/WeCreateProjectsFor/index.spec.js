import { shallowMount } from '@vue/test-utils'
import { render, screen } from '@testing-library/vue'
import WeCreateProjectsFor from '@/prismicSlices/pageParts/WeCreateProjectsFor'

const backgrounds = {
  white: '#ffffff',
  black: '#111213',
  grey: '#f5f7f9',
}

const data = () => ({
  countries: [
    'usa',
    'australia',
  ],
  industriesEntries: [
    ['Content Streaming', 'Transportation'],
    ['E-Commerce', 'AdTech'],
    ['E-Learning', 'FinTech'],
  ],
})

const apiData = {
  background: 'black',
  animation: 'fade-up',
}

const getProps = params => ({
  slice: {
    primary: {
      ...params,
    },
  },
})

describe('WeCreateProjectsFor slice', () => {
  it('should render correctly with data', () => {
    const { container } = render(WeCreateProjectsFor, {
      data,
      props: getProps(apiData),
    })

    expect(screen.getAllByTestId('projects-list__item')).toHaveLength(data().industriesEntries.length)
    expect(screen.getAllByTestId('flags-list__item')).toHaveLength(data().countries.length)
    expect(container).toMatchSnapshot()
  })

  it('should render correctly without data', () => {
    const { container } = render(WeCreateProjectsFor, {
      data: () => ({
        countries: [],
        industriesEntries: [],
      }),
      props: getProps({}),
    })

    expect(screen.queryByTestId('projects-list__item')).toBeNull()
    expect(screen.queryByTestId('flags-list__item')).toBeNull()
    expect(container).toMatchSnapshot()
  })

  describe('data-aos animation attribute', () => {
    it(`should be '${apiData.animation}'`, () => {
      render(WeCreateProjectsFor, {
        data,
        props: getProps(apiData),
      })

      expect(screen.getByTestId('create-projects-slice__content').getAttribute('data-aos')).toBe(apiData.animation)
    })

    it('should be null', () => {
      render(WeCreateProjectsFor, {
        data,
        props: getProps({}),
      })

      expect(screen.getByTestId('create-projects-slice__content').getAttribute('data-aos')).toBeNull()
    })
  })

  describe('sliceBackground computed method', () => {
    it(`should return ${backgrounds.white} (white)`, () => {
      const wrapper = shallowMount(WeCreateProjectsFor, {
        propsData: getProps({
          ...apiData,
          background: 'white',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.white)
    })

    it(`should return ${backgrounds.grey} (grey)`, () => {
      const wrapper = shallowMount(WeCreateProjectsFor, {
        propsData: getProps({
          ...apiData,
          background: 'grey',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.grey)
    })

    it(`should return ${backgrounds.black} (black)`, () => {
      const wrapper = shallowMount(WeCreateProjectsFor, {
        propsData: getProps({
          ...apiData,
          background: 'black',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.black)
    })

    it('should return null', () => {
      const wrapper = shallowMount(WeCreateProjectsFor, {
        propsData: getProps({
          ...apiData,
          background: 'unknown',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBeNull()
    })
  })
})
