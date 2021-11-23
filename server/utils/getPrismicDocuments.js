const axios = require('axios')
const { PRISMIC_API } = require('../config')

const getPrismicDocuments = async predicates => {
  let documents = []
  try {
    const prismicData = await axios.get(PRISMIC_API)
    const { ref } = prismicData?.data?.refs[0]
    const response = await axios.get(`${PRISMIC_API}/documents/search?ref=${ref}&q=${predicates}`)
    documents = documents.concat(response.data.results)
    if (response.data.next_page) documents = documents.concat(await getPrismicDocuments(response.data.next_page))
    return documents
  } catch (error) {
    return documents
  }
}

module.exports = getPrismicDocuments
