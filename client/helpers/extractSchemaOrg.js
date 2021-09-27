function extractSchemaOrg(schemaOrgSnippets, fallback) {
  let schemaOrgSnippet = ''
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
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: fallback?.data?.title[0]?.text || 'Mad Devs: Software & Mobile App Development Company | Blog',
    alternativeHeadline: fallback?.data?.title[0]?.text || 'Mad Devs: Software & Mobile App Development Company | Blog',
    image: fallback?.data?.featured_image?.url || 'https://maddevs.io/blog.png',
    genre: 'IT',
    publisher: {
      '@type': 'Organization',
      name: 'Mad Devs Group LTD',
      logo: {
        '@type': 'ImageObject',
        url: 'https://maddevs.io/Open-Graph.png',
      },
    },
    url: fallback?.uid ? `https://maddevs.io/insights/blog/${fallback?.uid}/` : 'https://maddevs.io/insights/blog/',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://maddevs.io/insights/blog/',
    },
    datePublished: fallback?.data?.date || 'N/A',
    dateCreated: fallback?.data?.date || 'N/A',
    dateModified: fallback?.data?.date || 'N/A',
  })
}

export default extractSchemaOrg
