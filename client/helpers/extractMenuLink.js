const DOMAINS = [
  'http://maddevs.co',
  'https://maddevs.co',
  'http://maddevs.io',
  'https://maddevs.io',
  'http://localhost:3000',
  'https://localhost:3000',
]

export default ({
  link_type = '', // eslint-disable-line
  url = '/',
  target = null,
  type: documentType,
  uid: documentUID,
}) => {
  const linkType = link_type.toLowerCase()

  if (linkType === 'web') {
    const currentDomain = DOMAINS.find(domain => url.includes(domain))

    if (currentDomain) {
      return {
        isExternalLink: false,
        target,
        url: url.split(currentDomain)[1],
      }
    }
    return {
      isExternalLink: true,
      target: '_blank',
      url,
    }
  }

  if (linkType === 'document' && documentType === 'post' && documentUID) {
    return {
      isExternalLink: false,
      target: null,
      url: `/blog/${documentUID}/`,
    }
  }

  if (linkType === 'media') {
    return {
      isExternalLink: true,
      target: '_blank',
      url,
    }
  }

  return {
    isExternalLink: false,
    target: null,
    url: '/',
  }
}
