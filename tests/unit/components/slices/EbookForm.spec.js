import 'regenerator-runtime'
import { createLocalVue, mount } from '@vue/test-utils'
import Vuelidate from 'vuelidate'
import EbookForm from '@/components/slices/EbookForm'
import createLeadMixin from '@/mixins/createLeadMixin'
import { submitNewsletterSubscription } from '@/analytics/events'

jest.mock('~/helpers/generatorUid')

const localVue = createLocalVue()
localVue.use(Vuelidate)

const mocks = {
  $emit: jest.fn(),
  $axios: {
    post: jest.fn()
      .mockImplementation(() => new Promise(res => res())),
  },
  $refs: {
    checkbox: {
      reset: jest.fn(),
    },
  },
}

jest.mock('~/api/email', () => ({
  sendEmail: jest.fn(),
}))
jest.mock('~/api/s3', () => ({
  getLinkWithLifeTime: jest.fn()
    .mockImplementation(() => Promise.resolve({ data: { pdfUrl: 'test' } })),
}))
jest.mock('~/helpers/submitEbook', () => ({
  submitEbookEventToGA4: jest.fn(),
}))

const submitNewsletterSubscriptionMock = jest.spyOn(submitNewsletterSubscription, 'send')
  .mockImplementation(() => {})

describe('EbookForm slice', () => {
  let wrapper = null

  const directives = {
    'lazy-load': () => {
    },
  }

  beforeEach(() => {
    wrapper = mount(EbookForm, {
      directives,
      localVue,
      mocks,
      mixins: [createLeadMixin(624246, 'Request a PDF file from the Ebook page')],
      propsData: {
        ebookPath: 'pdf/ebook.pdf',
        ebookName: 'ebook',
        sendPulseTemplateId: 763889,
      },
    })
  })

  it('should render correctly with data', () => {
    expect(wrapper.html())
      .toMatchSnapshot()
  })
  it('handleCheckboxChange test todo', () => {
    wrapper.vm.handleCheckboxChange({ isAgree: true })
    expect(wrapper.vm.isAgree)
      .toBeTruthy()
  })
  it('should correctly send Ebook form', async () => {
    wrapper.setData({
      name: 'test user',
      email: 'test@gmail.com',
    })

    jest.spyOn(wrapper.vm, 'submitLead')
      .mockImplementation()
    jest.spyOn(wrapper.vm.$refs.checkbox, 'reset')
      .mockImplementation()

    await wrapper.find('.ebook-form__button')
      .trigger('click')
    wrapper.vm.reset()
    expect(submitNewsletterSubscriptionMock).toHaveBeenCalledTimes(1)
    expect(wrapper.vm.name)
      .toBe('')
    expect(wrapper.vm.$refs.checkbox.reset)
      .toHaveBeenCalledTimes(1)
  })
  it('should correctly send Ebook form without data', async () => {
    wrapper.setData({
      name: 'test user',
      email: '',
    })

    jest.spyOn(wrapper.vm, 'submitLead')
      .mockImplementation()
    jest.spyOn(wrapper.vm.$refs.checkbox, 'reset')
      .mockImplementation()

    await wrapper.find('.ebook-form__button')
      .trigger('click')
    expect(wrapper.vm.isValid)
      .toBeFalsy()
  })
})
