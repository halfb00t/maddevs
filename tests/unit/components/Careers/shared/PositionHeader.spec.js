import { render } from '@testing-library/vue'
import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import PositionHeader from '@/components/Careers/shared/PositionHeader'
import { writeUsClickEvent } from '@/analytics/events'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  getters: {
    vacancy: () => ({
      title: 'Title',
      subtitle: 'Subtitle',
      labels: {},
      tags: [],
    }),
  },
})

const mocks = {
  $t: () => 'translated',
}

jest.mock('~/helpers/generatorUid')

const writeUsClick = jest.spyOn(writeUsClickEvent, 'send')
  .mockImplementation(() => {
  })

describe('PositionHeader component', () => {
  it('should render correctly', () => {
    const { container } = render(PositionHeader, {
      store,
      mocks,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct send event to analytic (click to email)', () => {
    const wrapper = mount(PositionHeader, {
      store,
      mocks,
      localVue,
    })
    const link = wrapper.find('.careers-position__apply-button')
    link.trigger('click')
    expect(writeUsClick)
      .toHaveBeenCalledTimes(1)
  })
})
