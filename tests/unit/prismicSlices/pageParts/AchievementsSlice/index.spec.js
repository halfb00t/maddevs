import { render, screen } from '@testing-library/vue'
import AchievementsSlice from '@/prismicSlices/pageParts/AchievementsSlice'

const props = {
  slice: {
    items: [
      {
        image: {
          url: 'https://www.example.com/image.jpg',
          alt: 'Image alt text',
        },
        description: 'Achievements description',
        width: '100',
        height: '100',
      },
    ],
  },
}

const directives = {
  'lazy-load': () => {},
}

describe('AchievementsSlice.vue', () => {
  it('should render correctly with data', () => {
    const { container } = render(AchievementsSlice, {
      props,
      directives,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render correctly with no data', () => {
    const { container } = render(AchievementsSlice, {
      props: {
        slice: {},
      },
      directives,
    })

    expect(container).toMatchSnapshot()
    expect(screen.queryByTestId('achieve-block')).toBeNull()
  })
})
