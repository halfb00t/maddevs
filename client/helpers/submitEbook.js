import { addUserType } from '@/analytics/Event'
import { sendPulseEbookTemplates } from '@/data/sendPulseTemplates'
import { approachDPEbookSubmitFormEvent, pricingStrategiesEbookSubmitFormEvent } from '@/analytics/events'

export function submitEbookEventToGA4(sendPulseTemplateID) {
  addUserType('download_ebook')

  if (sendPulseTemplateID === sendPulseEbookTemplates.approach_dp) {
    approachDPEbookSubmitFormEvent.send()
  }
  if (sendPulseTemplateID === sendPulseEbookTemplates.pricing_strategies || !sendPulseTemplateID) { // || check for null.
    // if template ID is null then send default ( pricing strategies ) stats
    pricingStrategiesEbookSubmitFormEvent.send()
  }
}
