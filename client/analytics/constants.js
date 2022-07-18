export const CONTENT_GROUPS = [
  { url: ['http://maddevs.io/'], name: 'home_page' },
  { url: ['https://maddevs.io/case-studies/'], name: 'case_studies' },
  { url: ['https://maddevs.io/case-studies/clutch/'], name: 'case' },
  { url: ['https://maddevs.io/blog/'], name: 'blog' },
  { url: ['https://maddevs.io/ebooks/pricing-strategies/'], name: 'pricing-strategies' },
  { url: ['https://maddevs.io/customer-university/custom-software-development-pricing-strategies/'], name: 'cu_post' },
  { url: ['https://maddevs.io/blog/automation-of-customer-service/'], name: 'blog_post' },
  { url: ['https://maddevs.io/open-source/'], name: 'open_source' },
  {
    url: [
      'https://maddevs.io/services/',
      'https://maddevs.io/software-testing/',
    ],
    name: 'services',
  },
  {
    url: [
      'https://maddevs.io/development-process/',
      'https://maddevs.io/delivery-models/',
    ],
    name: 'approach',
  },
  { url: ['https://maddevs.io/team/'], name: 'team' },
  { url: ['https://maddevs.io/careers/'], name: 'careers' },
  { url: ['https://maddevs.io/ru/careers/senior-golang/'], name: 'job_post' },
  { url: ['https://maddevs.io/contact-us/'], name: 'contact_us' },
  { url: ['https://maddevs.io/tag/frontend-development/'], name: 'tag' },
  { url: ['https://maddevs.io/author/denis-grushkin/'], name: 'author' },
  {
    url: [
      'https://maddevs.io/privacy/',
      'https://maddevs.io/sustainability-policy/',
      'https://maddevs.io/gdpr/',
      'https://maddevs.io/nda/',
      'https://maddevs.io/faq/',
    ],
    name: 'policy',
  },
  {
    url: [
      'https://maddevs.io/transportation/',
      'https://maddevs.io/blockchain/',
    ],
    name: 'industries',
  },
]

export const EVENT_CATEGORIES = {
  CLICK: 'click',
  SCROLL: 'scroll',
  SUBMIT: 'submit',
}

export const ANALYTICS_IDS = {
  GA4: process.env.analytics4Key,
  UNIVERSAL: process.env.analyticsUniversalKey,
}
