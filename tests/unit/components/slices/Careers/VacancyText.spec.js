import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import VacancyText from '@/components/slices/Careers/VacancyText'

const stubs = ['PrismicRichText']

describe('VacancyText slice component', () => {
  const props = {
    stubs,
    slice: {
      items: [
        {
          text_icon: '☑️',
          text_title: 'Title',
          text_content: 'Content',
        },
      ],
      primary: {},
    },
    htmlSerializer: () => {},
  }

  it('is a Vue instance', () => {
    const { container } = render(VacancyText, {
      props,
    })

    expect(container).toMatchSnapshot()
  })

  it('the htmlSerializer should to be return null', () => {
    const wrapper = shallowMount(VacancyText, {
      propsData: {
        slice: {},
      },
    })
    expect(wrapper.vm.htmlSerializer()).toBeNull()
  })
})
