import { render, screen } from '@testing-library/vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import TeamCards from '@/prismicSlices/pageParts/TeamCards'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'
import { linkedinUserClickEvent } from '@/analytics/events'

const apiData = {
  animation: 'fade-up',
  items: [
    {
      isHover: true,
      hoverImage: {
        url: 'https://yandex.ru/',
        alt: 'Text Alt',
      },
      name: 'Uncle Bob',
      image: {
        url: 'https://google.com/',
        alt: 'Alt text',
      },
      position: 'Senior',
      linkedin: {
        url: 'https://linkedin.com/bob/',
      },
    },
    {
      name: 'Alice',
      image: {
        url: 'https://yandex.ru/',
        alt: 'Text Alt',
      },
      position: 'Team Lead',
      linkedin: {
        url: 'https://linkedin.com/alice/',
      },
    },
  ],
}

const getProps = params => ({
  slice: {
    primary: {
      ...params,
    },
    items: [...params?.items],
  },
})

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

jest.mock('~/helpers/generatorUid')

const linkedinUserClick = jest.spyOn(linkedinUserClickEvent, 'send')
  .mockImplementation(() => {
  })

describe('TeamCards slice', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(TeamCards, {
      propsData: getProps({
        ...apiData,
        background: 'white',
      }),
      localVue,
    })
  })

  afterEach(() => {
    wrapper = null
  })

  it('should render correctly', () => {
    const { container } = render(TeamCards, {
      propsData: getProps({
        ...apiData,
        background: 'white',
      }),
      localVue,
    })
    expect(screen.queryAllByText('Uncle Bob')).not.toBeNull()
    expect(screen.queryAllByText('Alice')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with data', async () => {
    render(TeamCards, {
      propsData: getProps({
        ...apiData,
        background: 'white',
      }),
      localVue,
    })
    const img = screen.getAllByTestId('item-img')[0]
    expect(img.getAttribute('src')).toEqual('https://google.com/')
  })

  it('should correctly return default empty props', () => {
    expect(wrapper.vm.$options.props.slice.default.call()).toEqual({})
  })

  it('should correctly work send linkedin event', () => {
    wrapper.find('a[rel="nofollow"]').trigger('click')
    expect(linkedinUserClick).toHaveBeenCalledTimes(1)
  })

  it('should correctly work toggleImageHandle', () => {
    wrapper.find('.meet-our-experts__expert-item').trigger('mouseenter')
    wrapper.find('.meet-our-experts__expert-item').trigger('mouseenter')
    wrapper.find('.meet-our-experts__expert-item').trigger('mouseenter')
    expect(wrapper.vm.hoverCount).toBe(3)
    expect(wrapper.vm.alreadyAnimated).toBeTruthy()
  })
})
