import { AnalyticsEvent } from './Event'
import { EVENT_CATEGORIES } from './constants'

export const headerClickEvent = new AnalyticsEvent('click').setCategory(EVENT_CATEGORIES.CLICK)

export const phoneClickEvent = new AnalyticsEvent('phone_click').setCategory(EVENT_CATEGORIES.CLICK)

export const emailClickEvent = new AnalyticsEvent('email_click').setCategory(EVENT_CATEGORIES.CLICK)

export const contactMeClickEvent = new AnalyticsEvent('contact_me_click').setCategory(EVENT_CATEGORIES.CLICK)

export const contactMeSubmitEvent = new AnalyticsEvent('submit_contact_me').setCategory(EVENT_CATEGORIES.SUBMIT)

export const cardClickEvent = new AnalyticsEvent('card_click').setCategory(EVENT_CATEGORIES.CLICK)

export const socialNetworkClickEvent = new AnalyticsEvent('social_network_click').setCategory(EVENT_CATEGORIES.CLICK)

export const footerFormSubmitEvent = new AnalyticsEvent('submit_footer_form').setCategory(EVENT_CATEGORIES.SUBMIT)

export const contactsClickEvent = new AnalyticsEvent('contacts_click').setCategory(EVENT_CATEGORIES.CLICK)

export const blockClickEvent = new AnalyticsEvent('blog_click').setCategory(EVENT_CATEGORIES.CLICK)

export const categoryPageClickEvent = new AnalyticsEvent('category_click').setCategory(EVENT_CATEGORIES.CLICK)

export const pressCenterClickEvent = new AnalyticsEvent('press_click').setCategory(EVENT_CATEGORIES.CLICK)
