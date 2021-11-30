import { shallowMount } from '@vue/test-utils'
import Error from '@/layouts/error.vue'

const stubs = ['NuxtLink']

const mocks = {
  $getMediaFromS3: image => image,
}

describe('Error layout', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Error, {
      stubs,
      mocks,
    })
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
