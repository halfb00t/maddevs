import { render, screen } from '@testing-library/vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import lazyLoad from 'nuxt-lazy-load/lib/module'
import CaseListSlice from '@/prismicSlices/pageParts/CaseListSlice'
import mainMixins from '@/mixins/mainMixins'
import '../../../__mocks__/intersectionObserverMock'

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

const stubs = ['CasesListItem', 'NuxtLink']

const apiData = {
  background: '#ffffff',
  animation: 'fade-up',
  items: [
    {
      title: 'grow e-business bandwidth',
      subtitle: 'syndicate B2C action-items',
      description: 'benchmark granular relationships',
      width: 'big',
      video: '/videos/veeqo-banner.mp4#t=1',
      poster: '/images/Cases/veeqo/svg/veeqo-banner-bg.svg',
      link: '/clients/case-studies/veeqo/',
      folder: 'veeqo',
      file: 'veeqo-logotype',
      logoWidth: '105',
      logoHeight: '23',
      alt: 'transition extensible methodologies',
    },
    {
      title: 'grow e-business bandwidth',
      subtitle: 'syndicate B2C action-items',
      description: 'benchmark granular relationships',
      width: 'big',
      video: '/videos/veeqo-banner.mp4#t=1',
      poster: '/images/Cases/veeqo/svg/veeqo-banner-bg.svg',
      link: '/clients/case-studies/veeqo/',
      folder: 'veeqo',
      file: 'veeqo-logotype',
      logoWidth: '105',
      logoHeight: '23',
      alt: 'transition extensible methodologies',
    },
  ],
}

const getProps = params => ({
  slice: {
    primary: {
      ...params,
    },
    items: [...params?.items],
  },
})

Object.defineProperty(global, 'innerWidth', {
  value: 768,
})

describe('CaseListSlice component', () => {
  it('should render correctly', () => {
    const { container } = render(CaseListSlice, {
      stubs,
      props: getProps(apiData),
    })

    expect(container).toMatchSnapshot()
  })

  it('should render three cards', () => {
    const { getAllByTestId } = render(CaseListSlice, {
      stubs,
      props: getProps(apiData),
    })

    expect(getAllByTestId('test-case-card')).toHaveLength(2)
  })

  describe('data-aos animation attribute', () => {
    it('should be fade-up', () => {
      render(CaseListSlice, {
        stubs,
        props: getProps(apiData),
      })

      expect(screen.getByTestId('test-case-container').getAttribute('data-aos')).toBe('fade-up')
    })

    it('should be null', () => {
      render(CaseListSlice, {
        stubs,
        props: getProps({ items: [] }),
      })

      expect(screen.getByTestId('test-case-container').getAttribute('data-aos')).toBeNull()
    })
  })

  describe('sliceBackground computed method', () => {
    it('should return #ffffff', () => {
      const wrapper = shallowMount(CaseListSlice, {
        stubs,
        propsData: getProps({
          ...apiData,
          background: 'white',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe('#ffffff')
    })

    it('should return null', () => {
      const wrapper = shallowMount(CaseListSlice, {
        stubs,
        propsData: getProps({
          ...apiData,
          background: 'unknown',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBeNull()
    })

    it('should correctly work autoplay', () => {
      const pause = () => ''
      const play = () => ''

      const containerToRender = document.createElement('div')
      containerToRender.setAttribute('class', 'cases-list_item-video')
      containerToRender.pause = pause
      containerToRender.play = play

      Object.defineProperty(document, 'querySelectorAll', {
        value: () => [containerToRender, containerToRender],
      })

      Object.defineProperty(global.window, 'IntersectionObserver', {
        writable: true,
        configurable: true,
        value: class IntersectionObserver {
          constructor(callback, options) {
            this.viewPort = options.root
            this.entries = [{ isIntersecting: true, target: containerToRender }]
            this.callback = callback
          }

          observe(target) {
            this.entries.push({ isIntersecting: false, target })
            this.callback(this.entries, this)
          }
        },
      })

      const wrapper = shallowMount(CaseListSlice, {
        stubs,
        propsData: getProps({
          ...apiData,
          background: 'unknown',
        }),
        localVue,
        mixins: [mainMixins],
      })

      jest.spyOn(wrapper.vm, 'MixinPlayVideo').mockImplementation()
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('should correctly dynamic import', async () => {
      const wrapper = shallowMount(CaseListSlice, {
        stubs: ['NuxtLink', 'LazyHydrate'],
        propsData: getProps({
          ...apiData,
          background: 'unknown',
        }),
        localVue,
        mixins: [mainMixins],
      })

      jest.spyOn(wrapper.vm, 'MixinPlayVideo').mockImplementation()
      expect(wrapper.vm.$options.props.slice.default.call()).toEqual({})
    })
  })
})
