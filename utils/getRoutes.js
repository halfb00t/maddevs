import axios from 'axios'
import { getNotAllowedRoutes } from './getNotAllowedRoutes'

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
  '//success-and-faq',
  '/about',
  '//about',
]

export const CUSTOM_PAGE_ROUTES = [
  {
    name: 'custom-page-one-slug',
    path: '/:slug1/:uid',
    component: '~/pages/_uid.vue',
  },
  {
    name: 'custom-page-two-slugs',
    path: '/:slug1/:slug2/:uid',
    component: '~/pages/_uid.vue',
  },
  {
    name: 'custom-page-three-slugs',
    path: '/:slug1/:slug2/:slug3/:uid',
    component: '~/pages/_uid.vue',
  },
  {
    name: 'custom-page-four-slugs',
    path: '/:slug1/:slug2/:slug3/:slug4/:uid',
    component: '~/pages/_uid.vue',
  },
]

const getPosts = async pageUrl => {
  let posts = []
  const response = await axios.get(pageUrl)

  posts = posts.concat(response.data.results)
  if (response.data.next_page) posts = posts.concat(await getPosts(response.data.next_page))
  return posts
}

const convertToSlug = text => {
  if (typeof text !== 'string') return ''
  return text.toLowerCase()
    .trim()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

const getRoutePrefix = routePrefix => {
  if (typeof routePrefix !== 'string' || !routePrefix) return ''
  let prefix = routePrefix
  if (prefix.charAt(prefix.length - 1) === '/') prefix = prefix.slice(0, prefix.length - 1)
  if (prefix.charAt(0) === '/') prefix = prefix.slice(1)
  return prefix
}

const filterNotAllowedRoutes = routes => {
  const notAllowedRoutesList = getNotAllowedRoutes()
  if (notAllowedRoutesList?.length) {
    return routes.filter(route => !notAllowedRoutesList.includes(route))
  }
  return routes
}

const getRoutes = async () => {
  // Getting data from prismic
  const prismicData = await axios.get(process.env.NODE_PRISMIC_API)
  const prismicTags = prismicData.data.tags

  // Getting posts of all types from prismic
  const { ref } = prismicData.data.refs[0]
  const prismicPosts = await getPosts(`${process.env.NODE_PRISMIC_API}/documents/search?ref=${ref}#format=json`)

  // Creating a list of routes
  const blogPageRoutes = prismicPosts
    .filter(post => post.type === 'post')
    .map(post => `/blog/${post.uid}`)

  const cuPageRoutes = prismicPosts
    .filter(post => post.type === 'customer_university')
    .map(post => `/customer-university/${post.uid}`)

  const authorPageRoutes = prismicPosts
    .filter(post => post.type === 'author')
    .map(author => `/blog/authors/${author.uid}`)

  const careerPageRoutes = prismicPosts
    .filter(post => post.type === 'vacancy')
    .map(vacancy => `/careers/${vacancy.uid}`)

  const tagPageRoutes = prismicTags
    .map(tag => `/tag/${convertToSlug(tag)}`)

  /* Custom pages from production */
  const customPageRoutes = prismicPosts
    .filter(post => post.type === 'custom_page' && post.data.released === true && post.uid !== 'about')
    .map(page => `/${getRoutePrefix(page.data.route_prefix)}/${page.uid}`)

  const routes = [
    '/',
    '/services',
    '/careers',
    '/gdpr',
    '/nda',
    '/privacy',
    '/faq',
    '/case-studies/namba-food',
    '/case-studies/sir-john-monash-centre',
    '/case-studies/godee',
    '/case-studies/yourcast',
    '/case-studies/veeqo',
    '/case-studies/clutch',
    '/case-studies/peklo',
    '/case-studies/R4TCA-web-application',
    '/case-studies/citycam',
    '/case-studies/bandpay',
    '/case-studies/guardrails',
    '/case-studies/namba-taxi',
    '/blog',
    ...careerPageRoutes,
    ...blogPageRoutes,
    ...cuPageRoutes,
    ...authorPageRoutes,
    ...tagPageRoutes,
    ...customPageRoutes,
  ]
  return filterNotAllowedRoutes(routes)
}

export default getRoutes

/** The priority of the route depends on the nesting. More nesting has a lower priority
 Nesting is equal to minus 0.1 unit. Consistent with Seo * */
const getRoutePriority = path => 1 - (((path.split('/').length) - 1) * 0.1)

const generateRoute = name => {
  if (IGNORE_ROUTES.includes(name)) return null

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
  const sitemap = []
  const routes = await getRoutes()

  routes.forEach(route => {
    const sitemapRoute = generateRoute(route.trim())
    if (sitemapRoute) {
      sitemap.push(sitemapRoute)
    }
  })

  return sitemap
}
