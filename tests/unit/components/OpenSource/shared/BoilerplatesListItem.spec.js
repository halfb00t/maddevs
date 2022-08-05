import { render } from '@testing-library/vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import lazyLoad from 'nuxt-lazy-load/lib/module'
import BoilerplatesListItem from '@/components/OpenSource/shared/BoilerplatesListItem'
import { githubClickEvent } from '@/analytics/events'
import { githubClickPixelEvent } from '@/analytics/pixelEvents'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const props = {
  fullWidth: false,
  bottomPadding: true,
  logo: {
    name: 'logo name',
    alt: 'alt text',
    width: 23,
    height: 32,
  },
  title: 'title',
  description: 'description',
  link: 'link',
}

const directives = {
  'lazy-load': () => {},
}

jest.mock('~/helpers/generatorUid')

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

const githubClickEventMock = jest.spyOn(githubClickEvent, 'send')
  .mockImplementation(() => {
  })

const githubClickPixelEventMock = jest.spyOn(githubClickPixelEvent, 'send')
  .mockImplementation(() => {
  })

describe('BoilerplatesListItem component', () => {
  it('should render correctly', () => {
    const { container } = render(BoilerplatesListItem, {
      mocks,
      props,
      directives,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render correctly without data', () => {
    const { container } = render(BoilerplatesListItem, {
      mocks,
      directives,
    })
    expect(container).toMatchSnapshot()
  })

  it('should correctly send GA4 and pixel events', () => {
    props.fullWidth = true
    const wrapper = shallowMount(BoilerplatesListItem, {
      mocks,
      directives,
      propsData: props,
      localVue,
    })

    wrapper.find('.boilerplates-list__item-link').trigger('click')
    expect(githubClickEventMock).toHaveBeenCalledTimes(1)
    expect(githubClickPixelEventMock).toHaveBeenCalledTimes(1)
    expect(wrapper.vm.widthClass).toBe('boilerplates-list__item--full-width')
  })
})
