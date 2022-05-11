import { fireEvent, render, screen } from '@testing-library/vue'
import FileInput from '@/components/Careers/shared/FileInput'

const file = new File([new ArrayBuffer(1)], 'file.pdf')
const fileWithLongName = new File(
  [new ArrayBuffer(1)],
  'verylonglonglongverylonglonglongverylonglonglongverylonglonglong',
)
const MAX_FILE_LENGTH = 25

jest.mock('~/helpers/generatorUid')

describe('FileInput component', () => {
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {})
  })

  it('should render correctly', () => {
    const { container } = render(FileInput)

    expect(container).toMatchSnapshot()
  })

  it('should correct upload file', async () => {
    const { emitted } = render(FileInput)

    const input = screen.getByTestId('test-file')
    await fireEvent.change(input, {
      target: { files: [file] },
    })
    const label = screen.getByTestId('test-file-label')
    expect(emitted().input).toHaveLength(1)
    expect(label.textContent.trim()).toBe('file.pdf')
  })

  it('should correct display long file name', async () => {
    render(FileInput)

    const input = await screen.getByTestId('test-file')
    await fireEvent.change(input, {
      target: { files: [fileWithLongName] },
    })
    const label = screen.getByTestId('test-file-label')
    expect(label.textContent.trim()).toBe(`${fileWithLongName.name.substring(0, MAX_FILE_LENGTH)}...`)
  })
})
