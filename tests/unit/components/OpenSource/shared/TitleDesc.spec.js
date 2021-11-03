import { shallowMount } from '@vue/test-utils'
import TitleDesc from '@/components/OpenSource/shared/TitleDesc'

describe('TitleDesc component', () => {
  it('should render correctly', () => {
    const wrapper = shallowMount(TitleDesc, {
      propsData: {
        title: 'Test title',
        description: 'Test description',
        textColor: 'white',
      },
    })

    const sectionClassName = wrapper.find('section').classes()[1]
    const title = wrapper.find('h2').text()
    const description = wrapper.find('p').text()

    expect(sectionClassName).toBe('title-desc--white-text')
    expect(title).toBe('Test title')
    expect(description).toBe('Test description')
    expect(wrapper).toMatchSnapshot()
  })

  it('should render correctly without data', () => {
    const wrapper = shallowMount(TitleDesc)

    const sectionClassName = wrapper.find('section').classes()[1]
    const title = wrapper.find('h2').text()

    expect(sectionClassName).toBe('title-desc--black-text')
    expect(title).toBe('')
    expect(wrapper).toMatchSnapshot()
  })
})
