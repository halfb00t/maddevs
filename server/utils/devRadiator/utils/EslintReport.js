const fs = require('fs')

async function getEslintReport() {
  const fileData = fs.readFileSync('client/static/eslint-report.json')
  if (fileData) {
    const arr = fileData.toString().replace(/\r\n/g, '\n').split('\n')
    if (arr[arr.length - 1] !== '') {
      const replaced = arr[arr.length - 1].match(/\d+/)
      if (replaced !== null) {
        return replaced[0]
      }
    }
  }
  return 0
}

module.exports = { getEslintReport }
