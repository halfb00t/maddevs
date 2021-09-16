import { render, screen } from '@testing-library/vue'
import ToolsGrid from '@/prismicSlices/pageParts/TechnologiesAndTools/variations/ToolsGrid'

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

const getProps = params => ({
  slice: {
    primary: {
      ...params,
    },
  },
})

describe('ToolsGrid slice data-aos animation attribute', () => {
  it('should render correctly with data', () => {
    const props = getProps(apiData)
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
      props: getProps({}),
    })

    expect(screen.queryByTestId('tools-slice-technology')).toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should be fade-up value', () => {
    render(ToolsGrid, {
      directives,
      props: getProps(apiData),
    })

    expect(screen.getByTestId('tools-slice-container').getAttribute('data-aos')).toBe(apiData.animation)
  })

  it('should be null value', () => {
    render(ToolsGrid, {
      directives,
      props: getProps({}),
    })

    expect(screen.getByTestId('tools-slice-container').getAttribute('data-aos')).toBeNull()
  })
})
