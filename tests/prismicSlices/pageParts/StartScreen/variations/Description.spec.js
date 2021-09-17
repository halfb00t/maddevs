import { render, screen } from '@testing-library/vue'
import Description from '@/prismicSlices/pageParts/StartScreen/variations/Description'
import { getFakePropsByParams } from '../testsUtils'

const apiData = {
  title: 'Description title',
  subtitle: 'Description subtitle',
}

describe('Description slice', () => {
  it('should render correctly with data', () => {
    const { container } = render(Description, {
      props: getFakePropsByParams(apiData),
    })

    expect(screen.getByText(apiData.title)).not.toBeNull()
    expect(screen.getByText(apiData.subtitle)).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should render correctly without data', () => {
    const { container } = render(Description, {
      props: getFakePropsByParams({}),
    })

    expect(screen.queryByTestId('description-slice__title')).not.toBeNull()
    expect(screen.queryByTestId('description-slice__subtitle')).toBeNull()
    expect(container).toMatchSnapshot()
  })
})
