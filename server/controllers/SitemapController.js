function getSitemap(req, res) {
  res.sendFile(`${process.cwd()}/sitemapindex.xml`)
}

module.exports = {
  getSitemap,
}
