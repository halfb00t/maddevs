import { EVENT_CATEGORIES } from './constants'
import { PixelAnalyticsEvent, TRACK_TYPES } from './PixelAnalyticsEvent'

export const headerClickEvent = new PixelAnalyticsEvent('click').setCategory(EVENT_CATEGORIES.CLICK)

export const phoneClickPixelEvent = new PixelAnalyticsEvent('phone_click').setCategory(EVENT_CATEGORIES.CLICK)

export const contactMeClickPixelEvent = new PixelAnalyticsEvent('contact_me').setCategory(EVENT_CATEGORIES.CLICK)

export const emailClickPixelEvent = new PixelAnalyticsEvent('email_click').setCategory(EVENT_CATEGORIES.CLICK)

export const hrSiteClickPixelEvent = new PixelAnalyticsEvent('hr_site_click').setCategory(EVENT_CATEGORIES.CLICK)

export const socialNetworkClickPixelEvent = new PixelAnalyticsEvent('social_network_click').setCategory(EVENT_CATEGORIES.CLICK)

export const writeUsClickPixelEvent = new PixelAnalyticsEvent('write_us_click').setCategory(EVENT_CATEGORIES.CLICK)

export const ebookSubmitFormPixelEvent = new PixelAnalyticsEvent('submit_ebook_form').setCategory(EVENT_CATEGORIES.SUBMIT)

export const githubClickPixelEvent = new PixelAnalyticsEvent('github_click').setCategory(EVENT_CATEGORIES.CLICK)

export const pressCenterClickPixelEvent = new PixelAnalyticsEvent('press_click').setCategory(EVENT_CATEGORIES.CLICK)

export const submitCvFormPixelEvent = new PixelAnalyticsEvent('submit_cv').setCategory(EVENT_CATEGORIES.CLICK)

export const linkedinUserClickPixelEvent = new PixelAnalyticsEvent('linkedin_user_click').setCategory(EVENT_CATEGORIES.CLICK)

export const twitterNetworkPixelEvent = new PixelAnalyticsEvent('twitter', TRACK_TYPES.CUSTOM_TRACK).setCategory(EVENT_CATEGORIES.CLICK)

export const facebookNetworkPixelEvent = new PixelAnalyticsEvent('facebook', TRACK_TYPES.CUSTOM_TRACK).setCategory(EVENT_CATEGORIES.CLICK)

export const linkedinNetworkPixelEvent = new PixelAnalyticsEvent('facebook', TRACK_TYPES.CUSTOM_TRACK).setCategory(EVENT_CATEGORIES.CLICK)
