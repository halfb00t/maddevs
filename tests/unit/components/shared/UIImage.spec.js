import { render } from '@testing-library/vue'

import UIImage from '@/components/shared/UIImage'

const directives = {
  'lazy-load': () => {},
}

describe('UIImage', () => {
  const props = {
    fileName: 'Marat',
    fileNameRetina: 'Marat@2x',
    alt: 'marat',
    width: '1000',
    height: '500',
  }

  it('should render correctly', () => {
    const { container } = render(UIImage, {
      props,
      stubs: ['PrismicImage'],
      directives,
    })

    expect(container).toMatchSnapshot()
  })

  it('correctly props data', () => {
    const { getByTestId } = render(UIImage, {
      props,
      stubs: ['PrismicImage'],
      directives,
    })
    const result = getByTestId('test-multi-image')
    expect(result.width).toBe(Number(props.width))
    expect(result.height).toBe(Number(props.height))
    expect(result.alt).toBe(props.alt)
  })

  it('has class if sectionIsRequired equal true', () => {
    const { container } = render(UIImage, {
      props,
      stubs: ['PrismicImage'],
      directives,
    })
    expect(container.getElementsByTagName('picture')).toBeTruthy()
  })
})
