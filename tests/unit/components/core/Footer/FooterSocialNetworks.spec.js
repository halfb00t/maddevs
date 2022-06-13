import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import FooterSocialNetworks from '@/components/core/Footer/FooterSocialNetworks'
import { socialNetworkClickEvent } from '@/analytics/events'

const directives = { 'lazy-load': jest.fn() }

jest.mock('~/helpers/generatorUid')
const emailClick = jest.spyOn(socialNetworkClickEvent, 'send')
  .mockImplementation(() => {
  })

describe('FooterNavbarColumn', () => {
  it('should correct render footer social networks', () => {
    const { container } = render(FooterSocialNetworks, { directives })
    expect(container)
      .toMatchSnapshot()
  })
  it('should correct emmit footer social network link event to analytic', () => {
    const wrapper = shallowMount(FooterSocialNetworks, { directives })
    const link = wrapper.find('.footer__social-network-link')
    link.trigger('click')
    expect(emailClick)
      .toHaveBeenCalledTimes(1)
  })
})
