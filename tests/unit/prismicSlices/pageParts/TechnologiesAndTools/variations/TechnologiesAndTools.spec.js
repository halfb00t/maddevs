import { render, screen, fireEvent } from '@testing-library/vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import lazyLoad from 'nuxt-lazy-load'
import { categories, technologies } from '@/data/technologiesAndTools'
import ToolsGridMain from '@/prismicSlices/pageParts/TechnologiesAndTools/variations/TechnologiesAndTools'
import { getFakePropsByParams } from '../testUtils'

const directives = {
  'lazy-load': () => {},
}

const apiData = {
  title: 'Title',
  animation: 'fade-up',
}

const data = () => ({
  categories,
  technologies,
})

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('ToolsGridMain slice', () => {
  it('should render the title correctly with data', () => {
    const { container } = render(ToolsGridMain, {
      directives,
      data,
      props: getFakePropsByParams(apiData),
    })

    expect(screen.getByText(apiData.title)).not.toBeNull()
    expect(screen.getByText('Ansible')).not.toBeNull()
    expect(screen.getAllByTestId('technologies-slice-category')).toHaveLength(data().categories.length)
    expect(screen.getAllByTestId('technologies-slice-technology')).toHaveLength(data().technologies.length)
    expect(container).toMatchSnapshot()
  })

  it('should render correctly the title without data', () => {
    const { container } = render(ToolsGridMain, {
      directives,
      props: getFakePropsByParams({}),
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
    const { html } = render(ToolsGridMain, {
      directives,
      data,
      props: getFakePropsByParams(apiData),
    })

    const categoryCheckboxes = screen.getAllByTestId('technologies-slice-category')
    await fireEvent.click(categoryCheckboxes[0])
    expect(html()).toContain('<div class="technologies-slice__categories technologies-slice__categories--devops">')
    await fireEvent.click(categoryCheckboxes[0])
    expect(html()).not.toContain('<div class="technologies-slice__categories technologies-slice__categories--devops">')
  })

  it('should correctly return default props', () => {
    const wrapper = shallowMount(ToolsGridMain, {
      propsData: getFakePropsByParams({}),
      localVue,
    })

    expect(wrapper.vm.$options.props.slice.default.call()).toEqual({})
  })

  describe('data-aos animation attribute', () => {
    it('should be fade-up value', () => {
      render(ToolsGridMain, {
        directives,
        props: getFakePropsByParams(apiData),
      })

      expect(screen.getByTestId('technologies-slice-container').getAttribute('data-aos')).toBe(apiData.animation)
    })

    it('should be null value', () => {
      render(ToolsGridMain, {
        directives,
        props: getFakePropsByParams({}),
      })

      expect(screen.getByTestId('technologies-slice-container').getAttribute('data-aos')).toBeNull()
    })
  })
})
