export const isMatchMainDomain = domain => {
  const mainDomains = ['https://maddevs.io', 'https://maddevs.co']
  return mainDomains.includes(domain)
}
