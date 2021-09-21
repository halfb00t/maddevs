function extractSchemaOrg(schemaOrgSnippets, fallback) {
  let schemaOrgSnippet = ''
  console.log(fallback)
  if (
    schemaOrgSnippets
    && schemaOrgSnippets.length
    && schemaOrgSnippets[0].single_snippet.length
    && schemaOrgSnippets[0].single_snippet[0].text
  ) {
    schemaOrgSnippet = schemaOrgSnippets[0].single_snippet[0].text
    // extracting only JSON object from a snippet without extra characters
    schemaOrgSnippet = schemaOrgSnippet.substring(schemaOrgSnippet.indexOf('{'), schemaOrgSnippet.lastIndexOf('}') + 1)
    return schemaOrgSnippet
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: fallback.data.title[0].text,
    alternativeHeadline: fallback.data.title[0].text,
    image: fallback.data.featured_image.url,
    author: fallback.data.post_author,
    editor: 'Alena Timokhovets',
    genre: 'IT',
    keywords: 'vue apollo, nuxt vue apollo, vue apollo graphql, apollo-vue unit testing, vue with apollo and graph',
    wordcount: '1257',
    publisher: {
      '@type': 'Organization',
      name: 'Mad Devs Group LTD',
      logo: {
        '@type': 'ImageObject',
        url: 'https://maddevs.io/Open-Graph.png',
      },
    },
    url: 'https://maddevs.io/blog/configure-apollo-graphql-in-nuxtjs/',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://maddevs.io/blog/',
    },
    datePublished: '2021-08-06',
    dateCreated: '2021-08-06',
    dateModified: '2021-08-062',
    description: '',
    articleBody: '',
  }
}

export default extractSchemaOrg
