import Vuex from 'vuex'
import { render } from '@testing-library/vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import FooterContacts from '@/components/core/Footer/FooterContacts'
import { emailClickEvent, phoneClickEvent } from '@/analytics/events'

const localVue = createLocalVue()
localVue.use(Vuex)

const directives = { 'lazy-load': jest.fn() }

const stubs = ['FooterSocialNetworks']
const store = new Vuex.Store({
  getters: {
    footerContacts: () => ({
      emailTitle: 'email@email.com',
      email: 'sdf',
      phoneNumberTitle: 'sdf',
      phoneNumber: 324324,
    }),
  },
})

jest.mock('~/helpers/generatorUid')
const emailClick = jest.spyOn(emailClickEvent, 'send')
  .mockImplementation(() => {
  })
const phoneClick = jest.spyOn(phoneClickEvent, 'send')
  .mockImplementation(() => {
  })

describe('FooterNavbarColumn', () => {
  it('should correct render component', () => {
    const { container } = render(FooterContacts, {
      stubs,
      store,
      directives,
      localVue,
    })
    expect(container)
      .toMatchSnapshot()
  })
  it('should lkasdfj', () => {
    const wrapper = shallowMount(FooterContacts, {
      stubs,
      store,
      directives,
      localVue,
    })
    const link = wrapper.find('.footer-contacts__contact-mail')
    link.trigger('click')
    expect(emailClick)
      .toHaveBeenCalledTimes(1)
  })
  it('should lkasdasdf fj', () => {
    const wrapper = shallowMount(FooterContacts, {
      stubs,
      store,
      directives,
      localVue,
    })
    const link = wrapper.find('.footer-contacts__contact-phone-number')
    link.trigger('click')
    expect(phoneClick)
      .toHaveBeenCalledTimes(1)
  })
})
