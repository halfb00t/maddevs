import { render, screen } from '@testing-library/vue'
import MeetOurExperts from '@/components/About/MeetOurExperts'

const directives = {
  'lazy-load': () => {},
}

const stubs = ['UIImage']

describe('MeetOurExperts', () => {
  it('is a Vue instance', () => {
    const { container } = render(MeetOurExperts, {
      stubs,
      directives,
    })
    expect(screen.getByText('Meet our experts')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('correctly length of elements in DOM', () => {
    const { container } = render(MeetOurExperts, {
      stubs,
      directives,
    })
    expect(container.querySelectorAll('.meet-our-experts__expert-item')).toHaveLength(8)
  })
})
