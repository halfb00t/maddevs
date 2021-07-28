import 'regenerator-runtime/runtime'
import { mount, createLocalVue } from '@vue/test-utils'
import IndexPage from '@/pages/index'
import Vuelidate from 'vuelidate'

const localVue = createLocalVue()

localVue.use(Vuelidate)

describe('index page', () => {
  let wrapper

  beforeEach(() => {
    global.$nuxt = {
      $route: {
        name: null,
      },
    }
    wrapper = mount(IndexPage, {
      localVue,
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
        $lazyLoad: {
          init: () => {},
        },
      },
      stubs: [
        'ClientOnly',
        'NuxtLink',
        'WeCreateItProjectsFor',
        'TechnologiesAndTools',
        'CustomerTestimonials',
        'QuickProjectStart',
        'MeetOurExperts',
        'ImageComponent',
        'CasesListItem',
      ],
    })
  })

  // ------ IMPORTANT ----- //
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  // --------------------- //
})
