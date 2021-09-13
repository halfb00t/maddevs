import 'regenerator-runtime'
import {
  render, fireEvent, screen, waitFor,
} from '@testing-library/vue'
import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import ContentLocker from '@/components/Blog/Post/ContentLocker'

const directives = {
  'lazy-load': () => {},
}

const localVue = createLocalVue()
localVue.use(Vuex)

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
      store,
      stubs: ['ModalContentLocker'],
      directives,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly working when showContentLocker vuex value is true', async () => {
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
        stubs: ['ModalContentLocker'],
      },
      store,
      directives,
    })

    await fireEvent.scroll(document, { target: { scrollY: 100 } })

    await waitFor(() => {
      const modal = screen.getByTestId('content-locker-modal-content')
      expect(modal).toBeTruthy()
    })
  })

  it('should correctly working when showContentLocker vuex value is false', async () => {
    jest.spyOn(global, 'setTimeout')

    const localStore = {
      ...store,
      getters: {
        showContentLocker: () => false,
      },
    }

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
      stubs: ['ModalContentLocker'],
      store: localStore,
    })

    await fireEvent.scroll(document, { target: { scrollY: 100 } })

    await waitFor(() => {
      const modal = screen.queryByTestId('content-locker-modal-content')
      expect(global.setTimeout).not.toHaveBeenCalled()
      expect(modal).toBeNull()
    })
  })
})
