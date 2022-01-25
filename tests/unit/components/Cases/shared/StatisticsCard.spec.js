import { render, screen } from '@testing-library/vue'
import StatisticsCard from '@/components/Cases/shared/StatisticsCard'

const props = {
  headerText: 'test',

  headerTextColor: 'rgb(255, 255, 255)',

  number: 10,

  numberText: '10',
  textBeforeNumber: 'text',
  withoutSpaceBeforeNumber: true,
  withoutSpaceAfterNumber: true,

  name: 'USD',
  numberColor: 'rgb(50, 55, 255)',
  description: 'test buyers',
  icon: {
    name: 'account',
    width: '30px',
    height: '30px',
    folder: 'clutch',
    type: 'svg',
  },
  descriptionColor: 'rgb(255, 255, 50)',

  section: 'test',

  index: 1,
}

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const directives = {
  'lazy-load': () => {},
}

describe('StatisticsCard component', () => {
  it('should render correctly', () => {
    const { container } = render(StatisticsCard, {
      props,
      mocks,
      directives,
    })
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with headerText and no image', () => {
    render(StatisticsCard, {
      props: { ...props, icon: null },
      mocks,
      directives,
    })

    const headerText = screen.queryByText(props.headerText)
    const description = screen.queryByText(props.description)
    const currency = screen.queryByText(props.name)

    expect(headerText).toBeTruthy()
    expect(getComputedStyle(headerText).color).toBe(props.headerTextColor)
    expect(screen.queryByText(props.number)).toBeTruthy()
    expect(description).toBeTruthy()
    expect(getComputedStyle(description).color).toBe(props.descriptionColor)
    expect(currency).toBeTruthy()
    expect(getComputedStyle(currency).color).toBe(props.numberColor)
    expect(screen.queryAllByTestId('test-icon')).toHaveLength(0)
  })
  it('should render correctly without headerText and with image', () => {
    render(StatisticsCard, {
      props: { ...props, icon: null },
      mocks,
      directives,
    })
    expect(screen.queryAllByTestId('test-icon')).toHaveLength(0)
    expect(screen.queryAllByTestId('card-header-text')).toHaveLength(1)
  })
})
