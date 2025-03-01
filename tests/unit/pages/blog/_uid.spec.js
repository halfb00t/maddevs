import { render } from '@testing-library/vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuelidate from 'vuelidate'
import Post from '@/pages/blog/_uid.vue'
import blogPost from '../../__mocks__/blogPost'

const DESCRIPTION = 'test description'

const store = {
  getters: {
    homePageContent: () => ({ description: DESCRIPTION }),
  },
}

jest.mock('~/helpers/generatorUid')

const mocks = {
  $prismic: {
    asText: () => 'text',
    asHtml: html => `<p>${html}</p>`,
  },
  post: blogPost,
  $store: {
    dispatch: jest.fn(),
  },
}

const localVue = createLocalVue()

localVue.use(Vuelidate)

const stubs = ['ShareNetwork', 'PostView']

describe('Post _uid component', () => {
  it('should render correctly', () => {
    const { container } = render(Post, {
      store,
      mocks,
      stubs,
      localVue,
    })

    expect(container).toMatchSnapshot()
    expect(mocks.$store.dispatch).toHaveBeenCalledWith('getBlogAuthors')
  })

  it('should correctly work beforeRouteEnter method if from and to is empty', () => {
    const callObject = {
      next: jest.fn(),
    }
    const wrapper = shallowMount(Post, {
      store,
      mocks,
      stubs,
      localVue,
    })

    wrapper.vm.$options.beforeRouteEnter.call({}, null, null, callObject.next)
    expect(callObject.next).toHaveBeenCalledTimes(1)
  })

  it('should correctly work beforeRouteEnter method if from and to correct', () => {
    const vm = {
      post: {
        uid: '1',
      },
    }

    const callObject = {
      from: {},
      to: {
        params: {
          uid: ' 2',
        },
      },
      next: jest.fn(callback => {
        if (typeof callback === 'function') {
          callback(vm)
        }
      }),
    }
    const wrapper = shallowMount(Post, {
      store,
      mocks,
      stubs,
      localVue,
    })

    wrapper.vm.$options.beforeRouteEnter(callObject.to, callObject.from, callObject.next)

    expect(callObject.next).toHaveBeenCalledTimes(2)
    expect(callObject.next).toHaveBeenLastCalledWith({ path: `/blog/${vm.post.uid}/` })
  })

  it('should correctly work beforeRouteEnter method if from and to equals', () => {
    const vm = {
      post: {
        uid: 2,
      },
    }

    const callObject = {
      from: {},
      to: {
        params: {
          uid: ' 2',
        },
      },
      next: jest.fn(callback => {
        if (typeof callback === 'function') {
          callback(vm)
        }
      }),
    }
    const wrapper = shallowMount(Post, {
      store,
      mocks,
      stubs,
      localVue,
    })

    wrapper.vm.$options.beforeRouteEnter(callObject.to, callObject.from, callObject.next)

    expect(callObject.next).toHaveBeenCalledTimes(1)
  })
})
