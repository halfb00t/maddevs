import { shallowMount } from '@vue/test-utils'
import { render } from '@testing-library/vue'
import MainBody from '@/components/core/chat/ChatModal/MainBody'

const stubs = ['ChatButtons', 'Message']
const props = {
  isShowMessage: false,
}

describe('MainBody component', () => {
  it('should render correctly', () => {
    const { container } = shallowMount(MainBody, {
      stubs,
      propsData: props,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render correctly the component if prop called isShowMessage is true', () => {
    props.isShowMessage = true

    const wrapper = render(MainBody, {
      stubs,
      propsData: props,
    })

    expect(wrapper.getByTestId('test-message')).toBeTruthy()
  })
})
