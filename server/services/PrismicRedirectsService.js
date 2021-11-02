const fs = require('fs')
const path = require('path')
const axios = require('axios')
const shell = require('shelljs')
const { PRISMIC_API } = require('../config')

const getPrismicDocuments = async predicates => {
  const prismicData = await axios.get(PRISMIC_API)
  const { ref } = prismicData?.data?.refs[0]
  const response = await axios.get(`${PRISMIC_API}/documents/search?ref=${ref}&q=${predicates}`)
  let documents = []

  documents = documents.concat(response.data.results)
  if (response.data.next_page) documents = documents.concat(await getPrismicDocuments(response.data.next_page))
  return documents
}

const getRedirectsList = document => {
  const { redirects = [] } = document?.data
  let newRedirects = []
  if (!redirects && !redirects.length) return newRedirects

  newRedirects = redirects
    .filter(item => (item.redirect_from && item.redirect_to))
    .map(item => ({
      from: item.redirect_from,
      to: item.redirect_to,
    }))
  return newRedirects
}

const writeToFile = redirectsList => {
  const redirectsFilePath = path.join(__dirname, '../config/json/prismic-redirects.json')
  return new Promise((resolve, reject) => {
    fs.writeFile(redirectsFilePath, JSON.stringify(redirectsList, null, 2), error => {
      if (error) return reject(error)
      return resolve('Prismic redirects file has been updated')
    })
  })
}

const updateRedirectsList = async res => {
  try {
    const prismicDocuments = await getPrismicDocuments('[[at(document.type,"redirects")]]')
    const redirectsList = getRedirectsList(prismicDocuments[0])
    const result = await writeToFile(redirectsList)
    shell.exec('npm run build', { async: true })
    return res.status(200).json({
      status: 200,
      message: result,
    })
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error,
    })
  }
}

module.exports = {
  updateRedirectsList,
}
