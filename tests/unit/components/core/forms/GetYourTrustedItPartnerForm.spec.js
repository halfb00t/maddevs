import { render, fireEvent, screen } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import GetYourTrustedItPartnerForm from '@/components/core/forms/GetYourTrustedItPartnerForm'
import formBaseProps from '../../../__mocks__/formBaseProps'

import delay from '../../../../../client/helpers/delay'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = {
  actions: {
    sendLead: jest.fn(),
  },
}
const mocks = formBaseProps
mocks.$v.needAssistanceWith = {
  $touch: jest.fn(),
}

jest.mock('~/helpers/generatorUid')

describe('GetYourTrustedItPartnerForm component', () => {
  it('should render correctly', () => {
    const { container } = render(GetYourTrustedItPartnerForm, {
      mocks,
      store,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct call handler', async () => {
    render(GetYourTrustedItPartnerForm, {
      mocks,
      store,
    })

    await fireEvent.update(screen.getByTestId('test-base-form-phoneNumber'), '+3 4546-657-9098-7875645342245')
    await fireEvent.update(screen.getByTestId('test-base-form-email'), 'someemail@maddevs.io')
    await fireEvent.update(screen.getByTestId('test-base-form-fullName'), 'John Johnson')

    await fireEvent.click(screen.queryByTestId('test-privacy-policy-checkbox-input'))
    await fireEvent.click(screen.getByText('Get your trusted IT partner'))

    await delay(500) // createLeadMixin calls the delay method
    // Called in BaseForm and GetYourTrustedItPartnerForm components
    expect(mocks.$v.$reset).toHaveBeenCalledTimes(2)
  })
})
