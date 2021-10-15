import { render, screen } from '@testing-library/vue'
import About from '@/components/Cases/citycam/About.vue'
import '../../../__mocks__/intersectionObserverMock'

const aboutText = 'Keeping up with the technological evolution, Mad Devs undertook the development of a new-generation intersection monitoring system for a company called CityCam. The system’s purpose is to let anyone monitor traffic in a city in real time. Traffic monitoring can help prevent congestion, and overall, it makes transportation safer and faster. The project, known internally as Microphotographer, was largely about hardware and featured two major parts: engineering the camera device with backend for it and building an application with frontend and backend.'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('About component', () => {
  it('should render correctly', () => {
    const { container } = render(About, { mocks })

    expect(container).toMatchSnapshot()
  })

  it('should render text correctly', () => {
    render(About, { mocks })
    expect(screen.getByText(aboutText).className).toBeTruthy()
  })
})
