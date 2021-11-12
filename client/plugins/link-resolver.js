/**
 * To learn more about Link Resolving check out the Prismic documentation
 */

export default doc => {
  const notFoundPage = '/not-found/'
  if (!doc) return notFoundPage
  if (doc.isBroken) return '/not-found/'
  if (doc.type === 'blog_home') return '/'
  if (doc.type === 'post') return `/insights/blog/${doc.uid}/`
  if (doc.type === 'author') return `/insights/blog/author/${doc.uid}/`
  if (doc.type === 'tag') return `/insights/blog/tag/${doc.uid}/`
  if (doc.type === 'customer_university') return `/customer-university/${doc.uid}/`
  return notFoundPage
}
