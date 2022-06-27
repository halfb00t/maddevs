import { shallowMount } from '@vue/test-utils'
import CustomerUniversityButton from '@/components/Blog/shared/CustomerUniversityButton'

const props = {
  label: 'Click me',
  size: 'md',
}

describe('CustomerUniversityButton component', () => {
  it('should correctly render', () => {
    const wrapper = shallowMount(CustomerUniversityButton, {
      propsData: props,
    })

    wrapper.find('.customer-university__btn').trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
