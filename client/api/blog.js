export const getHomePageContent = async prismic => {
  try {
    const response = await prismic.api.getSingle('blog_home')
    return response.data
  } catch (error) {
    return error
  }
}

export const getBlogPosts = async (prismic, currentPage = 1) => {
  try {
    const response = await prismic.api.query(prismic.predicates.at('document.type', 'post'), {
      orderings: '[my.post.date desc]',
      pageSize: 100,
      page: currentPage,
    })

    const currentPosts = response.results
    if (!response.next_page) {
      return currentPosts
    }
    const newPage = currentPage + 1
    const newPosts = await getBlogPosts(prismic, newPage)
    return ([...currentPosts, ...newPosts])
  } catch (error) {
    return error
  }
}

export const getCustomerUniversityMaster = async prismic => {
  try {
    const response = await prismic.api.getSingle('cu_master')
    return response.data
  } catch (error) {
    return error
  }
}

export const getCUPosts = async prismic => {
  try {
    const response = await prismic.api.query(prismic.predicates.at('document.type', 'customer_university'), {
      orderings: '[my.post.date desc]',
      pageSize: 100,
    })
    return response.results
  } catch (error) {
    return error
  }
}

export const getCustomerUniversityFeaturedPost = async (prismic, master) => {
  try {
    const response = await prismic.api.getByUID('customer_university', master.featured_cu.uid)
    return response.data
  } catch (error) {
    return error
  }
}
export const getCustomerUniversitySectionPosts = async prismic => {
  try {
    const response = await prismic.api.getSingle('customer_university_section')
    return response.data
  } catch (error) {
    return error
  }
}
