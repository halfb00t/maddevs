import { AnalyticsEvent } from './Event'
import { EVENT_CATEGORIES } from './constants'

export const headerClickEvent = new AnalyticsEvent('click').setCategory(EVENT_CATEGORIES.CLICK)

export const phoneClickEvent = new AnalyticsEvent('phone_click').setCategory(EVENT_CATEGORIES.CLICK)

export const emailClickEvent = new AnalyticsEvent('email_click').setCategory(EVENT_CATEGORIES.CLICK)

export const contactMeClickEvent = new AnalyticsEvent('contact_me_click').setCategory(EVENT_CATEGORIES.CLICK)

export const contactMeSubmitEvent = new AnalyticsEvent('submit_contact_me').setCategory(EVENT_CATEGORIES.SUBMIT)
