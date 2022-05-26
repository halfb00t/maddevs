import { createLocalVue } from '@vue/test-utils'
import { render } from '@testing-library/vue'
import Vuex from 'vuex'
import Development from '@/components/core/chat/ChatModal/DevelopmentBody'
import formBaseProps from '../../../../../__mocks__/formBaseProps'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = {
  actions: {
    sendLead: jest.fn(),
  },
}
const mocks = formBaseProps
const props = {
  isCompany: true,
  isPartnership: false,
}

jest.mock('~/helpers/generatorUid')

describe('Development component', () => {
  it('should render correctly', () => {
    const { container } = render(Development, {
      mocks,
      store,
      props,
    })

    expect(container).toMatchSnapshot()
  })
})
