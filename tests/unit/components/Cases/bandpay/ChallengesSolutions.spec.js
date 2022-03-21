import { render, screen } from '@testing-library/vue'
import { mount } from '@vue/test-utils'
import ChallengesSolutions from '@/components/Cases/bandpay/ChallengesSolutions'
import '../../../__mocks__/intersectionObserverMock'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const directives = {
  'mad-parallax': () => {},
  'lazy-load': () => {},
}

describe('BandPay ChallengesSolutions component', () => {
  it('should render correctly', () => {
    const { container } = render(ChallengesSolutions, {
      mocks,
      directives,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(ChallengesSolutions, {
      mocks,
      directives,
    })

    expect(screen.getByText(/Challenges & solutions/i).className).toBeTruthy()
  })

  it('should render main paragraphs', () => {
    const wrapper = mount(ChallengesSolutions, {
      mocks,
      directives,
    })

    const paragraphs = wrapper.findAll('.m-48_bottom .case_paragraph')
    expect(paragraphs).toHaveLength(2)
  })

  it('should render parallax cards', () => {
    const wrapper = mount(ChallengesSolutions, {
      mocks,
      directives,
    })

    const parallaxCards = wrapper.findAll('.card-content')
    expect(parallaxCards).toHaveLength(6)
  })

  it('should render icons into parallax cards', () => {
    render(ChallengesSolutions, {
      mocks,
      directives,
    })

    screen.getAllByAltText('Icon').forEach(item => {
      expect(item.getAttribute('data-src')).toBe(mocks.$getMediaFromS3())
      expect(item.getAttribute('width')).toBe('51.94')
      expect(item.getAttribute('height')).toBe('51.94')
    })
  })
})
