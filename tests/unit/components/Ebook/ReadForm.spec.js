import 'regenerator-runtime'
import { shallowMount } from '@vue/test-utils'
import ReadForm from '@/components/Ebook/ReadForm'

jest.mock('~/helpers/generatorUid')

describe('ReadForm component', () => {
  let wrapper = null

  const directives = {
    'lazy-load': () => {},
  }

  beforeEach(() => {
    wrapper = shallowMount(ReadForm, {
      stubs: {
        BaseInput: {
          render(h) { return h('div') },
        },
      },
      computed: {
        isValid: () => true,
      },
      mocks: {
        $v: {
          name: '',
          $reset: () => {},
        },
      },
      directives,
      propsData: {
        id: 'test',
      },
    })
  })

  it('should render correctly with no data', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
