import { render } from '@testing-library/vue'
import FooterStaticNavigations from '@/components/core/Footer/FooterStaticNavigations'

const directives = { 'lazy-load': jest.fn() }
const stubs = ['NuxtLink']
describe('FooterNavbarColumn', () => {
  it('Should correct render footer static navigation in footer', () => {
    const { container } = render(FooterStaticNavigations, { directives, stubs })
    expect(container)
      .toMatchSnapshot()
  })
})
