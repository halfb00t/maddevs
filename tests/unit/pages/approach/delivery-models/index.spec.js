import 'regenerator-runtime'
import { shallowMount } from '@vue/test-utils'
import DeliveryModels from '@/pages/delivery-models'

jest.mock('@/mixins/headerMixin', () => () => ({}))

const META_DATA = {
  description: 'Expand your development capabilities by choosing proper delivery models for your IT project. Manage your product growth through an effective collaboration model.',
  'og:url': 'https://maddevs.io/delivery-models/',
  'og:type': 'website',
  'og:site_name': 'Custom Software Development Company',
  'og:title': 'Collaboration Approaches and Delivery Models | Mad Devs',
  'og:description': 'Expand your development capabilities by choosing proper delivery models for your IT project. Manage your product growth through an effective collaboration model.',
  'og:image': 'https://maddevs.io/delivery-models.png',
  'og:image:width': '1200',
  'og:image:height': '630',
  'twitter:card': 'summary_large_image',
  'twitter:text:title': 'Collaboration Approaches and Delivery Models | Mad Devs',
  'twitter:description': 'Expand your development capabilities by choosing proper delivery models for your IT project. Manage your product growth through an effective collaboration model.',
  'twitter:image:src': 'https://maddevs.io/delivery-models.png',
  'twitter:url': 'https://maddevs.io/delivery-models/',
}

const stubs = ['Main']

describe('Delivery component', () => {
  it('should render correcly', () => {
    const wrapper = shallowMount(DeliveryModels, {
      stubs,
    })
    expect(wrapper).toMatchSnapshot()
  })

  it('should correct work head method', () => {
    const wrapper = shallowMount(DeliveryModels, {
      stubs,
    })

    const actual = wrapper.vm.$options.head.call(wrapper.vm)

    expect(actual.meta).toHaveLength(Object.keys(META_DATA).length)
    actual.meta.forEach(meta => {
      expect(META_DATA[meta.name] || META_DATA[meta.property]).toBe(meta.content)
    })
  })
})
