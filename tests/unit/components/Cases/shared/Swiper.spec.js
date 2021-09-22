import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import Swiper from '@/components/Cases/shared/Swiper'

const props = {
  components: [
    {
      fileName: 'admin',
      pictureFolder: 'nambafood',
      fileExtension: 'jpg',
    },
    {
      fileName: 'dashboard',
      pictureFolder: 'nambafood',
      fileExtension: 'jpg',
    },
  ],
  boxShadow: true,
  sliderDescription: 'some-description',
  safariTopBar: '',
  safariTopBarImage: '',
  safariTopBarAlt: '',
}

const stubs = ['Picture']

describe('Swiper component', () => {
  const wrapper = shallowMount(Swiper, {
    props,
    stubs,
  })

  it('should render correctly', () => {
    const { container } = render(Swiper, {
      props,
      stubs,
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
    })
    expect(container).toMatchSnapshot()
  })

  it('Should correct display description', () => {
    const { html } = render(Swiper, {
      props,
      stubs,
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
    })

    expect(html()).toContain(props.sliderDescription)
  })

  it('if call method removeLazy > data lazy will be false', () => {
    expect(wrapper.vm.lazy).toBeTruthy()
    wrapper.vm.removeLazy()
    expect(wrapper.vm.lazy).toBeFalsy()
  })
})
