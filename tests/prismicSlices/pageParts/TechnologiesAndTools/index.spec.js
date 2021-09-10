import { render, screen, fireEvent } from '@testing-library/vue'
import { categories, technologies } from '@/data/technologiesAndTools'
import TechnologiesAndTools from '@/prismicSlices/pageParts/TechnologiesAndTools'

const directives = {
  'lazy-load': () => {},
}

const apiData = {
  title: 'Title',
  animation: 'fade-up',
}

const getProps = params => ({
  slice: {
    primary: {
      ...params,
    },
  },
})

const data = () => ({
  categories,
  technologies,
})

describe('TechnologiesAndTools slice', () => {
  it('should render the title correctly with data', () => {
    const { container } = render(TechnologiesAndTools, {
      directives,
      data,
      props: getProps(apiData),
    })

    expect(screen.getByText(apiData.title)).not.toBeNull()
    expect(screen.getByText('Ansible')).not.toBeNull()
    expect(screen.getAllByTestId('technologies-slice-category')).toHaveLength(data().categories.length)
    expect(screen.getAllByTestId('technologies-slice-technology')).toHaveLength(data().technologies.length)
    expect(container).toMatchSnapshot()
  })

  it('should render correctly the title without data', () => {
    const { container } = render(TechnologiesAndTools, {
      directives,
      props: getProps({}),
      data: () => ({
        categories: [],
        technologies: [],
      }),
    })

    expect(screen.getByTestId('technologies-slice-title').textContent).toContain('Technologies & Tools')
    expect(screen.queryByText('Ansible')).toBeNull()
    expect(screen.queryByTestId('technologies-slice-category')).toBeNull()
    expect(screen.queryByTestId('technologies-slice-technology')).toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should correctly detect click handler', async () => {
    const { html } = render(TechnologiesAndTools, {
      directives,
      data,
      props: getProps(apiData),
    })

    const categoryCheckboxes = screen.getAllByTestId('technologies-slice-category')
    await fireEvent.click(categoryCheckboxes[0])
    expect(html()).toContain('<div class="technologies-slice__categories technologies-slice__categories--devops">')
    await fireEvent.click(categoryCheckboxes[0])
    expect(html()).not.toContain('<div class="technologies-slice__categories technologies-slice__categories--devops">')
  })

  describe('data-aos animation attribute', () => {
    it('should be fade-up value', () => {
      render(TechnologiesAndTools, {
        directives,
        props: getProps(apiData),
      })

      expect(screen.getByTestId('technologies-slice-container').getAttribute('data-aos')).toBe(apiData.animation)
    })

    it('should be null value', () => {
      render(TechnologiesAndTools, {
        directives,
        props: getProps({}),
      })

      expect(screen.getByTestId('technologies-slice-container').getAttribute('data-aos')).toBeNull()
    })
  })
})
