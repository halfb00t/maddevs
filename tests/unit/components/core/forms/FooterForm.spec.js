import { render } from '@testing-library/vue'
import FooterForm from '@/components/core/forms/FooterForm'

const stubs = ['BaseForm', 'ModalSuccess']

jest.mock('~/helpers/generatorUid')

describe('FooterForm', () => {
  global.$nuxt = {
    $route: {
      name: '/',
    },
  }

  it('should render correctly', () => {
    const { container } = render(FooterForm, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
