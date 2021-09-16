import { render, screen } from '@testing-library/vue'
import ToolsGrid from '@/prismicSlices/pageParts/TechnologiesAndTools/variations/ToolsGrid'
import { getFakePropsByParams } from '../testUtils'

const directives = {
  'lazy-load': () => {},
}

const apiData = {
  animation: 'fade-up',
}

const items = [
  {
    image: {
      url: 'url',
    },
    text: 'text',
  },
]

describe('ToolsGrid slice data-aos animation attribute', () => {
  it('should render correctly with data', () => {
    const props = getFakePropsByParams(apiData)
    props.slice.items = [...items]

    const { container } = render(ToolsGrid, {
      directives,
      props,
    })

    expect(screen.getAllByTestId('tools-slice-technology')).toHaveLength(items.length)
    expect(container).toMatchSnapshot()
  })

  it('should render correctly without data', () => {
    const { container } = render(ToolsGrid, {
      directives,
      props: getFakePropsByParams({}),
    })

    expect(screen.queryByTestId('tools-slice-technology')).toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should be fade-up value', () => {
    render(ToolsGrid, {
      directives,
      props: getFakePropsByParams(apiData),
    })

    expect(screen.getByTestId('tools-slice-container').getAttribute('data-aos')).toBe(apiData.animation)
  })

  it('should be null value', () => {
    render(ToolsGrid, {
      directives,
      props: getFakePropsByParams({}),
    })

    expect(screen.getByTestId('tools-slice-container').getAttribute('data-aos')).toBeNull()
  })
})
