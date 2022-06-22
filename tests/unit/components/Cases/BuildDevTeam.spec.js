import 'regenerator-runtime'
import { mount, shallowMount } from '@vue/test-utils'
import BuildDevTeam from '@/components/Cases/BuildDevTeam'

const mocks = {
  $getMediaFromS3: () => 'img.png',
}

jest.mock('~/helpers/generatorUid')

describe('BuildDevTeam', () => {
  let wrapper = null
  let mockShow = null

  beforeEach(() => {
    wrapper = mount(BuildDevTeam, {
      stubs: {
        UIBanner: {
          render(h) { return h('div') },
        },
      },
      mocks,
    })
    mockShow = jest.fn()
  })

  afterEach(() => {
    wrapper = null
    mockShow = null
  })

  // ------ IMPORTANT ----- //
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  // --------------------- //

  it('if call method "show" and ref modalContactMe is undefined > "show" method in ref modalContactMe not call', () => {
    wrapper.vm.show()
    expect(mockShow).not.toHaveBeenCalled()
  })

  it('if call method "show" and ref modalContactMe exist > "show" method in ref modalContactMe call', () => {
    wrapper = shallowMount(BuildDevTeam, {
      stubs: {
        UIBanner: {
          render(h) { return h('div') },
        },
        ModalContactMe: {
          render(h) { return h('div') },
          methods: {
            show: mockShow,
          },
        },
      },
      mocks,
    })
    wrapper.vm.show()
    expect(mockShow).toHaveBeenCalledTimes(1)
  })
})
