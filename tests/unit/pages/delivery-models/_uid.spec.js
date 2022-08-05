import { render } from '@testing-library/vue'
import { mount } from '@vue/test-utils'
import UID from '@/pages/delivery-models/_uid'

const stubs = ['Model']

describe('UID page', () => {
  global.$nuxt = {
    $route: {
      name: '/',
    },
  }

  it('should render correctly', () => {
    const { container } = render(UID, {
      stubs,
      mocks: {
        $lazyLoad: {
          init: () => {},
        },
      },
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly work asyncData', async () => {
    const wrapper = mount(UID, {
      stubs,
      mocks: {
        $lazyLoad: {
          init: () => {},
        },
      },
      data: () => ({
        uid: 'dedicated-team',
      }),
    })
    const result = wrapper.vm.$options.asyncData({ params: { uid: 'dedicated-team' } })
    const metaHead = wrapper.vm.$options.head.call(wrapper.vm)
    expect(metaHead.title).toBe('Dedicated Development Team | Mad Devs Delivery Models')
    expect(result.uid).toEqual('dedicated-team')
  })

  it('should correctly return error from asyncData', async () => {
    const wrapper = mount(UID, {
      stubs,
      mocks: {
        $lazyLoad: {
          init: () => {},
        },
      },
    })

    const errorMessage = {
      statusCode: 404,
      message: 'Page not found',
    }

    const result = wrapper.vm.$options.asyncData({ params: { uid: 'test' }, error: jest.fn(() => errorMessage) })
    expect(result).toEqual(errorMessage)
  })
})
