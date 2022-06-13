import { render, screen } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import Common from '@/components/Blog/header/Common'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const props = {
  title: 'some title',
  coverImageUrl: 'some-url.jpg',
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

const IMAGE_JPG_CLASS = 'blog-post__introduction-image--with-background'

describe('header Common', () => {
  it('is a Vue instance', () => {
    const { container, html } = render(Common, {
      props,
      localVue,
      stubs: ['NuxtLink'],
    })

    expect(screen.getByText(props.title)).not.toBeNull()
    expect(html()).toContain(IMAGE_JPG_CLASS)
    expect(container).toMatchSnapshot()
  })

  it('is a Vue instance with another image format', () => {
    const { html } = render(Common, {
      props: {
        title: 'some title',
        coverImageUrl: 'some-url.gif',
      },
      stubs: ['NuxtLink'],
      localVue,
    })

    expect(html()).not.toContain(IMAGE_JPG_CLASS)
  })
})
