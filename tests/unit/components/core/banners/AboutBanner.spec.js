import { render, screen } from '@testing-library/vue'
import AboutBanner from '@/components/core/banners/AboutBanner'

describe('AboutBanner', () => {
  global.$nuxt = {
    $route: {
      name: '/',
    },
  }

  it('should render correctly', () => {
    const { container } = render(AboutBanner, {
      stubs: ['NuxtLink'],
    })

    expect(screen.getByText('Mad Devs')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
