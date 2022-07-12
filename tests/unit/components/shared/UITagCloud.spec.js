import { render } from '@testing-library/vue'
import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import UITagCloud from '@/components/shared/UITagCloud'

const localVue = createLocalVue()
localVue.use(Vuex)

const getters = {
  tags: () => [{ tagName: 'Editors pick' }, { tagName: 'Python' }],
  activeTags: () => ['Python'],
}

const actions = {
  changeActiveTags: jest.fn(),
  deleteActiveTag: jest.fn(),
  getTagsFromPrismic: jest.fn(),
  clearAllData: jest.fn(),
}

let store = new Vuex.Store({
  getters,
  actions,
})

describe('UITagCloud component', () => {
  it('should correctly render component', async () => {
    const { container } = render(UITagCloud, {
      localVue,
      store,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly work handleInputChange', async () => {
    const wrapper = await mount(UITagCloud, {
      localVue,
      store,
    })

    const tagInput = wrapper.findAll('input')
    await tagInput.at(0).trigger('change')
    expect(actions.changeActiveTags).toHaveBeenCalledTimes(1)
    await tagInput.at(1).trigger('change')
    expect(actions.deleteActiveTag).toHaveBeenCalledTimes(1)
  })

  it('should correctly return empty from tagsCategories computed', () => {
    getters.tags = () => []

    store = new Vuex.Store({
      getters,
      actions,
    })
    const wrapper = mount(UITagCloud, {
      localVue,
      store,
    })

    expect(wrapper.vm.tagsCategories).toHaveLength(0)
  })
})
