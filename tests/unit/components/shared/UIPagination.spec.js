import { fireEvent, render, screen } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import UIPagination from '@/components/shared/UIPagination'

const props = {
  maxVisibleButtons: 3,
  totalPages: 4,
  perPage: 6,
  currentPage: 1,
}

describe('UIPagination component', () => {
  let wrapper

  afterEach(() => {
    wrapper = null
  })

  it('should correctly render component', () => {
    const { container } = render(UIPagination, {
      props,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly return computed method', () => {
    props.currentPage = 4
    wrapper = shallowMount(UIPagination, {
      propsData: props,
    })

    expect(wrapper.vm.startPage).toBe(2)
  })

  it('should correctly return startPage computed', () => {
    props.currentPage = 5
    wrapper = shallowMount(UIPagination, {
      propsData: props,
    })

    expect(wrapper.vm.startPage).toBe(4)
  })

  it('should correctly render with totalPages < 3', () => {
    props.currentPage = 1
    props.totalPages = 2

    wrapper = shallowMount(UIPagination, {
      propsData: props,
    })

    expect(wrapper.vm.pages).toHaveLength(props.totalPages)
  })

  it('should correctly click to prev page', () => {
    const $emit = jest.fn()
    props.currentPage = 2

    wrapper = shallowMount(UIPagination, {
      propsData: props,
      mocks: {
        $emit,
      },
    })

    const buttons = wrapper.find('.pagination__list-arrow-btn')
    buttons.trigger('click')
    expect($emit).toHaveBeenCalledWith('pageChanged', 1)
  })

  it('should correctly click to next page', async () => {
    const $emit = jest.fn()
    props.currentPage = 1
    render(UIPagination, {
      propsData: props,
      mocks: {
        $emit,
      },
    })

    const nextBtn = screen.getByTestId('text-next-btn')
    await fireEvent.click(nextBtn)
    expect($emit).toHaveBeenCalledWith('pageChanged', 2)
  })

  it('should correctly click to page', () => {
    const $emit = jest.fn()
    wrapper = shallowMount(UIPagination, {
      propsData: props,
      mocks: {
        $emit,
      },
    })

    const buttons = wrapper.findAll('.pagination__list-pages-btn')
    buttons.at(1).trigger('click')
    expect($emit).toHaveBeenCalledWith('pageChanged', 2)
  })
})
