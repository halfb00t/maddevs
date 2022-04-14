import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import Index from '@/pages/case-studies/index'

const META_DATA = {
  description: 'Discover how Mad Devs helps world-class brands and startups engineer their growth and reach desired outcomes with efficacy and creativity.',
  'og:url': 'https://maddevs.io/case-studies/',
  'og:type': 'website',
  'og:site_name': 'Custom Software Development Company',
  'og:title': 'Mad Devs Custom Software Development Company',
  'og:description': 'Discover how Mad Devs helps world-class brands and startups engineer their growth and reach desired outcomes with efficacy and creativity.',
  'og:image': 'https://maddevs.io/case-studies.png',
  'og:image:width': '1200',
  'og:image:height': '630',
  'twitter:card': 'summary_large_image',
  'twitter:text:title': 'Mad Devs Custom Software Development Company',
  'twitter:description': 'Discover how Mad Devs helps world-class brands and startups engineer their growth and reach desired outcomes with efficacy and creativity.',
  'twitter:image:src': 'https://maddevs.io/case-studies.png',
  'twitter:url': 'https://maddevs.io/case-studies/',
}

const stubs = ['TitleDesc', 'CasesList', 'Customers', 'BuildDevTeam', 'LazyHydrate']

const mocks = {
  $lazyLoad: {
    init: jest.fn(),
  },
}

const directives = {
  'lazy-load': () => {},
}

describe('Index page', () => {
  it('should render correctly', () => {
    const { container } = render(Index, {
      stubs,
      mocks,
      directives,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct work head method', () => {
    const wrapper = shallowMount(Index, {
      stubs,
      mocks,
      directives,
    })

    const actual = wrapper.vm.$options.head.call(wrapper.vm)

    expect(actual.meta).toHaveLength(Object.keys(META_DATA).length)
    console.log(actual.meta)
    actual.meta.forEach(meta => {
      expect(META_DATA[meta.name] || META_DATA[meta.property]).toBe(meta.content)
    })
  })

  describe('Dymanic imports index', () => {
    it('should find text in dymanic imports', async () => {
      const container = shallowMount(Index, {
        directives,
        mocks: {
          $getMediaFromS3: () => 'img.jpg',
        },
      })

      const TitleDesc = await container.vm.$options.components.TitleDesc.call()
      const CasesList = await container.vm.$options.components.CasesList.call()
      const Customers = await container.vm.$options.components.Customers.call()
      const BuildDevTeam = await container.vm.$options.components.BuildDevTeam.call()

      expect(TitleDesc.default.name).toBe('TitleDesc')
      expect(CasesList.default.name).toBe('CasesList')
      expect(Customers.default.name).toBe('Customers')
      expect(BuildDevTeam.default.name).toBe('BuildDevTeam')
    })
  })
})
