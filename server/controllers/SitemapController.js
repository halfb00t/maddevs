export function getSitemap(req, res) {
  res.sendFile(`${process.cwd()}/sitemap.xml`)
}
