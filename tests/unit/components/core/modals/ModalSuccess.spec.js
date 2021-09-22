import { render } from '@testing-library/vue'
import { mount } from '@vue/test-utils'
import ModalSuccess from '@/components/core/modals/ModalSuccess'

const props = {
  visibled: true,
  id: 'modal-id',
  displayTime: 1000,
}

const $refs = {
  successModal: {
    makeSuccess: jest.fn(),
    show: jest.fn(),
    close: jest.fn(),
  },
}

describe('ModalSuccess component', () => {
  it('should render correctly', () => {
    const { container } = render(ModalSuccess, {
      props,
      $refs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should modal correctly open and close', async () => {
    const wrapper = mount(ModalSuccess, {
      props,
    })

    wrapper.vm.show()

    expect(wrapper.findComponent({ name: 'SuccessMessage' })).toBeTruthy()

    wrapper.vm.close()

    expect(wrapper).toMatchSnapshot()
  })
})
