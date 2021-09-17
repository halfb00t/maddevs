import { shallowMount } from '@vue/test-utils'
import CardSupportedGadgets from '@/components/Cases/yourcast/CardSupportedGadgets'

const props = {
  title: 'title',
  width: 0,
  height: 0,
  file: 'macbook-pro',
  alt: 'alt',
}

describe('CardSupportedGadgets component', () => {
  it('should render correctly', () => {
    const wrapper = shallowMount(CardSupportedGadgets, {
      props,
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
    })
    expect(wrapper).toMatchSnapshot()
  })
})
