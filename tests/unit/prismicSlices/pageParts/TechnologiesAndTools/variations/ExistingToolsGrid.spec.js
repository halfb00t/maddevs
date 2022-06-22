import 'regenerator-runtime'
import { shallowMount } from '@vue/test-utils'
import ExistingToolsGrid from '@/prismicSlices/pageParts/TechnologiesAndTools/variations/ExistingToolsGrid'

const props = {
  animation: 'fade-up',

  selectedTools: 'frontend',
}

const toolsMockData = [
  {
    icon: 'typescript',
    label: 'TypeScript',
    category: 'stack',
    color: 'rgba(40, 29, 29, 1)',
  },
  {
    icon: 'javascript',
    label: 'JavaScript',
    category: 'stack',
    color: 'rgba(40, 29, 29, 1)',
  },
  {
    icon: 'angular',
    label: 'Angular',
    category: 'stack',
    color: 'rgba(40, 29, 29, 1)',
  },
  {
    icon: 'webpack',
    label: 'Webpack',
    category: 'stack',
    color: 'rgba(40, 29, 29, 1)',
  },
  {
    icon: 'post-css',
    label: 'PostCSS',
    category: 'stack',
    color: 'rgba(40, 29, 29, 1)',
  },
  {
    icon: 'nextjs',
    label: 'Next.js',
    category: 'stack',
    color: 'rgba(40, 29, 29, 1)',
  },
  {
    icon: 'nuxtjs',
    label: 'Nuxt.js',
    category: 'stack',
    color: 'rgba(40, 29, 29, 1)',
  },
  {
    icon: 'react',
    label: 'React',
    category: 'stack',
    color: 'rgba(40, 29, 29, 1)',
  },
  {
    icon: 'babel',
    label: 'Babel',
    category: 'stack',
    color: 'rgba(40, 29, 29, 1)',
  },
  {
    icon: 'vue',
    label: 'Vue',
    category: 'stack',
    color: 'rgba(40, 29, 29, 1)',
  },
  {
    icon: 'sass',
    label: 'SASS',
    category: 'stack',
    color: 'rgba(40, 29, 29, 1)',
  },
  {
    icon: 'stripe',
    label: 'Stripe',
    category: 'instruments',
    color: 'rgba(33, 33, 33, 1)',
  },
  {
    icon: 'stripe',
    label: 'Stripe Connect',
    category: 'instruments',
    color: 'rgba(33, 33, 33, 1)',
  },
  {
    icon: 'twilio',
    label: 'Twilio',
    category: 'instruments',
    color: 'rgba(33, 33, 33, 1)',
  },
  {
    icon: 'jira',
    label: 'Jira',
    category: 'instruments',
    color: 'rgba(33, 33, 33, 1)',
  },
  {
    icon: 'google-apis',
    label: 'Google APIs',
    category: 'instruments',
    color: 'rgba(33, 33, 33, 1)',
  },
  {
    icon: 'simpletexting',
    label: 'Simpletexting',
    category: 'instruments',
    color: 'rgba(33, 33, 33, 1)',
  },
  {
    icon: 'twilio-sendgrid',
    label: 'Twilio sendgrid',
    category: 'instruments',
    color: 'rgba(33, 33, 33, 1)',
  },
  {
    icon: 'sentry',
    label: 'Sentry',
    category: 'instruments',
    color: 'rgba(33, 33, 33, 1)',
  },
  {
    icon: 'datadog',
    label: 'Datadog',
    category: 'instruments',
    color: 'rgba(33, 33, 33, 1)',
  },
  {
    icon: 'firebase',
    label: 'Firebase',
    category: 'instruments',
    color: 'rgba(33, 33, 33, 1)',
  },
  {
    icon: 'cloudflare',
    label: 'Cloudflare Stream',
    category: 'instruments',
    color: 'rgba(33, 33, 33, 1)',
  },
  {
    icon: 'metabase',
    label: 'Metabase',
    category: 'instruments',
    color: 'rgba(33, 33, 33, 1)',
  },
  {
    icon: 'neo4j',
    label: 'Neo4j',
    category: 'instruments',
    color: 'rgba(33, 33, 33, 1)',
  },
  {
    icon: 'flask',
    label: 'Flask',
    category: 'instruments',
    color: 'rgba(33, 33, 33, 1)',
  },
  {
    icon: 'pytest',
    label: 'Pytest',
    category: 'instruments',
    color: 'rgba(33, 33, 33, 1)',
  },
  {
    icon: 'airflow',
    label: 'Airflow',
    category: 'instruments',
    color: 'rgba(33, 33, 33, 1)',
  },
  {
    icon: 'graphana',
    label: 'Graphana',
    category: 'instruments',
    color: 'rgba(33, 33, 33, 1)',
  },
  {
    icon: 'mysql',
    label: 'MySQL',
    category: 'instruments',
    color: 'rgba(33, 33, 33, 1)',
  },
  {
    icon: 'sqlalchemy',
    label: 'Sqlalchemy',
    category: 'integrations',
    color: 'rgba(31, 30, 40, 1)',
  },
  {
    icon: 'here',
    label: 'HERE',
    category: 'integrations',
    color: 'rgba(31, 30, 40, 1)',
  },
  {
    icon: 'mapbox',
    label: 'Mapbox',
    category: 'integrations',
    color: 'rgba(31, 30, 40, 1)',
  },
  {
    icon: 'google-distance-matrix',
    label: 'Google distance matrix',
    category: 'integrations',
    color: 'rgba(31, 30, 40, 1)',
  },
  {
    icon: 'osm',
    label: 'OSM',
    category: 'integrations',
    color: 'rgba(31, 30, 40, 1)',
  },
  {
    icon: 'osrm',
    label: 'OSRM',
    category: 'integrations',
    color: 'rgba(31, 30, 40, 1)',
  },
]

const stubs = ['ToolsCategories', 'ToolsGrid']

describe('ExistingToolsGrid component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(ExistingToolsGrid, {
      propsData: props,
      stubs,
    })
  })

  afterEach(() => {
    wrapper = null
  })
  it('should correctly render with unknown category', async () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should correctly render component', async () => {
    expect(wrapper.vm.tools).toEqual(toolsMockData)
    expect(wrapper.html()).toMatchSnapshot()

    wrapper.setProps({
      selectedTools: 'test',
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.categories).toEqual([])
    expect(wrapper.vm.tools).toEqual([])
  })

  it('should correctly work onSelectCategory method', () => {
    wrapper.vm.onSelectCategory('frontend')
    expect(wrapper.vm.activeCategory).toBe('frontend')
    wrapper.vm.onSelectCategory('frontend')
    expect(wrapper.vm.activeCategory).toBeNull()
  })
})
