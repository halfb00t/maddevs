import 'regenerator-runtime'
import { shallowMount } from '@vue/test-utils'
import CustomerUniversityNavigation from '@/components/Blog/Post/CustomerUniversityNavigation'

const stubs = ['PostCard', 'NextPreviewButtons']
const clusterPosts = [
  {
    chapter_name: [
      {
        spans: [],
        text: 'Chapter 1',
        type: 'heading1',
      },
    ],
    cu_post: {
      id: 'YAGi7REAACMAgV8d',
      isBroken: false,
      lang: 'en-us',
      link_type: 'Document',
      slug: 'adadadad',
      tags: [],
      type: 'customer_university',
      uid: 'cu-test',
    },
  },
  {
    chapter_name: [
      {
        spans: [],
        text: 'Chapter 2',
        type: 'heading1',
      },
    ],
    cu_post: {
      id: 'YAGi7REAACMAgV8d',
      isBroken: false,
      lang: 'en-us',
      link_type: 'Document',
      slug: 'adadadadaa',
      tags: [],
      type: 'customer_university',
      uid: 'cu-test-2',
    },
  },
]
const props = {
  clusterPosts,
}

const mocks = {
  $prismic: {
    api: {
      getByIDs: jest.fn(() => new Promise(resolve => resolve({ results: [{ id: 'Test ID' }] }))),
    },
  },
  getNextPosts: jest.fn(),
  getPrevPosts: jest.fn(),
}

const resizeWindow = width => {
  global.innerWidth = width
  window.dispatchEvent(new Event('resize'))
}

jest.spyOn(window, 'removeEventListener').mockImplementation()
const nextPosts = jest.spyOn(CustomerUniversityNavigation.methods, 'getNextPosts')
const prevPosts = jest.spyOn(CustomerUniversityNavigation.methods, 'getPrevPosts')

describe('Customer university navigation', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(CustomerUniversityNavigation, {
      propsData: props,
      stubs,
      mocks,
    })
  })

  it('should render correctly with props', async () => {
    expect(wrapper.props()).toEqual(props)
    expect(wrapper.is(CustomerUniversityNavigation)).toBe(true)
    expect(wrapper.vm.posts).toEqual([{ id: 'Test ID' }])
    expect(wrapper).toMatchSnapshot()
  })

  it('should correctly change options when window has resize', () => {
    resizeWindow(768)
    expect(wrapper.vm.offsetSize).toBe(1)

    resizeWindow(1200)
    expect(wrapper.vm.offsetSize).toBe(3)
  })

  it('should call calcOffsetWidth when component has destroyed', async () => {
    await wrapper.destroy()
    expect(window.removeEventListener).toHaveBeenCalledTimes(1)
  })

  it('should call next posts method when button next has clicked', async () => {
    wrapper.vm.posts.push({ id: 'second id' }, { id: 'third id' }, { id: 'fourth id' })
    wrapper.vm.$refs.buttons.$emit('next')
    expect(nextPosts).toHaveBeenCalledTimes(1)
    wrapper.vm.$refs.buttons.$emit('preview')
    expect(prevPosts).toHaveBeenCalledTimes(1)
  })

  it('should return from function if posts ended', async () => {
    wrapper.vm.posts.push({ id: 'second id' }, { id: 'third id' }, { id: 'fourth id' })
    wrapper.vm.$refs.buttons.$emit('next')
    wrapper.vm.$refs.buttons.$emit('next')
    expect(nextPosts).toHaveBeenCalledTimes(3)
    wrapper.vm.$refs.buttons.$emit('preview')
    wrapper.vm.$refs.buttons.$emit('preview')
    expect(prevPosts).toHaveBeenCalledTimes(3)
  })
})
