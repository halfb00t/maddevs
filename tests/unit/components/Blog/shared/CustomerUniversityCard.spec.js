import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import CustomerUniversityCard from '@/components/Blog/shared/CustomerUniversityCard'

const stubs = ['NuxtLink']

const mocks = {
  $prismic: {
    asText: () => 'Сustomer University card',
  },
}

const directives = {
  'lazy-load': () => {},
}

describe('СustomerUniversityCard component', () => {
  it('should render correctly with no data', () => {
    const { container } = render(CustomerUniversityCard, {
      mocks,
      directives,
      stubs,
    })
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with data', () => {
    const wrapper = shallowMount(CustomerUniversityCard, {
      mocks,
      directives,
      stubs,
      propsData: {
        type: 'customer_university',
        postId: 'test',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.vm.postLink).toBe('/customer-university/test/')
  })
})
