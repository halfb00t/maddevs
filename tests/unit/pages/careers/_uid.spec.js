import { render } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import Vuelidate from 'vuelidate'
import Vacancy from '@/pages/careers/_uid.vue'

const store = {
  getters: {
    vacancy: () => ({
      labels: {
        remote: true,
        relocation: false,
      },
    }),
  },
}

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
  $t: () => 'translated',
  $i18n: {
    setLocale: () => {},
  },
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
  $store: {
    dispatch: jest.fn(),
  },
  buildEmail: jest.fn(),
  resetForm: jest.fn(),
  $refs: {
    fileInput: {
      reset: jest.fn(),
    },
    radioButtons: {
      reset: jest.fn(),
    },
  },
  $lazyLoad: {
    init: jest.fn(),
  },
  featureFlag: jest.fn(),
}

const stubs = ['BenefitCard', 'HRContactCard']

const localVue = createLocalVue()

localVue.use(Vuelidate)

describe('Careers _uid component', () => {
  it('should render correctly', () => {
    const { container } = render(Vacancy, {
      mocks,
      store,
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
