import axios from 'axios'
import { getNotAllowedRoutes } from './getNotAllowedRoutes'

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
  if (prefix.endsWith('/')) prefix = prefix.slice(0, prefix.length - 1)
  if (prefix.startsWith('/')) prefix = prefix.slice(1)
  return prefix
}

const filterNotAllowedRoutes = routes => {
  const notAllowedRoutesList = getNotAllowedRoutes()
  if (notAllowedRoutesList?.length) {
    return routes.filter(route => !notAllowedRoutesList.includes(route))
  }
  return routes
}

const getDynamicRoutes = async () => {
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

  return {
    blogPageRoutes,
    cuPageRoutes,
    authorPageRoutes,
    careerPageRoutes,
    tagPageRoutes,
    customPageRoutes,
  }
}

export const getStructuredRoutes = async () => {
  const dynamicRoutes = await getDynamicRoutes()
  return {
    main: [
      '/',
      '/services',
      '/careers',
      '/gdpr',
      '/nda',
      '/privacy',
      '/faq',
      '/blog',
    ],
    caseStudies: [
      '/case-studies/peklo',
      '/case-studies/namba-taxi',
      '/case-studies/citycam',
      '/case-studies/R4TCA-web-application',
      '/case-studies/namba-food',
      '/case-studies/sir-john-monash-centre',
      '/case-studies/godee',
      '/case-studies/yourcast',
      '/case-studies/veeqo',
      '/case-studies/clutch',
      '/case-studies/bandpay',
      '/case-studies/guardrails',
    ],
    insights: [
      '/open-source/',
      ...dynamicRoutes.cuPageRoutes,
    ],
    blog: [
      ...dynamicRoutes.blogPageRoutes,
      ...dynamicRoutes.tagPageRoutes,
    ],
    authors: [
      ...dynamicRoutes.authorPageRoutes,
    ],
    careers: [
      ...dynamicRoutes.careerPageRoutes,
    ],
    services: [
      ...dynamicRoutes.customPageRoutes,
    ],
  }
}

const getRoutes = async () => {
  const structuredRoutes = await getStructuredRoutes()
  return filterNotAllowedRoutes(Object.values(structuredRoutes).flat())
}

export default getRoutes
