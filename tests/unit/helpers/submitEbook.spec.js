import { submitEbookEventToGA4 } from '@/helpers/submitEbook'
import { pricingStrategiesEbookSubmitFormEvent, approachDPEbookSubmitFormEvent } from '@/analytics/events'

jest.mock('~/helpers/generatorUid')

const pricingMock = jest.spyOn(pricingStrategiesEbookSubmitFormEvent, 'send')
  .mockImplementation(() => {
  })
const DPMock = jest.spyOn(approachDPEbookSubmitFormEvent, 'send')
  .mockImplementation(() => {
  })

describe('Submit Ebook', () => {
  it('should correct send a Pricing Ebook to analytics', () => {
    jest.clearAllMocks()
    submitEbookEventToGA4(763889)

    expect(pricingMock)
      .toHaveBeenCalledTimes(1)
    expect(DPMock)
      .toHaveBeenCalledTimes(0)
    jest.clearAllMocks()
  })

  it('should correct send a Development Process to analytics', () => {
    jest.clearAllMocks()
    submitEbookEventToGA4(791537)

    expect(DPMock)
      .toHaveBeenCalledTimes(1)
    expect(pricingMock)
      .toHaveBeenCalledTimes(0)
    jest.clearAllMocks()
  })
})
