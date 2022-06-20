import { render } from '@testing-library/vue'
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
})
