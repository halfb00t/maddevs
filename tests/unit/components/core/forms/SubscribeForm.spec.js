import 'regenerator-runtime'
import { render } from '@testing-library/vue'
import { createLocalVue, mount } from '@vue/test-utils'
import Vuelidate from 'vuelidate'
import SubscribeForm from '@/components/core/forms/SubscribeForm'
import createLeadMixin from '@/mixins/createLeadMixin'

jest.mock('~/helpers/generatorUid')

const localVue = createLocalVue()
localVue.use(Vuelidate)

const mocks = {
  $axios: {
    post: jest.fn()
      .mockImplementation(() => new Promise(res => res())),
  },
}

jest.mock('~/api/email', () => ({
  sendEmail: jest.fn(),
}))

const storageMock = () => {
  const storage = {}

  return {
    setItem(key, value) {
      storage[key] = value || ''
    },
    getItem(key) {
      return key in storage ? storage[key] : null
    },
    removeItem(key) {
      delete storage[key]
    },
    get length() {
      return Object.keys(storage).length
    },
    key(i) {
      const keys = Object.keys(storage)
      return keys[i] || null
    },
  }
}

window.localStorage = storageMock()

const props = {
  formLocation: 'test',
  formMaxWidth: '199px',
  bigTitle: false,
  mediumTitle: false,
  showButton: true,
  showBackgroundImage: true,
  blackTheme: false,
  submitButtonSizeInPercentage: 30,
}

describe('SubscribeForm component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(SubscribeForm, {
      localVue,
      mocks,
      mixins: [createLeadMixin(123, 'Create new newsletter subscriber')],
      propsData: props,
    })
  })

  afterEach(() => {
    wrapper = null
  })

  it('should render correctly with data', () => {
    expect(wrapper.html())
      .toMatchSnapshot()
  })

  it('should render correctly without showButton', () => {
    const { container } = render(SubscribeForm, {
      localVue,
      mocks,
      mixins: [createLeadMixin(123, 'Create new newsletter subscriber')],
      propsData: {
        ...props,
        showButton: false,
      },
    })

    expect(container)
      .toMatchSnapshot()
  })

  it('should correctly work showEmailInput method', () => {
    wrapper.find('.subscribe-form__button')
      .trigger('click')
    expect(wrapper.vm.isActive)
      .toBeTruthy()
  })

  it('should correctly work handleInput method', () => {
    jest.useFakeTimers()
    wrapper.vm.handleInput()
    jest.advanceTimersByTime(600)
    expect(wrapper.vm.emailExists)
      .toBeFalsy()
    jest.clearAllTimers()
  })

  it('should correctly send subscribe form', async () => {
    wrapper.setData({
      email: 'test@gmail.com',
    })

    jest.spyOn(wrapper.vm, 'submitLead')
      .mockImplementation()

    await wrapper.find('.subscribe-form')
      .trigger('submit.prevent')
    expect(wrapper.vm.isSubmitted)
      .toBeTruthy()
  })

  it('should correctly work checkEmailLocalStorage', async () => {
    wrapper.setData({
      email: 'test@gmail.com',
    })

    window.localStorage.setItem('newsLetter_subscriber', JSON.stringify(['test@gmail.com']))

    jest.spyOn(wrapper.vm, 'submitLead')
      .mockImplementation()

    await wrapper.find('.subscribe-form')
      .trigger('submit.prevent')
    expect(wrapper.vm.emailExists)
      .toBeTruthy()
  })

  it('should correctly work checkEmailLocalStorage with created subscriber', async () => {
    wrapper.setData({
      email: 'test2@gmail.com',
    })

    window.localStorage.setItem('newsLetter_subscriber', JSON.stringify(['test@gmail.com']))

    jest.spyOn(wrapper.vm, 'submitLead')
      .mockImplementation()

    await wrapper.find('.subscribe-form')
      .trigger('submit.prevent')
    const subscriber = JSON.parse(window.localStorage.getItem('newsLetter_subscriber'))
    expect(subscriber.includes('test2@gmail.com'))
      .toBeTruthy()
  })
})
