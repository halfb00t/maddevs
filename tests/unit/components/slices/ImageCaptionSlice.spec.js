import { render, screen } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import ImageCaptionSlice from '@/components/slices/ImageCaptionSlice'

const slice = {
  items: [{}],
  primary: {
    image: {
      alt: 'alt text',
      copyright: null,
      dimensions: { height: 298, width: 1200 },
      url:
        'https://images.prismic.io/superpupertest/4b27a325-c48e-4f20-943d-e40537291055_2020-12-08_14-11.png?auto=compress,format&rect=0,0,1231,306&w=1200&h=298',
    },
    caption: 'caption',
  },
  slice_label: 'image-full-width',
  slice_type: 'image_with_caption',
}

const props = {
  slice,
}

const stubs = ['PrismicImage', 'PrismicRichText']

const mocks = {
  $prismic: {
    asText: name => name,
  },
}

const callObject = {
  slice: {
    primary: {
      enablezoom: 'enable',
    },
  },
  $refs: {
    zoom: {
      show: jest.fn(),
    },
  },
}

describe('ImageCaptionSlice component', () => {
  it('should render correct', () => {
    const { container } = render(ImageCaptionSlice, {
      props,
      stubs,
      mocks,
      directives: {
        'lazy-load': () => {},
      },
    })

    expect(container).toMatchSnapshot()
  })

  it('caption rendered', () => {
    render(ImageCaptionSlice, {
      props,
      stubs,
      mocks,
      directives: {
        'lazy-load': () => {},
      },
    })
    expect(screen.getByTestId('test-image-label').outerHTML).toContain(slice.primary.caption)
  })

  it('render class with enabled props', async () => {
    props.slice.primary.enablezoom = 'enable'
    const { html } = render(ImageCaptionSlice, {
      props,
      stubs,
      mocks,
      directives: {
        'lazy-load': () => {},
      },
    })

    expect(html()).toContain('block-img-zoom')
  })

  it('should work correct click handler', () => {
    props.slice.primary.enablezoom = 'enable'
    const wrapper = shallowMount(ImageCaptionSlice, {
      propsData: props,
      stubs,
      mocks,
      directives: {
        'lazy-load': () => {},
      },
    })

    wrapper.vm.$options.methods.openModal.call(callObject)

    expect(callObject.$refs.zoom.show).toHaveBeenCalledTimes(1)
  })

  it('should work correct click handler if zoom not enable', () => {
    props.slice.primary.enablezoom = 'disable'
    const wrapper = shallowMount(ImageCaptionSlice, {
      propsData: props,
      stubs,
      mocks,
      directives: {
        'lazy-load': () => {},
      },
    })

    wrapper.vm.$options.methods.openModal.call(callObject)

    expect(callObject.$refs.zoom.show).toHaveBeenCalledTimes(2)
  })
})
