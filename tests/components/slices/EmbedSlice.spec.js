import 'regenerator-runtime'
import { render, screen } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import EmbedSlice from '@/components/slices/EmbedSlice'

const directives = {
  'lazy-load': () => {},
}

const resizeWindow = width => {
  global.innerWidth = width
  window.dispatchEvent(new Event('resize'))
}

const apiData = {
  embed: {
    type: 'link',
    title: 'title',
    html: 'html',
    url: 'url',
    thumbnail_url: 'url',
  },
  embed_title: 'Embed title',
  embed_description: 'Embed description',
}

const getProps = params => ({
  slice: {
    primary: {},
    items: [
      { ...params },
    ],
  },
})

describe('EmbedSlice component', () => {
  it('should render correctly with embed link', () => {
    const { container } = render(EmbedSlice, {
      directives,
      stubs: ['PrismicEmbed', 'Component'],
      props: getProps(apiData),
    })

    expect(screen.queryByTestId('embed__image')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with embed video', () => {
    const props = getProps(apiData)
    props.slice.items[0].embed.type = 'video'

    const { container } = render(EmbedSlice, {
      directives,
      stubs: ['PrismicEmbed', 'Component'],
      props,
    })

    expect(screen.queryByTestId('embed__image')).toBeNull()
    expect(container).toMatchSnapshot()
  })

  describe('isTag computed method', () => {
    it('should return data for embed link', () => {
      const props = getProps(apiData)
      props.slice.items[0].embed.type = 'link'

      const wrapper = shallowMount(EmbedSlice, {
        directives,
        stubs: ['PrismicEmbed', 'Component'],
        propsData: props,
      })

      const expectedData = {
        is: 'a',
        target: '_blank',
        href: apiData.embed.url,
        class: 'embed__link',
      }

      expect(wrapper.vm.isTag).toEqual(expectedData)
    })

    it('should return data for embed video', () => {
      const props = getProps(apiData)
      props.slice.items[0].embed.type = 'video'

      const wrapper = shallowMount(EmbedSlice, {
        directives,
        stubs: ['PrismicEmbed', 'Component'],
        propsData: props,
      })

      const expectedData = {
        is: 'div',
        class: 'embed__video',
      }

      expect(wrapper.vm.isTag).toEqual(expectedData)
    })
  })

  describe('embedImage data key', () => {
    it('should have params for window.innerWidth > 1024px', () => {
      const props = getProps(apiData)
      props.slice.items[0].embed.type = 'link'

      const wrapper = shallowMount(EmbedSlice, {
        directives,
        stubs: ['PrismicEmbed', 'Component'],
        propsData: props,
      })

      resizeWindow(1025)
      expect(wrapper.vm.embedImage.url).toBe(`${apiData.embed.thumbnail_url}?w=400&h=218`)
      expect(wrapper.vm.embedImage.width).toBe('200')
      expect(wrapper.vm.embedImage.height).toBe('109')
    })

    it('should have params for window.innerWidth < 1024px', () => {
      const props = getProps(apiData)
      props.slice.items[0].embed.type = 'link'

      const wrapper = shallowMount(EmbedSlice, {
        directives,
        stubs: ['PrismicEmbed', 'Component'],
        propsData: props,
      })

      resizeWindow(1022)
      expect(wrapper.vm.embedImage.url).toBe(`${apiData.embed.thumbnail_url}?w=1164&h=632`)
      expect(wrapper.vm.embedImage.width).toBe('582')
      expect(wrapper.vm.embedImage.height).toBe('316')
    })
  })

  describe('embedFieldData data key', () => {
    it('should return html for embed link', () => {
      const props = getProps(apiData)
      props.slice.items[0].embed.type = 'link'

      const wrapper = shallowMount(EmbedSlice, {
        directives,
        stubs: ['PrismicEmbed', 'Component'],
        propsData: props,
      })

      expect(wrapper.vm.embedFieldData.html.includes('embed__title')).toBeTruthy()
      expect(wrapper.vm.embedFieldData.html.includes('iframe')).toBeFalsy()
    })

    it('should return html for embed video', () => {
      const props = getProps(apiData)
      props.slice.items[0].embed.type = 'video'
      props.slice.items[0].embed.html = 'iframe'

      const wrapper = shallowMount(EmbedSlice, {
        directives,
        stubs: ['PrismicEmbed', 'Component'],
        propsData: props,
      })

      expect(wrapper.vm.embedFieldData.html).toBe('iframe')
      expect(wrapper.vm.embedFieldData.html.includes('embed__title')).toBeFalsy()
    })
  })
})
