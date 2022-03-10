import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import Main from '@/components/Cases/nambafood/Main'
import '../../../__mocks__/intersectionObserverMock'

// eslint-disable-next-line no-sparse-arrays
const stubs = [
  'LazyHydrate',
]

const directives = {
  'lazy-load': () => {},
  'mad-parallax': () => {},
}

describe('Main component', () => {
  it('should render correctly', () => {
    const { container } = render(Main, {
      stubs,
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
      directives,
    })

    expect(container).toMatchSnapshot()
  })

  it('test dynamics imports', async () => {
    const container = shallowMount(Main, {
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
      directives,
    })

    const About = await container.vm.$options.components.About.call()
    const BusinessModel = await container.vm.$options.components.BusinessModel.call()
    const UsageScenarios = await container.vm.$options.components.UsageScenarios.call()
    const Applications = await container.vm.$options.components.Applications.call()
    const OrderingProcess = await container.vm.$options.components.OrderingProcess.call()
    const TrackStatuses = await container.vm.$options.components.TrackStatuses.call()
    const CouriersApplication = await container.vm.$options.components.CouriersApplication.call()
    const AdminPanel = await container.vm.$options.components.AdminPanel.call()
    const Integrating = await container.vm.$options.components.Integrating.call()
    const Swift = await container.vm.$options.components.Swift.call()
    const Grafana = await container.vm.$options.components.Grafana.call()
    const Technologies = await container.vm.$options.components.Technologies.call()
    const InfrastructureSchema = await container.vm.$options.components.InfrastructureSchema.call()
    const Pipelines = await container.vm.$options.components.Pipelines.call()
    const Team = await container.vm.$options.components.Team.call()
    const NationwideSuccess = await container.vm.$options.components.NationwideSuccess.call()
    const SystemOverview = await container.vm.$options.components.SystemOverview.call()

    expect(About.default.name).toBe('About')
    expect(BusinessModel.default.name).toBe('BusinessModel')
    expect(UsageScenarios.default.name).toBe('UsageScenarios')
    expect(Applications.default.name).toBe('Applications')
    expect(OrderingProcess.default.name).toBe('OrderingProcess')
    expect(TrackStatuses.default.name).toBe('TrackStatuses')
    expect(CouriersApplication.default.name).toBe('CouriersApplication')
    expect(AdminPanel.default.name).toBe('AdminPanel')
    expect(Integrating.default.name).toBe('Integrating')
    expect(Swift.default.name).toBe('Swift')
    expect(Grafana.default.name).toBe('Grafana')
    expect(Technologies.default.name).toBe('Technologies')
    expect(InfrastructureSchema.default.name).toBe('InfrastructureSchema')
    expect(Pipelines.default.name).toBe('Pipelines')
    expect(Team.default.name).toBe('Team')
    expect(NationwideSuccess.default.name).toBe('NationwideSuccess')
    expect(SystemOverview.default.name).toBe('SystemOverview')
  })
})
