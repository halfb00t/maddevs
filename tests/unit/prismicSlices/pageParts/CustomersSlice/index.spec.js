import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { render, screen } from '@testing-library/vue'
import CustomersSlice from '@/prismicSlices/pageParts/CustomersSlice'

const localVue = createLocalVue()
localVue.use(Vuex)

const actions = {
  getCustomers: () => {},
}

const getters = {
  sortedCursomersByPriority: () => ([
    {
      gallery_image: {
        url: 'https://superpupertest.cdn.prismic.io/superpupertest/8829fbb2-90af-4ded-913c-d503046e5ae7_clutch-black.svg',
        alt: 'Test',
      },
    },
  ]),
}

const store = new Vuex.Store({
  actions,
  getters,
})

const directives = {
  'lazy-load': () => {},
}

const apiData = {
  background: 'black',
  animation: 'fade-up',
}

const getProps = params => ({
  slice: {
    primary: {
      ...params,
    },
  },
})

describe('Custom logo slice', () => {
  it('should render correctly with data', () => {
    const { container } = render(CustomersSlice, {
      directives,
      store,
      props: getProps(apiData),
    })
    expect(screen.getAllByTestId('customer-logo-slice-item')).not.toBe(null)
    expect(container).toMatchSnapshot()
  })
})

describe('Custom logo slice data-aos animation attribute', () => {
  it(`should the data-aos to be '${apiData.animation}'`, () => {
    render(CustomersSlice, {
      directives,
      store,
      props: getProps(apiData),
    })

    expect(screen.getByTestId('customer-logo-slice-container').getAttribute('data-aos')).toBe(apiData.animation)
  })

  it('should the data-aos to be null', () => {
    render(CustomersSlice, {
      directives,
      store,
      props: getProps({}),
    })
    expect(screen.getByTestId('customer-logo-slice-container').getAttribute('data-aos')).toBeNull()
  })
})
