import 'regenerator-runtime'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuelidate from 'vuelidate'
import { render, screen } from '@testing-library/vue'
import Footer from '@/components/core/Footer/Footer'

const localVue = createLocalVue()

localVue.use(Vuelidate)

const ROUTE = {
  name: '/home',
  path: '/home',
}

const TEST_ID = 'test-footer'
const updateClassName = jest.fn()

const stubs = ['NuxtLink', 'FooterContacts', 'FooterSocialNetworks']

describe('Footer component', () => {
  global.$nuxt = {
    $route: ROUTE,
  }

  it('should render correctly', () => {
    const { container } = render(Footer, {
      localVue,
      stubs,
      $nuxt: {
        $route: ROUTE,
      },
    })

    expect(container).toMatchSnapshot()
  })

  it('correctly sets the route when mounted', async () => {
    await render(Footer, {
      localVue,
      stubs,
    })

    const element = await screen.getByTestId('test-footer')
    expect(element.className).toBe(`footer ${ROUTE.name}`)
  })

  it('correctly call update class function from watcher', () => {
    const wrapper = shallowMount(Footer, {
      localVue,
      stubs,
    })

    wrapper.vm.$options.watch.$route.call({
      updateClassName,
    })

    expect(updateClassName).toHaveBeenCalledTimes(1)
  })

  it('should correctly with empty route', async () => {
    global.$nuxt = {
      $route: {
      },
    }
    await render(Footer, {
      localVue,
      stubs,
    })

    const element = await screen.getByTestId(TEST_ID)
    expect(element.className).toBe('footer ')
  })
})
