import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import Banner from '@/components/Careers/Banner'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
  $t: () => 'translated',
  $i18n: {
    locale: 'en',
    setLocale: jest.fn(),
  },
}

const store = {
  getters: {
    currentLanguage: () => 'en',
  },
}

describe('Banner component', () => {
  it('should render correctly', () => {
    const { container } = render(Banner, {
      mocks,
      store,
    })

    expect(container).toMatchSnapshot()
  })

  it('if call changeLocale should return locale "ru"', () => {
    const wrapper = shallowMount(Banner, {
      mocks,
      store,
    })
    wrapper.vm.changeLocale()

    expect(wrapper.vm.changeLocale()).toBe('ru')
  })
})
