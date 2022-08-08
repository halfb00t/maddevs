import { render, screen, fireEvent } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import ProjectGoals from '../../../../../../client/components/Cases/lido/blocks/ProjectGoals'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('Lido ProjectGoals component', () => {
  const arrayWithElements = []
  const containerToRender = document.createElement('div')
  containerToRender.setAttribute('id', 'terminology')
  arrayWithElements.push(containerToRender)

  Object.defineProperty(document, 'getElementById', {
    // eslint-disable-next-line array-callback-return
    value: id => arrayWithElements.find(item => item.id === id),
  })

  it('should correctly render component', () => {
    const { container } = render(ProjectGoals, {
      mocks,
      localVue,
    })

    expect(container)
      .toMatchSnapshot()
  })

  it('should correctly work goToTerminology method', async () => {
    const scrollIntoViewMock = jest.fn()
    window.HTMLDivElement.prototype.scrollIntoView = scrollIntoViewMock

    render(ProjectGoals, {
      mocks,
      localVue,
    })

    const anchorLink = screen.getByTestId('anchor-link')
    await fireEvent.click(anchorLink)

    expect(scrollIntoViewMock)
      .toHaveBeenCalledTimes(1)
  })
})
