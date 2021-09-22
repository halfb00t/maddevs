import { render, screen } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import DevelopmentGoals from '@/components/Cases/godee/DevelopmentGoals.vue'

const refs = {
  container: {
    style: {
      marginBottom: '',
    },
  },
  cardsRightColumn: {
    style: {
      transform: 'translateY(-150px)',
    },
  },
}

const stubs = ['CardGoDeeFeature']

describe('DevelopmentGoals component', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(DevelopmentGoals, {
      directives: {
        prlx: {
          inserted: () => {},
        },
      },
      stubs,
    })
  })

  afterEach(() => {
    wrapper = null
  })

  it('should render correctly', () => {
    const { container } = render(DevelopmentGoals, {
      directives: {
        prlx: {
          inserted: () => {},
        },
      },
      stubs,
    })

    expect(container).toMatchSnapshot()
    expect(screen.getByText(/Development goals/i).className).toBeTruthy()
  })

  it('method should get number in string and return', () => {
    const result = wrapper.vm.getNumberFromString('string123')

    expect(result).toBe(123)
  })

  it('method should return zero if pass in params invalid value', () => {
    const result = wrapper.vm.getNumberFromString({})

    expect(result).toBe(0)
  })

  it('method should return zero if pass in params empty string', () => {
    const result = wrapper.vm.getNumberFromString('')

    expect(result).toBe(0)
  })

  it('method should set new marginBottom value for container', () => {
    wrapper.vm.$refs = refs

    wrapper.vm.scrollHandler()

    expect(wrapper.vm.$refs.container.style.marginBottom).toBe('-150px')
  })
})
