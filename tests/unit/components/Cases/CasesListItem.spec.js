import { render } from '@testing-library/vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import lazyLoad from 'nuxt-lazy-load'
import CasesListItem from '@/components/Cases/CasesListItem.vue'
import '../../__mocks__/intersectionObserverMock'
import mainMixins from '@/mixins/mainMixins'

const stubs = ['NuxtLink']

const mocks = {
  $getMediaFromS3: image => image,
  $refs: {
    video: {
      paused: false,
      pause: jest.fn(),
      play: jest.fn(() => new Promise((resolve, reject) => {
        reject()
      })),
      onended: jest.fn(),
    },
  },
}

const data = () => ({
  isMobile: false,
})

const directives = {
  'lazy-load': () => {},
}

const props = {
  videoFileName: 'test',
  title: 'test',
  subtitle: 'Test test',
  desc: 'test test',
  posterLink: '/test',
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('CasesListItem component', () => {
  it('should render correctly', () => {
    const { container } = render(CasesListItem, {
      stubs,
      mocks,
      data,
      directives,
      props,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly work play', () => {
    const wrapper = shallowMount(CasesListItem, {
      stubs,
      mocks,
      data,
      directives,
      localVue,
      mixins: [mainMixins],
    })

    const mockSpy = jest.spyOn(wrapper.vm, 'MixinPlayVideo').mockImplementation()
    const playMock = jest.spyOn(wrapper.vm.$refs.video, 'pause').mockImplementation()
    wrapper.vm.play()
    wrapper.vm.pause()
    expect(playMock).toHaveBeenCalledTimes(1)
    expect(mockSpy).toHaveBeenCalledTimes(1)
  })
})
