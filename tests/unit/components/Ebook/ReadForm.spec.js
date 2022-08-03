import 'regenerator-runtime'
import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import Vuelidate from 'vuelidate'
import ReadForm from '@/components/Ebook/ReadForm'
import createLeadMixin from '@/mixins/createLeadMixin'
import { submitNewsletterSubscription } from '@/analytics/events'

jest.mock('~/helpers/generatorUid')

const localVue = createLocalVue()
localVue.use(Vuelidate)

const mocks = {
  $emit: jest.fn(),
  $axios: {
    post: jest.fn().mockImplementation(() => new Promise(res => res())),
  },
  $refs: {
    checkbox: {
      reset: jest.fn(),
    },
  },
  $prismic: {
    asText: text => text[0].text,
  },
}

jest.mock('~/api/email', () => ({
  sendEmail: jest.fn(),
}))
jest.mock('~/api/s3', () => ({
  getLinkWithLifeTime: jest.fn().mockImplementation(() => Promise.resolve({ data: { pdfUrl: 'test' } })),
}))

const submitNewsletterSubscriptionMock = jest.spyOn(submitNewsletterSubscription, 'send')
  .mockImplementation(() => {})

describe('ReadForm component', () => {
  const directives = {
    'lazy-load': () => {
    },
  }

  const options = {
    directives,
    localVue,
    mocks,
    mixins: [createLeadMixin(624246, 'Request a PDF file from the Ebook page')],
    propsData: {
      id: 'test',
      fullsizeButton: true,
      ebookPath: 'pdf/ebook.pdf',
      ebookName: 'ebook',
      sendPulseTemplateId: 763889,
      ebookTitle: 'Ebook title',
      ebookSubTitle: [{ text: 'Ebook subtitle' }],
    },
  }

  it('should render correctly with data', () => {
    const wrapper = shallowMount(ReadForm, { ...options })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should correctly work handleCheckboxChange method', () => {
    const wrapper = shallowMount(ReadForm, { ...options })
    wrapper.vm.handleCheckboxChange({ isAgree: false })
    expect(wrapper.vm.isAgree).toBeFalsy()
  })

  it('should correctly send form', async () => {
    const wrapper = mount(ReadForm, { ...options, stubs: [] })
    wrapper.setData({
      name: 'test user',
      email: 'test@gmail.com',
    })

    jest.spyOn(wrapper.vm, 'submitLead').mockImplementation()
    jest.spyOn(wrapper.vm.$refs.checkbox, 'reset').mockImplementation()

    await wrapper.find('.read-form__button').trigger('click')
    expect(submitNewsletterSubscriptionMock).toHaveBeenCalledTimes(1)
    wrapper.vm.reset()
    expect(wrapper.vm.name).toBe('')
    expect(wrapper.vm.$refs.checkbox.reset).toHaveBeenCalledTimes(1)
  })
})
