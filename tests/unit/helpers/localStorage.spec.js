import { loadState, saveState } from '@/helpers/localStorage'

describe('localStorage', () => {
  jest.spyOn(window.localStorage.__proto__, 'setItem').mockImplementation()
  jest.spyOn(window.localStorage.__proto__, 'getItem').mockImplementation()

  jest.spyOn(JSON, 'stringify').mockImplementation(() => '{token:string}')
  jest.spyOn(JSON, 'parse').mockImplementation(() => ({ token: 'string' }))

  it('should correctly saveState', () => {
    saveState('{token:string}', 'key')
    expect(localStorage.setItem).toHaveBeenCalledTimes(1)
    expect(localStorage.setItem).toHaveBeenCalledWith('key', '{token:string}')
  })
  it('should correctly loadState', () => {
    loadState('key')
    expect(localStorage.getItem).toHaveBeenCalledTimes(1)
    expect(localStorage.getItem).toHaveBeenCalledWith('key')
    expect(loadState('key')).toEqual({ token: 'string' })
  })
  it('should correctly return undefined during the error', () => {
    jest.spyOn(window.localStorage.__proto__, 'getItem').mockImplementation(() => { throw new Error('error') })
    expect(loadState('key')).toEqual(undefined)
  })
})
