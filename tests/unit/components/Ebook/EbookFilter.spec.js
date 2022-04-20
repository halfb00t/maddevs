import { render, screen, fireEvent } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import EbookFilter from '@/components/Ebook/EbookFilter'

const props = {
  categories: [
    {
      category: 'Analytics',
    },
    {
      category: 'Agency',
    },
  ],
}

describe('EbookFilter component', () => {
  it('should correctly render component', () => {
    const { container } = render(EbookFilter, {
      props,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly render with empty array categories', () => {
    const wrapper = shallowMount(EbookFilter)

    expect(wrapper.vm.$options.props.categories.default.call()).toEqual([])
  })

  it('should correctly work change category', async () => {
    const $emit = jest.fn()
    render(EbookFilter, {
      props,
      mocks: {
        $emit,
      },
    })

    const input = screen.getAllByTestId('allEbooks')
    await fireEvent.update(input[1], 'Analytics')
    expect($emit).toHaveBeenCalledWith('onChangeCategory', 'Analytics')
  })

  it('should correctly work button open filter list', async () => {
    const wrapper = shallowMount(EbookFilter, {
      props,
    })

    const button = wrapper.find('.filter__title--btn')
    button.trigger('click')
    expect(wrapper.vm.$refs.filterList.classList.contains('filter__list--active')).toBeTruthy()
    expect(wrapper.vm.$refs.arrowSvg.classList.contains('filter__title-arrow--active')).toBeTruthy()
  })
})
