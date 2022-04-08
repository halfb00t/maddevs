import 'regenerator-runtime'
import { shallowMount } from '@vue/test-utils'
import EbookForm from '@/components/slices/EbookForm'

describe('ReadForm component', () => {
  let wrapper = null

  const directives = {
    'lazy-load': () => {},
  }

  beforeEach(() => {
    wrapper = shallowMount(EbookForm, {
      stubs: {
        Learn: {
          render(h) { return h('div') },
        },
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
          email: '',
          $reset: () => {},
        },
      },
      directives,
    })
  })

  it('should render correctly with no data', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should generate $emit event when submit button is clicked', () => {
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted()).toBeTruthy()
  })
})
