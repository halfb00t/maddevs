import { shallowMount } from '@vue/test-utils'
import { render, screen } from '@testing-library/vue'
import QuickProjectStart from '@/prismicSlices/pageParts/QuickProjectStart'

const directives = {
  'lazy-load': () => {},
}

const backgrounds = {
  white: '#ffffff',
  black: '#111213',
  grey: '#f5f7f9',
}

const data = () => ({
  steps: [
    {
      name: 'contact',
      description: 'Submit your project request or project idea to us.',
    },
    {
      name: 'analysis',
      description: 'We will contact you to clarify your project requirements.',
    },
  ],
})

const apiData = {
  background: 'black',
  colorTheme: 'white',
  animation: 'fade-up',
  title: 'Title',
}

const getProps = params => ({
  slice: {
    primary: {
      ...params,
    },
  },
})

describe('QuickProjectStart slice', () => {
  it('should render correctly with data', () => {
    const { container } = render(QuickProjectStart, {
      directives,
      data,
      props: getProps(apiData),
    })

    expect(screen.getAllByTestId('project-start')).toHaveLength(data().steps.length)
    expect(screen.getByText(apiData.title)).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should render correctly without data', () => {
    const { container } = render(QuickProjectStart, {
      directives,
      data: () => ({
        steps: [],
      }),
      props: getProps({}),
    })

    expect(screen.queryByTestId('project-start')).toBeNull()
    expect(screen.getByText('Quick Project Start')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('if call method "show" and ref modalOrderProjectFromUs exist, "show" method in ref modalOrderProjectFromUs call', async () => {
    const mockShow = jest.fn()
    const wrapper = shallowMount(QuickProjectStart, {
      directives,
      stubs: {
        ModalOrderProjectFromUs: {
          render(h) { return h('div') },
          methods: {
            show: mockShow,
          },
        },
      },
      data,
      propsData: getProps(apiData),
    })

    wrapper.vm.show()
    expect(mockShow).toHaveBeenCalledTimes(1)
  })

  describe('data-aos animation attribute', () => {
    it(`should be '${apiData.animation}'`, () => {
      render(QuickProjectStart, {
        directives,
        data,
        props: getProps(apiData),
      })

      expect(screen.getByTestId('project-start-slice__container').getAttribute('data-aos')).toBe(apiData.animation)
    })

    it('should be null', () => {
      render(QuickProjectStart, {
        directives,
        data,
        props: getProps({}),
      })

      expect(screen.getByTestId('project-start-slice__container').getAttribute('data-aos')).toBeNull()
    })
  })

  describe('sliceBackground computed method', () => {
    it(`should return ${backgrounds.white} (white)`, () => {
      const wrapper = shallowMount(QuickProjectStart, {
        directives,
        propsData: getProps({
          ...apiData,
          background: 'white',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.white)
    })

    it(`should return ${backgrounds.grey} (grey)`, () => {
      const wrapper = shallowMount(QuickProjectStart, {
        directives,
        propsData: getProps({
          ...apiData,
          background: 'grey',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.grey)
    })

    it(`should return ${backgrounds.black} (black)`, () => {
      const wrapper = shallowMount(QuickProjectStart, {
        directives,
        propsData: getProps({
          ...apiData,
          background: 'black',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.black)
    })

    it('should return null', () => {
      const wrapper = shallowMount(QuickProjectStart, {
        directives,
        propsData: getProps({
          ...apiData,
          background: 'unknown',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBeNull()
    })
  })

  describe('colorTheme computed method', () => {
    it('should return \'black\'', () => {
      const wrapper = shallowMount(QuickProjectStart, {
        directives,
        propsData: getProps({
          ...apiData,
          colorTheme: 'black',
        }),
      })

      expect(wrapper.vm.colorTheme).toBe('black')
    })

    it('should return \'white\'', () => {
      const wrapper = shallowMount(QuickProjectStart, {
        directives,
        propsData: getProps({
          ...apiData,
          colorTheme: null,
        }),
      })

      expect(wrapper.vm.colorTheme).toBe('white')
    })
  })
})
