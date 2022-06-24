import { EVENT_CATEGORIES } from './constants'
import { PixelAnalyticsEvent } from './PixelAnalyticsEvent'

// fbq('track', 'Lead');
// На каждую страницу, кроме главной добавить fbq('track', 'ViewContent') с уникальным id или name в качестве доп. параметра, также на вложенные страницы можно добавить category, например:
// fbq('track', 'ViewContent', {
//   content_category: 'blog',
//   content_name: 'best-time-tracking-tools',
// });
//
//
// На каждую страницу 3 кастомных события, которые должны срабатывать по таймеру:
//   fbq('trackCustom', '30sec' );
// fbq('trackCustom', ‘45sec’ );
// fbq('trackCustom', ‘60sec’ );

// на кнопки мессенджеров и телефона и соц сетей:
// fbq('trackCustom', ‘telegram’)
// fbq('trackCustom', facebook) и т.д.
//
//   На попап форму в которой предлагается Get your copy of “Custom Software Development: Pricing Strategies” и
//  скачивание ибука на посадочной:
//   fbq('track', 'lead-magnit'); - done
// На отправку формы заявки на вакансию
// fbq('track', 'SubmitApplication'); - done

export const headerClickEvent = new PixelAnalyticsEvent('click').setCategory(EVENT_CATEGORIES.CLICK)

export const phoneClickPixelEvent = new PixelAnalyticsEvent('phone_click').setCategory(EVENT_CATEGORIES.CLICK)

// export const emailClickEvent = new AnalyticsEvent('email_click').setCategory(EVENT_CATEGORIES.CLICK)
//
// export const contactMeClickEvent = new AnalyticsEvent('contact_me_click').setCategory(EVENT_CATEGORIES.CLICK)
//
// export const contactMeSubmitEvent = new AnalyticsEvent('submit_contact_me').setCategory(EVENT_CATEGORIES.SUBMIT)
//
// export const cardClickEvent = new AnalyticsEvent('card_click').setCategory(EVENT_CATEGORIES.CLICK)
//
// export const socialNetworkClickEvent = new AnalyticsEvent('social_network_click').setCategory(EVENT_CATEGORIES.CLICK)
//
// export const footerFormSubmitEvent = new AnalyticsEvent('submit_footer_form').setCategory(EVENT_CATEGORIES.SUBMIT)
//
// export const contactsClickEvent = new AnalyticsEvent('contacts_click').setCategory(EVENT_CATEGORIES.CLICK)
//
// export const blockClickEvent = new AnalyticsEvent('blog_click').setCategory(EVENT_CATEGORIES.CLICK)
//
// export const categoryPageClickEvent = new AnalyticsEvent('category_click').setCategory(EVENT_CATEGORIES.CLICK)
//
// export const pressCenterClickEvent = new AnalyticsEvent('press_click').setCategory(EVENT_CATEGORIES.CLICK)
//
// export const linkedinUserClickEvent = new AnalyticsEvent('linkedin_user_click').setCategory(EVENT_CATEGORIES.CLICK)
//
// export const careersClickEvent = new AnalyticsEvent('careers_click').setCategory(EVENT_CATEGORIES.CLICK)
//
// export const hrSiteClickEvent = new AnalyticsEvent('hr_site_click').setCategory(EVENT_CATEGORIES.CLICK)
//
// export const githubClickEvent = new AnalyticsEvent('github_click').setCategory(EVENT_CATEGORIES.CLICK)
//
// export const ebookSubmitFormEvent = new AnalyticsEvent('submit_ebook_form').setCategory(EVENT_CATEGORIES.SUBMIT)
//
// export const writeUsClickEvent = new AnalyticsEvent('write_us_click').setCategory(EVENT_CATEGORIES.CLICK)
//
// export const submitCvFormEvent = new AnalyticsEvent('submit_cv').setCategory(EVENT_CATEGORIES.SUBMIT)
