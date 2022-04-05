import { getStructuredRoutes } from './getRoutes'

const MAIN = '/main.xml'
const CASES = '/cases.xml'
const INSIGHTS = '/insights.xml'
const BLOG = '/blog.xml'
const AUTHORS = '/authors.xml'
const CAREERS = '/careers.xml'
const SERVICES = '/services.xml'

export const SITEMAP_PATHS = {
  MAIN,
  CASES,
  INSIGHTS,
  BLOG,
  AUTHORS,
  CAREERS,
  SERVICES,
}

const EXCLUDE_ROUTES = {
  '/': 1,
  '/gdpr': 0.7,
  '/nda': 0.7,
  '/privacy': 0.7,
  '/faq': 0.7,
}

const IGNORE_ROUTES = [
  '/tag/featured-post',
  '/tag/copywriter',
  '/tag/marketing',
  '/tag/it',
  '/tag/python',
  '/tag/django',
  '/tag/go',
  '/tag/golang',
  '/tag/ios',
  '/tag/hr',
  '/tag/assistant',
  '/tag/hr-department',
  '/tag/assistant-delivery-manager',
  '/tag/software-features',
  '/blog/mad-devs-devops',
  '/blog/middle-python-developer',
  '/blog/vue-vuetify-middle-v-saas-proekt',
  '/blog/senior-android-developer',
  '/blog/project-manager-v-finteh-proekt',
  '/blog/middle-ios-developer',
  '/blog/golang-middle-senior-developer-v-finteh-proekt',
  '/blog/senior-ios-developer',
  '/blog/mad-devs-ishet-senior-python-developer-v-proekt-clutch',
  '/blog/middle-android-developer',
  '/blog/ios-middle-senior-developer-v-finteh-proekt',
  '/blog/it-recruiter-middle-maddevs',
  '/blog/mad-devs-ishet-golang-razrabotchika',
  '/mad-devs-ishet-golang-razrabotchika',
]

/** The priority of the route depends on the nesting. More nesting has a lower priority
 Nesting is equal to minus 0.1 unit. Consistent with Seo * */
const getRoutePriority = path => 1 - (((path.split('/').length) - 1) * 0.1)

const generateRoute = name => {
  if (IGNORE_ROUTES.includes(name)) {
    return null
  }

  const priority = EXCLUDE_ROUTES[name] || getRoutePriority(name)

  return {
    priority,
    url: `${name}/`,
    changefreq: 'daily',
    lastmod: new Date().toISOString()
      .split('T')[0],
  }
}

export const getSitemapRoutes = async () => {
  const structuredRoutes = await getStructuredRoutes()

  Object.keys(structuredRoutes).forEach(routeGroup => {
    if (Object.prototype.hasOwnProperty.call(structuredRoutes, routeGroup)) {
      structuredRoutes[routeGroup] = structuredRoutes[routeGroup].map(route => generateRoute(route.trim()))
        .filter(route => route !== null)
    }
  })

  return structuredRoutes
}
