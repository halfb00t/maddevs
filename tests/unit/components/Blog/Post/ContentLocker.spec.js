import 'regenerator-runtime'
import {
  render, fireEvent, screen, waitFor,
} from '@testing-library/vue'
import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import ContentLocker from '@/components/Blog/Post/ContentLocker'

const localVue = createLocalVue()
localVue.use(Vuex)

const directives = {
  'lazy-load': () => {},
}

const store = {
  getters: {
    showContentLocker: () => true,
  },

  actions: {
    changeContentLockerDisplay: () => jest.fn(),
  },
}

describe('ContentLocker component', () => {
  it('should correctly render', () => {
    const { container } = render(ContentLocker, {
      directives,
      store,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly render modal', async () => {
    jest.spyOn(global, 'setTimeout').mockImplementation(handler => handler())
    render(ContentLocker, {
      mocks: {
        $v: {
          name: '',
          $reset: () => {},
          validationGroup: {
            $invalid: false,
          },
        },
      },
      directives,
      store,
    })

    await fireEvent.scroll(document, { target: { scrollY: 100 } })

    await waitFor(() => {
      const modal = screen.getByTestId('content-locker-modal-content')
      expect(modal).toBeTruthy()
    })
  })
})
