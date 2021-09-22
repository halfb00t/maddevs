import { render } from '@testing-library/vue'
import SingleImage from '@/prismicSlices/pageParts/SingleImage'

const apiData = {
  image: {
    url: 'url',
  },
  title: 'title',
  text: 'text',
  subtitle: 'subtitle',
}

const getFakePropsParams = params => ({
  slice: {
    primary: {
      ...params,
    },
  },
})

describe('SingleImage slice', () => {
  it('should correctly render with data', () => {
    const { container } = render(SingleImage, {
      props: getFakePropsParams(apiData),
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly render without data', () => {
    const { container } = render(SingleImage, {
      props: getFakePropsParams({}),
    })

    expect(container).toMatchSnapshot()
  })
})
