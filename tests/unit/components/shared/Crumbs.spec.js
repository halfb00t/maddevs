import { shallowMount } from '@vue/test-utils'
import Crumbs from '@/components/shared/Crumbs'

const stubs = ['NuxtLink']

describe('Crumbs component', () => {
  it('should correctly return data, when length of array greater or equal 2', () => {
    const wrapper = shallowMount(Crumbs, {
      mocks: {
        $route: {
          fullPath: '/blog/best-time-tracking-tools/',
        },
      },
      stubs,
    })

    expect(wrapper.vm.crumbs).toEqual([{ to: '/blog/', title: 'Blog' }, { to: '/undefined/best-time-tracking-tools/', title: 'Best time tracking tools' }])
    expect(wrapper).toMatchSnapshot()
  })

  it('should correctly hide data, when length of array less than 2', () => {
    const wrapper = shallowMount(Crumbs, {
      mocks: {
        $route: {
          fullPath: '/software-testing/',
        },
      },
      stubs,
    })

    expect(wrapper.vm.crumbs).toEqual([])
    expect(wrapper).toMatchSnapshot()
  })
})
