import { createLocalVue } from '@vue/test-utils'
import Vuelidate from 'vuelidate'
import featureFlag from '../../client/featureFlags/featureFlag'

const localVue = createLocalVue()

localVue.use(Vuelidate)

const CORRECT_FLAG = 'correct-flag'
const INCORRECT_FLAG = 'incorrect-flag'

jest.mock('@/featureFlags/config', () => ({
  config: {
    'correct-flag': 'true',
  },
}))

jest.spyOn(console, 'error').mockImplementation()

describe('Feature flag function', () => {
  beforeEach(() => {
    // eslint-disable-next-line no-console
    console.error.mockClear()
  })

  it('should return true and print error if flag is empty', () => {
    expect(featureFlag()).toBeTruthy()
    // eslint-disable-next-line no-console
    expect(console.error).toHaveBeenCalledTimes(1)
  })

  it('should return true and print error if config not include flag', () => {
    expect(featureFlag(INCORRECT_FLAG)).toBeTruthy()
    // eslint-disable-next-line no-console
    expect(console.error).toHaveBeenCalledTimes(1)
  })

  it('should return true if config include flag but ffEnvironment is empty', () => {
    expect(featureFlag(CORRECT_FLAG)).toBeTruthy()
  })

  it('should return true if config include flag but ffEnvironment is correct', () => {
    process.env.ffEnvironment = 'true'
    expect(featureFlag(CORRECT_FLAG)).toBeTruthy()
  })

  it('should return true if env incorrect', () => {
    process.env = null
    expect(featureFlag(CORRECT_FLAG)).toBeTruthy()
  })
})
