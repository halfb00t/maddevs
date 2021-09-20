export default ({
  link_type = '', // eslint-disable-line
  url = '/',
  target = null,
  type: documentType,
  uid: documentUID,
}) => {
  const linkType = link_type.toLowerCase()

  if (linkType === 'web') {
    if (url.includes(process.env.domain)) {
      return {
        isExternalLink: false,
        target,
        url: url.split(process.env.domain)[1],
      }
    }
    return {
      isExternalLink: true,
      target: '_blank',
      url,
    }
  }

  if (
    linkType === 'document'
    && (documentType === 'post' || documentType === 'customer_university')
    && documentUID
  ) {
    return {
      isExternalLink: false,
      target: null,
      url: this.getPostPath(documentType, documentUID),
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
