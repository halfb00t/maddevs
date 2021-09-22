import { render, screen } from '@testing-library/vue'
import ServicesBanner from '@/components/core/banners/ServicesBanner'

describe('ServicesBanner', () => {
  global.$nuxt = {
    $route: {
      name: '/',
    },
  }

  it('should render correctly', () => {
    const { container } = render(ServicesBanner, {
      stubs: ['NuxtLink'],
    })

    expect(screen.getByText('IT Partner')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
