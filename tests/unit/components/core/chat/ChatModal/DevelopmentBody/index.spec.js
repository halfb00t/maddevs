import 'regenerator-runtime'
import { createLocalVue, mount } from '@vue/test-utils'
import { render } from '@testing-library/vue'
import Vuex from 'vuex'
import Vuelidate from 'vuelidate'
import Development from '@/components/core/chat/ChatModal/DevelopmentBody'
import BaseForm from '@/components/core/forms/BaseForm'
import formBaseProps from '../../../../../__mocks__/formBaseProps'
import createLeadMixin from '@/mixins/createLeadMixin'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Vuelidate)

const store = new Vuex.Store({
  actions: {
    sendLead: () => jest.fn(),
    setFilledLeadForm: () => jest.fn(),
  },
})
const mocks = {
  ...formBaseProps,
  $emit: jest.fn(),
  $axios: {
    post: jest.fn().mockImplementation(() => new Promise(res => res())),
  },
  $router: {
    push: jest.fn(),
  },
}
const props = {
  isCompany: true,
  isPartnership: false,
}

jest.mock('~/helpers/generatorUid')

describe('Development component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Development, {
      mocks,
      store,
      localVue,
      propsData: props,
      mixins: [createLeadMixin(763813, 'Chat Form')],
    })
  })

  it('should render correctly', () => {
    const { container } = render(Development, {
      mocks,
      store,
      props,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly submit form', async () => {
    wrapper.findComponent(BaseForm).vm.$emit('submit', {
      fullName: 'test',
      email: 'test@test.te',
      description: 'test',
      company: 'test',
      agreeWithPrivacyPolicy: true,
      agreeToGetMadDevsDiscountOffers: true,
      isSubmitted: false,
    })

    jest.spyOn(wrapper.vm, 'submitLead').mockImplementation()
    await wrapper.vm.handleSubmit()
    wrapper.vm.reset()
    expect(wrapper.vm.showModal).toBeFalsy()
    expect(mocks.$router.push).toHaveBeenCalledTimes(1)
  })
})
