export const extractFooterSection = (prismic, footerContent = {}, navSection) => {
  const getLink = () => {
    const link = footerContent.body
      .find(item => item.primary?.nav_section.toLowerCase() === navSection)
    return link?.primary?.link[0]?.text
  }
  const menus = footerContent.body
    .filter(slice => slice.primary?.nav_section.toLowerCase() === navSection)
    .map(slice => ({
      name: slice.primary?.name,
      routes: slice.items,
    }))
  return {
    name: navSection,
    link: getLink(),
    menus,
  }
}

export const extractFooterNavigation = (prismic, content, navigationsDepartments) => {
  const navigationData = {}
  navigationsDepartments.forEach(department => {
    navigationData[department] = extractFooterSection(prismic, content, department)
  })
  return navigationData
}
