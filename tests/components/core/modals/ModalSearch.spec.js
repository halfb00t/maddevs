import 'regenerator-runtime/runtime'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ModalSearch from '@/components/core/modals/ModalSearch'

const localVue = createLocalVue()
localVue.use(Vuex)

const mocks = {
  $refs: {
    searchInput: {
      focus: () => null,
    },
  },
  $prismic: {
    api: {
      tags: ['iOS'],
      query: jest.fn(() => Promise.resolve('response')),
    },
    predicates: {
      fulltext: jest.fn(),
    },
  },
  $router: {
    push: () => null,
  },
}

const actions = {
  setSearchResponse: () => '',
  getBlogTags: () => null,
}

const getters = {
  allAuthors: () => [{ id: '123', position: 'Senior' }],
  blogTags: () => [],
}

const store = new Vuex.Store({
  actions,
  getters,
})

describe('ModalSearch component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(ModalSearch, {
      data: () => ({
        response: {},
      }),
      localVue,
      mocks,
      store,
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('if set data with date Thu May 20 2021 16:52:46 GMT+0600 to formattedDate will return May 20, 2021', () => {
    const post = {
      data: {
        date: 'Thu May 20 2021 16:52:46 GMT+0600',
      },
    }
    expect(wrapper.vm.formattedDate(post)).toBe('May 20, 2021')
  })

  it('if response === null, searchPosts will return []', () => {
    expect(wrapper.vm.searchPosts).toEqual([])
  })

  it('if response has not key "results" searchPosts will return []', () => {
    expect(wrapper.vm.searchPosts).toEqual([])
  })

  it('if key "results" is empty, searchPosts will return []', () => {
    wrapper = shallowMount(ModalSearch, {
      data: () => ({
        response: {
          results: [],
        },
      }),
      localVue,
      mocks,
      store,
    })
    expect(wrapper.vm.searchPosts).toEqual([])
  })

  it('if key "results" has data, searchPosts will return array with data', () => {
    wrapper = shallowMount(ModalSearch, {
      data: () => ({
        response: {
          results: [
            {
              data: {
                date: 'Thu May 20 2021 16:52:46 GMT+0600',
                featured_image: {
                  url: 'http://localhost',
                },
                title: [
                  {
                    text: '',
                  },
                ],
              },
            },
          ],
        },
      }),
      stubs: ['NuxtLink'],
      localVue,
      mocks,
      store,
    })
    expect(wrapper.vm.searchPosts).toHaveLength(1)
  })

  it('searchPosts should sort array items by date', () => {
    wrapper = shallowMount(ModalSearch, {
      data: () => ({
        response: {
          results: [
            {
              data: {
                id: 1,
                date: 'Thu May 19 2020 11:22:01 GMT+0600',
                featured_image: {
                  url: 'http://localhost',
                },
                title: [
                  {
                    text: '',
                  },
                ],
              },
            },
            {
              data: {
                id: 2,
                date: 'Thu May 20 2021 16:52:46 GMT+0600',
                featured_image: {
                  url: 'http://localhost',
                },
                title: [
                  {
                    text: '',
                  },
                ],
              },
            },
          ],
        },
      }),
      stubs: ['NuxtLink'],
      localVue,
      mocks,
      store,
    })
    expect(wrapper.vm.searchPosts[0].data.id).toBe(2)
    expect(wrapper.vm.searchPosts[1].data.id).toBe(1)
  })

  it('if set to args Frontend Development, tagLink will return /blog/tag/frontend-development/', () => {
    expect(wrapper.vm.tagLink('Frontend Development')).toEqual('/blog/tag/frontend-development/')
  })

  it('if set to 2 arg position, getAuthor will return Senior', () => {
    const post = {
      data: {
        post_author: {
          id: '123',
        },
      },
    }
    expect(wrapper.vm.getAuthor(post, 'position')).toEqual('Senior')
  })

  it('if post arg is empty, getAuthor will return null', () => {
    const post = undefined
    expect(wrapper.vm.getAuthor(post, 'position')).toBeNull()
  })

  it('if field arg is empty, getAuthor will return null', () => {
    const post = {
      data: {
        post_author: {
          id: '123',
        },
      },
    }
    expect(wrapper.vm.getAuthor(post)).toBeNull()
  })

  it('if post obj dosnt have key "id", getAuthor will return null', () => {
    const post = {
      data: {
        post_author: {},
      },
    }
    expect(wrapper.vm.getAuthor(post)).toBeNull()
  })

  it('if call onClose method, data response will be null', () => {
    wrapper = shallowMount(ModalSearch, {
      data: () => ({
        response: [{}, {}],
      }),
      localVue,
      mocks,
      store,
    })
    expect(wrapper.vm.response).toEqual([{}, {}])
    wrapper.vm.onClose()
    expect(wrapper.vm.response).toBeNull()
  })

  it('onEnter should call cleanUp and updateUrl methods, if this.searchPosts is not empty', () => {
    wrapper = shallowMount(ModalSearch, {
      data: () => ({
        response: {
          results: [
            {
              data: {
                id: 1,
                date: 'Thu May 19 2020 11:22:01 GMT+0600',
                featured_image: {
                  url: 'http://localhost',
                },
                title: [
                  {
                    text: '',
                  },
                ],
              },
            },
          ],
        },
      }),
      stubs: ['NuxtLink'],
      localVue,
      mocks,
      store,
    })

    const spyUpdateUrl = jest.spyOn(wrapper.vm, 'updateUrl')
    const spyCleanUp = jest.spyOn(wrapper.vm, 'cleanUp')

    wrapper.vm.onEnter()

    expect(spyUpdateUrl).toHaveBeenCalledTimes(1)
    expect(spyCleanUp).toHaveBeenCalledTimes(1)
  })

  it('onEnter should not call cleanUp and updateUrl methods, if this.searchPosts is empty', () => {
    const spyUpdateUrl = jest.spyOn(wrapper.vm, 'updateUrl')
    const spyCleanUp = jest.spyOn(wrapper.vm, 'cleanUp')

    wrapper.vm.onEnter()

    expect(spyUpdateUrl).not.toHaveBeenCalledTimes(1)
    expect(spyCleanUp).not.toHaveBeenCalledTimes(1)
  })

  it('should remove event listener and call onClose method', () => {
    const spyRemoveEventListener = jest.spyOn(document, 'removeEventListener')
    const spyOnClose = jest.spyOn(wrapper.vm, 'onClose')
    const callback = wrapper.vm.listenKeys

    wrapper.vm.cleanUp()

    expect(spyOnClose).toHaveBeenCalledTimes(1)
    expect(spyRemoveEventListener).toHaveBeenCalledTimes(1)
    expect(spyRemoveEventListener).toHaveBeenCalledWith('keyup', callback)
  })

  it('should call cleanUp method if event.keyCode equal 27', () => {
    const spyCleanUp = jest.spyOn(wrapper.vm, 'cleanUp')
    const spyOnEnter = jest.spyOn(wrapper.vm, 'onEnter')
    const event = {
      keyCode: 27,
    }

    wrapper.vm.listenKeys(event)

    expect(spyCleanUp).toHaveBeenCalledTimes(1)
    expect(spyOnEnter).toHaveBeenCalledTimes(0)
  })

  it('should call onEnter method if event.keyCode equal 13', () => {
    const spyCleanUp = jest.spyOn(wrapper.vm, 'cleanUp')
    const spyOnEnter = jest.spyOn(wrapper.vm, 'onEnter')
    const event = {
      keyCode: 13,
    }

    wrapper.vm.listenKeys(event)

    expect(spyOnEnter).toHaveBeenCalledTimes(1)
    expect(spyCleanUp).toHaveBeenCalledTimes(0)
  })

  it('should call push method with searchBy params if this.value is not empty', () => {
    const args = { path: '/blog/search-result/', query: { searchBy: 'test' } }
    const spyPush = jest.spyOn(mocks.$router, 'push')

    wrapper = shallowMount(ModalSearch, {
      data: () => ({
        value: 'test',
      }),
      stubs: ['NuxtLink'],
      localVue,
      mocks,
      store,
    })

    wrapper.vm.updateUrl()

    expect(spyPush).toHaveBeenCalledWith(args)
  })

  it('should push to blog page if this.value is empty', () => {
    const args = '/blog/'
    const spyPush = jest.spyOn(mocks.$router, 'push')

    wrapper.vm.updateUrl()

    expect(spyPush).toHaveBeenCalledWith(args)
  })

  it('getPosts should call prismic api query and setSearchResponse with response params', async () => {
    const spySetSearchResponse = jest.spyOn(wrapper.vm, 'setSearchResponse')

    await wrapper.vm.getPosts()

    expect(mocks.$prismic.api.query).toHaveBeenCalledTimes(1)
    expect(spySetSearchResponse).toHaveBeenCalledTimes(1)
    expect(spySetSearchResponse).toHaveBeenCalledWith('response')
  })

  it('getPosts should call prismic predicates fulltext with params', async () => {
    const args = ['my.post.title', 'test']

    await wrapper.vm.getPosts('test')

    expect(mocks.$prismic.predicates.fulltext).toHaveBeenCalledTimes(1)
    expect(mocks.$prismic.predicates.fulltext).toHaveBeenCalledWith(...args)
  })

  it('function should return post link', () => {
    const post = {
      type: 'post',
      uid: 'post-uid',
    }

    const value = wrapper.vm.link(post)

    expect(value).toBe('/blog/post-uid/')
  })
})
