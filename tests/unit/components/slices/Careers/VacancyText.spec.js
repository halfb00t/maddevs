import { render } from '@testing-library/vue'
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
      stubs,
      props,
    })

    expect(container).toMatchSnapshot()
  })
})
