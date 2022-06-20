import { shallowMount } from '@vue/test-utils'
import 'regenerator-runtime/runtime'
import PostsSectionSlice from '@/prismicSlices/pageParts/PostsSectionSlice'

const props = {
  slice: {
    primary: {
      animation: 'fade-up',
    },
    items: [
      {
        data: {
          id: 'YAhEzxEAACMAnwPX',
        },
      },
    ],
    slice_type: 'posts_section_slice',
    variation: 'default-slice',
  },
}

const testResultData = [
  {
    data: {
      post_author: {
        id: 'testID',
      },
    },
    first_publication_date: '2021-01-20T14:57:27+0000',
    href: 'https://superpupertest.cdn.prismic.io/api/v2/documents/search?ref=Yk0nuhAAACIA-cvJ&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YAhEzxEAACMAnwPX%22%29+%5D%5D',
    id: 'YAhEzxEAACMAnwPX',
    lang: 'en-us',
    last_publication_date: '2022-03-29T04:10:48+0000',
    tags: ['Pricing strategies', 'Customer University'],
    type: 'customer_university',
    uid: 'custom-software-development-pricing-strategies',
  },
]

const mocks = {
  $prismic: {
    api: {
      getByIDs: jest.fn(item => {
        if (item[0] === 'testID') return new Promise(resolve => resolve({ results: [] }))
        return new Promise(resolve => resolve({ results: testResultData }))
      }),
    },
  },
}

const stubs = ['SkeletonBlogWidget', 'PostCard']

describe('PostsSectionSlice component', () => {
  it('should correctly render PostsSectionSlice component', async () => {
    const wrapper = shallowMount(PostsSectionSlice, {
      propsData: props,
      mocks,
      stubs,
    })

    expect(wrapper.props()).toEqual(props)
    expect(wrapper.vm.$options.props.slice.default.call()).toEqual({})
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.posts).toEqual(testResultData)
    expect(wrapper).toMatchSnapshot()
  })
})
