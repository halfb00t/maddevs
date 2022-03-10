import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import Mainnda from '@/pages/nda'

const stubs = ['LazyHydrate']

const META_DATA = {
  description: 'Signing an NDA has been a standard practice at Mad Devs for each employee on the first day of work: we understand the importance of confidentiality in our clients\' projects.',
  'og:url': 'https://maddevs.io/nda/',
  'og:type': 'website',
  'og:site_name': 'Custom Software Development Company',
  'og:title': 'Mad Devs: Work Under NDA',
  'og:description': 'Signing an NDA has been a standard practice at Mad Devs for each employee on the first day of work: we understand the importance of confidentiality in our clients\' projects.',
  'og:image': 'https://maddevs.io/Open-Graph.png',
  'og:image:width': '1200',
  'og:image:height': '630',
  'twitter:card': 'summary_large_image',
  'twitter:text:title': 'Mad Devs: Work Under NDA',
  'twitter:description': 'Signing an NDA has been a standard practice at Mad Devs for each employee on the first day of work: we understand the importance of confidentiality in our clients\' projects.',
  'twitter:image:src': 'https://maddevs.io/Open-Graph.png',
  'twitter:url': 'https://maddevs.io/nda/',
}

describe('Nda page', () => {
  it('should render correctly', () => {
    const { container } = render(Mainnda, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct work head method', () => {
    const wrapper = shallowMount(Mainnda, {
      stubs,
    })

    const actual = wrapper.vm.$options.head.call(wrapper.vm)

    expect(actual.meta).toHaveLength(Object.keys(META_DATA).length)
    actual.meta.forEach(meta => {
      expect(META_DATA[meta.name] || META_DATA[meta.property]).toBe(meta.content)
    })
  })

  describe('Dynamic imports Mainnda component NDA', () => {
    it('should correctly import component', async () => {
      const container = shallowMount(Mainnda, {
        stubs,
      })

      const NDA = await container.vm.$options.components.NDA.call()

      expect(NDA.default.name).toBe('NDA')
    })
  })
})
