import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import MainGdpr from '@/pages/gdpr'

const stubs = ['LazyHydrate']

const META_DATA = {
  description: 'Mad Devs is committed to complying with the data protection and privacy rules in the EU General Data Protection Regulation (GDPR).',
  'og:url': 'https://maddevs.io/gdpr/',
  'og:type': 'website',
  'og:site_name': 'Custom Software Development Company',
  'og:title': 'Mad Devs GDPR Compliance',
  'og:description': 'Mad Devs is committed to complying with the data protection and privacy rules in the EU General Data Protection Regulation (GDPR).',
  'og:image': 'https://maddevs.io/Open-Graph.png',
  'og:image:width': '1200',
  'og:image:height': '630',
  'twitter:card': 'summary_large_image',
  'twitter:text:title': 'Mad Devs GDPR Compliance',
  'twitter:description': 'Mad Devs is committed to complying with the data protection and privacy rules in the EU General Data Protection Regulation (GDPR).',
  'twitter:image:src': 'https://maddevs.io/Open-Graph.png',
  'twitter:url': 'https://maddevs.io/gdpr/',
}

describe('Gdpr page', () => {
  it('should render correctly', () => {
    const { container } = render(MainGdpr, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct work head method', () => {
    const wrapper = shallowMount(MainGdpr, {
      stubs,
    })

    const actual = wrapper.vm.$options.head.call(wrapper.vm)

    expect(actual.meta).toHaveLength(Object.keys(META_DATA).length)
    actual.meta.forEach(meta => {
      expect(META_DATA[meta.name] || META_DATA[meta.property]).toBe(meta.content)
    })
  })

  describe('Dynamic imports MainGdpr component Main', () => {
    it('should correctly import components', async () => {
      const container = shallowMount(MainGdpr, {
        stubs,
      })

      const GDPR = await container.vm.$options.components.GDPR.call()

      expect(GDPR.default.name).toBe('GDPR')
    })
  })
})
