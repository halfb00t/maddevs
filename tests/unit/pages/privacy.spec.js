import { render, screen } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import MainPrivacy from '@/pages/privacy'

const META_DATA = {
  description: 'Mad Devs Privacy Policy: Website Acceptable Use Terms. We respect your privacy and are committed to protecting your personal information.',
  'og:url': 'https://maddevs.io/privacy/',
  'og:type': 'website',
  'og:site_name': 'Custom Software Development Company',
  'og:title': 'Mad Devs Privacy Policy',
  'og:description': 'Mad Devs Privacy Policy: Website Acceptable Use Terms. We respect your privacy and are committed to protecting your personal information.',
  'og:image': 'https://maddevs.io/Open-Graph.png',
  'og:image:width': '1200',
  'og:image:height': '630',
  'twitter:card': 'summary_large_image',
  'twitter:text:title': 'Mad Devs Privacy Policy',
  'twitter:description': 'Mad Devs Privacy Policy: Website Acceptable Use Terms. We respect your privacy and are committed to protecting your personal information.',
  'twitter:image:src': 'https://maddevs.io/Open-Graph.png',
  'twitter:url': 'https://maddevs.io/privacy/',
}

describe('Privacy page', () => {
  it('should render correctly', () => {
    render(MainPrivacy, {
    })

    expect(screen.getByText(/Privacy Policy: Website/i)).toBeTruthy()
  })

  it('should correct work head method', () => {
    const wrapper = shallowMount(MainPrivacy, {
    })

    const actual = wrapper.vm.$options.head.call(wrapper.vm)

    expect(actual.meta).toHaveLength(Object.keys(META_DATA).length)
    actual.meta.forEach(meta => {
      expect(META_DATA[meta.name] || META_DATA[meta.property]).toBe(meta.content)
    })
  })
})
