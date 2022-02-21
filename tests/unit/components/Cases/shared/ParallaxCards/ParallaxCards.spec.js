import { render, screen } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import ParallaxCards from '@/components/Cases/shared/ParallaxCards/ParallaxCards'

const props = {
  dataCards: [{
    title: 'test title',
    descriptions: 'test description',
    icon: 'test-icon',
    alt: 'test-icon',
    folder: 'testFolder',
    iconWidth: 51.94,
    iconHeight: 51.94,
  }, {
    title: 'test title 2',
    descriptions: 'test description 2',
    icon: 'test-icon-2',
    alt: 'test-icon-2',
    folder: 'testFolder',
    iconWidth: 51.94,
    iconHeight: 51.94,
  }, {
    title: 'test title 3',
    descriptions: 'test description 3',
    icon: 'test-icon-3',
    alt: 'test-icon-3',
    folder: 'testFolder',
    iconWidth: 51.94,
    iconHeight: 51.94,
  }, {
    title: 'test title 4',
    descriptions: 'test description 4',
    icon: 'test-icon-4',
    alt: 'test-icon-4',
    folder: 'testFolder',
    iconWidth: 51.94,
    iconHeight: 51.94,
  }],
  startSlice: 2,
}

const directives = {
  'lazy-load': () => {},
  'mad-parallax': () => {},
}

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('ParallaxCards component', () => {
  it('should render correctly', () => {
    const { container } = render(ParallaxCards, {
      props,
      mocks,
      directives,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly render classname', () => {
    const { html } = render(ParallaxCards, {
      props,
      mocks,
      directives,
    })

    expect(screen.getByText(props.dataCards[0].title)).toBeTruthy()
    expect(html()).toContain('parallax_cards')
  })

  it('should return empty array from dataCards props', () => {
    const container = shallowMount(ParallaxCards, {
      props: {
        startSlice: 2,
      },
      mocks,
      directives,
    })

    expect(container.vm.$options.props.dataCards.default.call()).toEqual([])
  })
})
