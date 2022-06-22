const getRobots = env => {
  if (env === 'staging') {
    return {
      UserAgent: '*',
      Disallow: '/',
    }
  }
  return {
    UserAgent: '*',
    Sitemap: 'https://maddevs.io/sitemapindex.xml',
  }
}

export default getRobots
