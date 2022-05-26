import { render } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ContactMeForm from '@/components/core/forms/ContactMeForm'
import formBaseProps from '../../../__mocks__/formBaseProps'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = {
  actions: {
    sendLead: jest.fn(),
  },
}
const mocks = formBaseProps

jest.mock('~/helpers/generatorUid')

describe('ContactMeForm component', () => {
  it('should render correctly', () => {
    const { container } = render(ContactMeForm, {
      mocks,
      store,
    })

    expect(container).toMatchSnapshot()
  })
})
