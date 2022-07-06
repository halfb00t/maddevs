/* eslint-disable jest/no-disabled-tests */
import Vuelidate from 'vuelidate'
import { render } from '@testing-library/vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import PositionForm from '@/components/Careers/shared/PositionForm'

jest.mock('bowser', () => ({
  parse: () => ({
    browser: {
      name: 'Chrome',
      version: '91.0.4472.114',
    },
    os: {
      name: 'macOS',
      version: '10.15.7',
      versionName: 'Catalina',
    },
    platform: {
      type: 'desktop',
      vendor: 'Apple',
    },
  }),
}))

const file = new File([new ArrayBuffer(1)], 'file.pdf')

jest.mock('~/helpers/generatorUid')

Object.defineProperty(global.window, 'location', { value: { href: 'pageUrl' }, writable: true })
Object.defineProperty(global.window, 'grecaptcha', {
  value: {
    ready: jest.fn(callback => {
      callback()
    }),
    execute: () => new Promise(res => {
      res.bind(null, 'tokenList')
    }),
  },
})

const localVue = createLocalVue()

localVue.use(Vuelidate)
localVue.use(Vuex)

const mocks = {
  $v: {
    name: {
      $touch: jest.fn(),
    },
    position: {
      $touch: jest.fn(),
    },
    grade: {
      $touch: jest.fn(),
    },
    email: {
      $touch: jest.fn(),
    },
    cvFile: {
      $touch: jest.fn(),
    },
    $reset: jest.fn(),
    validationGroup: {},
  },
  resetForm: jest.fn(),
  sendVacancy: jest.fn(),
  $refs: {
    fileInput: {
      reset: () => jest.fn(),
    },
    radioButtons: {
      reset: () => jest.fn(),
    },
    successModal: {
      show: () => jest.fn(),
    },
  },
  $t: () => 'translated',
}

const store = new Vuex.Store({
  actions: {
    sendVacancy: () => jest.fn(),
  },
})

describe('PositionForm component', () => {
  let fileInputReset
  let radioButtonsReset

  beforeEach(() => {
    fileInputReset = jest.spyOn(mocks.$refs.fileInput, 'reset').mockImplementation()
    radioButtonsReset = jest.spyOn(mocks.$refs.radioButtons, 'reset').mockImplementation()
  })

  it('should render correctly', () => {
    const { container } = render(PositionForm, {
      localVue,
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should work touch handler without a file', () => {
    const wrapper = shallowMount(PositionForm, {
      localVue,
      mocks,
    })

    wrapper.vm.$options.methods.handleFileSelect.call({ $v: {} })

    expect(mocks.$v.cvFile.$touch).toHaveBeenCalledTimes(0)
  })

  it('should work touch handler', () => {
    const wrapper = shallowMount(PositionForm, {
      localVue,
      mocks,
    })

    wrapper.vm.$options.methods.handleFileSelect.call(mocks)

    expect(mocks.$v.cvFile.$touch).toHaveBeenCalledTimes(1)
  })

  it('should work send form if have valid param', async () => {
    const wrapper = shallowMount(PositionForm, {
      localVue,
      mocks,
      props: {
        huntflowVacancyId: '123',
        position: 'Frontend',
      },
      store,
    })

    const mockSuccess = jest.fn()
    wrapper.vm.$refs.successModal.show = mockSuccess

    wrapper.setData({
      name: 'John Johnson',
      email: 'johnhohnson@maddevs.io',
      cvFile: file,
      linkedin: '',
      grade: { value: 'Senior' },
    })

    const resetMock = jest.spyOn(wrapper.vm, 'resetForm').mockImplementation()

    await wrapper.vm.submitForm()
    expect(resetMock).toHaveBeenCalledTimes(1)
  })

  it('should work reset form', () => {
    const wrapper = shallowMount(PositionForm, {
      localVue,
      mocks,
    })

    wrapper.vm.$options.methods.resetForm.call(mocks)

    expect(mocks.$v.$reset).toHaveBeenCalledTimes(1)
    expect(fileInputReset).toHaveBeenCalledTimes(1)
    expect(radioButtonsReset).toHaveBeenCalledTimes(1)
  })

  it('should work build applicant data function', async () => {
    process.env.emailCV = 'emailTo@maddevs.io'
    const toBase64Mock = jest.fn()
    mocks.toBase64 = () => {
      toBase64Mock()
      return 'base64file'
    }

    const callObject = {
      ...mocks,
      name: 'John Johnson',
      email: 'johnhohnson@maddevs.io',
      cvFile: file,
      linkedin: '',
      grade: { value: 'Senior' },
    }

    const wrapper = shallowMount(PositionForm, {
      localVue,
      mocks,
      props: {
        huntflowVacancyId: '123',
        position: 'Frontend',
      },
      store,
    })

    const result = await wrapper.vm.$options.methods.buildApplicantData.call(callObject)
    const expectedResult = {
      body: {
        huntflow: {
          vacancyId: wrapper.vm.$props.huntflowVacancyId,
          firstName: callObject.name.split(' ')[0],
          middleName: '',
          lastName: callObject.name.split(' ')[1],
          email: callObject.email,
          positionTitle: wrapper.vm.$props.position,
          positionValue: callObject.grade.value,
          linkedinProfile: callObject.linkedin,
        },
        email: {
          templateId: 305491,
          variables: {
            fullName: callObject.name,
            email: callObject.email,
            emailTo: process.env.emailCV,
            linkedinProfile: callObject.linkedin,
            positionValue: callObject.grade.value,
            positionTitle: wrapper.vm.$props.position,
            subject: `Job Candidate Application for ${wrapper.vm.$props.position}`,
            modalTitle: 'Mad Devs Website Careers Form',
            pageUrl: 'pageUrl',
            userBrowser: 'Name: Chrome, Version: 91.0.4472.114',
            userOS: 'Name: macOS, Version: 10.15.7, VersionName: Catalina',
            userPlatform: 'Type: desktop, Vendor: Apple',
            formLocation: '\'I want to work for Mad Devs\' button, vacancy page',
          },

          attachment: {
            base64: null,
            name: callObject.cvFile.name,
          },
        },
      },

      cvFile: callObject.cvFile,
    }

    expect(result).toEqual(expectedResult)
  })
})
