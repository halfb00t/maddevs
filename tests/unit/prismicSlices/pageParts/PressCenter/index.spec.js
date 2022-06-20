import { fireEvent, render, screen } from '@testing-library/vue'
import lazyLoad from 'nuxt-lazy-load'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import PressCenter from '@/prismicSlices/pageParts/PressCenter'
import { pressCenterClickEvent } from '@/analytics/events'

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')
const props = {
  slice: {
    primary: {
      title: 'test',
      description: 'test desc',
      date: new Date().toISOString(),
      link: {
        url: 'https://maddevs.io',
      },
      linkLabel: 'Test',
      image: {
        url: 'img.jpg',
        alt: 'Test',
      },
      linkedCompanyLogo: {
        url: 'img-logo.jpg',
        alt: 'Test logo',
      },
      animation: 'fade-up',
    },
    items: [
      {
        image: {
          url: 'img.jpg',
          alt: 'Test alt',
        },
        title: 'Test Test',
        description: 'Test description',
        link: {
          url: 'https://maddevs.co',
        },
        date: new Date().toISOString(),
        linkLabel: 'Test label',
        linkedCompanyLogo: {
          url: 'img-logo.jpg',
          alt: 'Test',
        },
      },
    ],
  },
}
jest.mock('~/helpers/generatorUid')
const pressCenterClick = jest.spyOn(pressCenterClickEvent, 'send')
  .mockImplementation(() => {
  })
describe('PressCenter component', () => {
  it('should correct render component', async () => {
    const { container } = render(PressCenter, {
      propsData: props,
      localVue,
    })
    const link = screen.getByTestId('press-center-link')
    await fireEvent.click(link)
    expect(pressCenterClick).toHaveBeenCalledTimes(1)
    expect(container).toMatchSnapshot()
  })
  it('should return empty object from slice props', () => {
    const wrapper = shallowMount(PressCenter, {
      propsData: props,
      localVue,
    })
    expect(wrapper.vm.$options.props.slice.default.call()).toEqual({})
  })
})
