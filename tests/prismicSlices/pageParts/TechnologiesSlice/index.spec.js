import { render, screen } from '@testing-library/vue'
import TechnologiesAndTools from '@/prismicSlices/pageParts/TechnologiesSlice'

const directives = {
  'lazy-load': () => {},
}

const apiData = {
  title: 'TechnologiesAndTools title',
  animation: 'fade-up',
}

const data = () => ({
  categories: [
    'DevOps',
    'QA',
    'Backend',
    'Frontend',
  ],

  technologies: [
    {
      title: 'Ansible',
      value: 'ansible',
      category: 'devops',
    },
    {
      title: 'Terraform',
      value: 'terraform',
      category: 'devops',
    },
    {
      title: 'CloudFormation',
      value: 'cloud-formation',
      category: 'devops',
    }],
})

const getProps = params => ({
  slice: {
    primary: {
      ...params,
    },
  },
})

describe('TechnologiesAndTools slice', () => {
  it('should render the title correctly with data', () => {
    const { container } = render(TechnologiesAndTools, {
      props: getProps(apiData),
      directives,
    })

    expect(screen.getByText(apiData.title)).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should render correctly the title without data', () => {
    const { container } = render(TechnologiesAndTools, {
      props: getProps({}),
      directives,
    })

    expect(screen.queryByTestId('technologies-slice__title').textContent).toContain('Technologies & Tools')
    expect(container).toMatchSnapshot()
  })

  describe('data-aos animation attribute', () => {
    it(`should be '${apiData.animation}'`, () => {
      render(TechnologiesAndTools, {
        data,
        props: getProps(apiData),
        directives,
      })

      expect(screen.getByTestId('container').getAttribute('data-aos')).toBe(apiData.animation)
    })

    it('should be null', () => {
      render(TechnologiesAndTools, {
        data,
        props: getProps({}),
        directives,
      })

      expect(screen.getByTestId('container').getAttribute('data-aos')).toBeNull()
    })
  })

  it('should render correctly technologies with data', () => {
    const { container } = render(TechnologiesAndTools, {
      data,
      props: getProps(apiData),
      directives,
    })

    expect(screen.getAllByTestId('technologies-slice__category')).toHaveLength(data().categories.length)
    expect(screen.getAllByTestId('technologies-slice__technology')).toHaveLength(data().technologies.length)
    expect(container).toMatchSnapshot()
  })
})
