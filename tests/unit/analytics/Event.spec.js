import { addUserType, AnalyticsEvent } from '~/analytics/Event'

const storageMock = () => {
  const storage = {}

  return {
    setItem(key, value) {
      storage[key] = value || ''
    },
    getItem(key) {
      return key in storage ? storage[key] : null
    },
    removeItem(key) {
      delete storage[key]
    },
    get length() {
      return Object.keys(storage).length
    },
    key(i) {
      const keys = Object.keys(storage)
      return keys[i] || null
    },
  }
}

window.localStorage = storageMock()

Object.defineProperty(window, 'dataLayer', {
  value: [
    [
      'config',
      'G-SWHTFYT6M8',
      {
        send_page_view: false,
        _ee: true,
      },
    ],
    [
      'config',
      'UA-83208754-9',
      {
        send_page_view: false,
      },
    ],
  ],
})

Object.defineProperty(window, 'location', {
  value: {
    hostname: 'maddevs.co',
    pathname: '/',
  },
})

jest.mock('~/helpers/generatorUid')

const consoleLogMock = jest.spyOn(global.console, 'log').mockImplementation(() => '')

describe('addUser function', () => {
  it('should correctly write to localStorage', () => {
    addUserType('lead')
    expect(window.localStorage.getItem('GA_USER_TYPE')).toBe('lead')
  })
})

describe('AnalyticsEvent class', () => {
  it('should be instance of AnalyticsEvent', () => {
    const testEvent = new AnalyticsEvent('test')
    expect(testEvent).toBeInstanceOf(AnalyticsEvent)
  })

  it('should throw Error without action', () => {
    expect(() => new AnalyticsEvent()).toThrow('Event action is missing for undefined, please add an action for object')
  })

  it('should correctly call setCategory', () => {
    const testEvent = new AnalyticsEvent('test_event').setCategory('TEST')
    expect(testEvent.properties.event_category).toBe('TEST')
  })

  it('should throw Error when call setCategory without category', () => {
    expect(() => new AnalyticsEvent('test_event').setCategory()).toThrow('Event category is required')
  })

  it('should call console.error when _handleError called without strict', () => {
    jest.spyOn(global.console, 'error').mockImplementation(() => 'Event category is required')
    const testEvent = new AnalyticsEvent('test_event', false)
    testEvent.setCategory()
    expect(global.console.error).toHaveBeenCalledTimes(1)
  })

  it('should called setField with params', () => {
    const testEvent = new AnalyticsEvent('test_event').setField('test', 'test')
    expect('test' in testEvent.properties).toBeTruthy()
  })

  it('should throw Error when call setField without params', () => {
    expect(() => new AnalyticsEvent('test_event').setField()).toThrow('AnalyticsEvent.setField() method is failed. Please add name or values params')
  })

  it('should correctly call send method', () => {
    process.env.NODE_ENV = 'development'
    const testEvent = new AnalyticsEvent('test_event').setCategory('TEST')
    const sendMock = jest.spyOn(testEvent, 'send')
    window.gtag = () => {}
    testEvent.send()
    expect(consoleLogMock).toHaveBeenCalledTimes(1)
    expect(sendMock).toHaveBeenCalledTimes(1)
  })

  it('should throw error when called send method', () => {
    window.gtag = ''
    const testEvent = new AnalyticsEvent('test_event').setCategory('TEST')
    expect(() => testEvent.send()).toThrow('window.gtag is not a function')
    expect(consoleLogMock).toHaveBeenCalledTimes(2)
  })

  it('should return empty array from _collectGoogleAnalyticsKeys', () => {
    const testEvent = new AnalyticsEvent('test_event').setCategory('TEST')
    const sendMock = jest.spyOn(testEvent, 'send')
    delete window.dataLayer
    window.gtag = () => {}
    testEvent.send()
    expect(consoleLogMock).toHaveBeenCalledTimes(3)
    expect(sendMock).toHaveBeenCalledTimes(1)
  })
})
