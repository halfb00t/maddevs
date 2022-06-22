import { render } from '@testing-library/vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import VueMeta from 'vue-meta'
import CasesList from '@/components/Cases/CasesList.vue'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'
import mainMixins from '@/mixins/mainMixins'

const stubs = ['CasesListItem', 'NuxtLink', 'LazyHydrate']

const props = {
  limit: 3,
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
localVue.use(VueMeta, { keyName: 'head' })
jest.mock('nuxt-lazy-load/lib/module')

Object.defineProperty(global, 'innerWidth', {
  value: 768,
})

describe('CasesList component', () => {
  it('should render correctly', () => {
    const { container } = render(CasesList, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render three cards', () => {
    const { getAllByTestId } = render(CasesList, {
      stubs,
      props,
    })

    expect(getAllByTestId('test-case-card')).toHaveLength(props.limit)
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

    const wrapper = shallowMount(CasesList, {
      stubs,
      props,
      mixins: [mainMixins],
    })

    jest.spyOn(wrapper.vm, 'MixinPlayVideo').mockImplementation()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should correctly dynamic import', async () => {
    const wrapper = shallowMount(CasesList, {
      props,
      mocks: {
        $getMediaFromS3: jest.fn(),
      },
      stubs: ['NuxtLink', 'LazyHydrate'],
      localVue,
      mixins: [mainMixins],
    })

    jest.spyOn(wrapper.vm, 'MixinPlayVideo').mockImplementation()

    const CasesListItem = await wrapper.vm.$options.components.CasesListItem.call()
    const headResult = wrapper.vm.$metaInfo
    const headExpected = {
      link: [
        {
          rel: 'preload',
          as: 'image',
          href: undefined,
        },
      ],
    }
    expect(headResult).toEqual(headExpected)
    expect(CasesListItem.default.name).toBeUndefined()
  })
})
