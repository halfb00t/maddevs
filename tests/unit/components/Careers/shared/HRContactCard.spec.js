import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import HRContactCard from '@/components/Careers/shared/HRContactCard'
import { emailClickEvent } from '@/analytics/events'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
  $t: () => 'translated',
}

const directives = {
  'lazy-load': () => {},
}

jest.mock('~/helpers/generatorUid')

const emailClick = jest.spyOn(emailClickEvent, 'send')
  .mockImplementation(() => {
  })

describe('HRContactCard', () => {
  it('is a Vue instance', () => {
    const { container } = render(HRContactCard, {
      mocks,
      directives,
    })
    expect(container).toMatchSnapshot()
  })

  it('should correct send event to analytic (click to email)', () => {
    const wrapper = shallowMount(HRContactCard, {
      mocks,
      directives,
    })
    const link = wrapper.find('a')
    link.trigger('click')
    expect(emailClick)
      .toHaveBeenCalledTimes(1)
  })
})
