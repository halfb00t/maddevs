import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import MainFaq from '@/pages/faq'

const stubs = ['LazyHydrate']

const META_DATA = {
  description: 'FAQs. Have a question? Find answers on our Frequently asked questions page. Discover more about Mad Devs\' team, expertise, pricing, and more.',
  'og:url': 'https://maddevs.io/faq/',
  'og:type': 'website',
  'og:site_name': 'Custom Software Development Company',
  'og:title': 'Mad Devs: Frequently Asked Questions',
  'og:description': 'FAQs. Have a question? Find answers on our Frequently asked questions page. Discover more about Mad Devs\' team, expertise, pricing, and more.',
  'og:image': 'https://maddevs.io/Open-Graph.png',
  'og:image:width': '1200',
  'og:image:height': '630',
  'twitter:card': 'summary_large_image',
  'twitter:text:title': 'Mad Devs: Frequently Asked Questions',
  'twitter:description': 'FAQs. Have a question? Find answers on our Frequently asked questions page. Discover more about Mad Devs\' team, expertise, pricing, and more.',
  'twitter:image:src': 'https://maddevs.io/Open-Graph.png',
  'twitter:url': 'https://maddevs.io/faq/',
}

describe('FAQ page', () => {
  it('should render correctly', async () => {
    const { container } = render(MainFaq, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct work head method', () => {
    const wrapper = shallowMount(MainFaq, {
      stubs,
    })

    const actual = wrapper.vm.$options.head.call(wrapper.vm)

    expect(actual.meta).toHaveLength(Object.keys(META_DATA).length)
    actual.meta.forEach(meta => {
      expect(META_DATA[meta.name] || META_DATA[meta.property]).toBe(meta.content)
    })
  })

  describe('Dynamic imports MainFaq component FAQ', () => {
    it('should correctly import component', async () => {
      const container = shallowMount(MainFaq, {
        stubs,
      })
      const FAQ = await container.vm.$options.components.FAQ.call()

      expect(FAQ.default.name).toBe('FAQ')
    })
  })
})
