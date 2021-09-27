import extractSchemaOrg from '@/helpers/extractSchemaOrg'

describe('Helper extractSchemaOrg', () => {
  const fallback = {
    data: {
      title: [
        {
          text: 'Title',
        },
      ],
      featured_image: {
        url: 'http://google.com',
      },
      date: '01.01.1999',
    },
    uid: 'uid',
  }

  it('if schemaOrgSnippets is valid > will return { name: "schemaOrg" }', () => {
    const arg = [
      {
        single_snippet: [
          {
            text: '{ name: "schemaOrg" }',
          },
        ],
      },
    ]
    const schemaOrg = extractSchemaOrg(arg)
    expect(schemaOrg).toBe('{ name: "schemaOrg" }')
  })

  it('if schemaOrgSnippets property text is empty string > will return fallback json schema', () => {
    const arg = [
      {
        single_snippet: [
          {
            text: '',
          },
        ],
      },
    ]

    const schemaOrg = extractSchemaOrg(arg, fallback)
    const result = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: fallback?.data?.title[0]?.text,
      alternativeHeadline: fallback?.data?.title[0]?.text,
      image: fallback?.data?.featured_image?.url,
      genre: 'IT',
      publisher: {
        '@type': 'Organization',
        name: 'Mad Devs Group LTD',
        logo: {
          '@type': 'ImageObject',
          url: 'https://maddevs.io/Open-Graph.png',
        },
      },
      url: `https://maddevs.io/insights/blog/${fallback?.uid}/`,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://maddevs.io/insights/blog/',
      },
      datePublished: fallback?.data?.date,
      dateCreated: fallback?.data?.date,
      dateModified: fallback?.data?.date,
    }
    expect(schemaOrg).toEqual(JSON.stringify(result))
  })

  it('if schemaOrgSnippets is not valid > will return empty string', () => {
    const result = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: fallback?.data?.title[0]?.text,
      alternativeHeadline: fallback?.data?.title[0]?.text,
      image: fallback?.data?.featured_image?.url,
      genre: 'IT',
      publisher: {
        '@type': 'Organization',
        name: 'Mad Devs Group LTD',
        logo: {
          '@type': 'ImageObject',
          url: 'https://maddevs.io/Open-Graph.png',
        },
      },
      url: `https://maddevs.io/insights/blog/${fallback?.uid}/`,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://maddevs.io/insights/blog/',
      },
      datePublished: fallback?.data?.date,
      dateCreated: fallback?.data?.date,
      dateModified: fallback?.data?.date,
    }
    expect(extractSchemaOrg(null, fallback)).toBe(JSON.stringify(result))
    expect(extractSchemaOrg(undefined, fallback)).toBe(JSON.stringify(result))
    expect(extractSchemaOrg('', fallback)).toBe(JSON.stringify(result))
    expect(extractSchemaOrg(0, fallback)).toBe(JSON.stringify(result))
    expect(extractSchemaOrg(true, fallback)).toBe(JSON.stringify(result))
    expect(extractSchemaOrg([], fallback)).toBe(JSON.stringify(result))
    expect(extractSchemaOrg({}, fallback)).toBe(JSON.stringify(result))
  })
})
