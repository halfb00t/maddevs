import { render } from '@testing-library/vue'
import { createLocalVue, mount } from '@vue/test-utils'
import Vuelidate from 'vuelidate'
import Vuex from 'vuex'
import Vacancy from '@/pages/careers/_uid.vue'

jest.mock('~/helpers/generatorUid')

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
  redirectToHomePage: jest.fn(),
}

const stubs = ['BenefitCard', 'HRContactCard']

const localVue = createLocalVue()

localVue.use(Vuelidate)
localVue.use(Vuex)

const getters = {
  vacancy: () => ({
    labels: {
      remote: true,
      relocation: false,
    },
    metaTitle: 'Test',
    metaDescription: 'Test descrip',
    schemaOrgSnippet: {},
    openGraphUrl: 'img.jpg',
  }),
}

const actions = {
  getVacancy: jest.fn(() => Promise.resolve('test')),
}

const store = new Vuex.Store({
  getters,
  actions,
})

describe('Careers _uid component', () => {
  it('should render correctly', () => {
    const { container } = render(Vacancy, {
      mocks,
      store,
      stubs,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly work asyncData', async () => {
    const wrapper = await mount(Vacancy, {
      stubs,
      store,
      localVue,
      mocks,
    })
    const resultTestData = { openGraphUrl: 'undefined/careers/test/' }

    const result = await wrapper.vm.$options.asyncData({ params: { uid: 'test' }, redirect: jest.fn(), store })
    const metaHead = wrapper.vm.$options.head.call(wrapper.vm)
    expect(metaHead.title).toBe('Test')
    expect(result).toEqual(resultTestData)
  })

  it('should correctly work asyncData return redirect', async () => {
    const wrapper = await mount(Vacancy, {
      stubs,
      store,
      localVue,
      mocks,
    })
    const redirect = jest.fn()

    const result = await wrapper.vm.$options.asyncData({ params: { uid: 'test' }, redirect })
    const metaHead = wrapper.vm.$options.head.call(wrapper.vm)
    expect(metaHead.title).toBe('Test')
    expect(result).toBeUndefined()
    expect(redirect).toHaveBeenCalledTimes(1)
  })
})
