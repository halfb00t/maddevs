module.exports = class HTagsRule {
  constructor(enabled = true) {
    this.enabled = enabled
  }

  check(dom) {
    if (!this.enabled) return
    let report = ''
    const hTags = dom.window.document.querySelectorAll('h1, h2, h3, h4, h5, h6')

    for (let index = 0; index < hTags.length; index += 1) {
      const currentHTag = hTags[index]
      const nextHTag = hTags[index + 1]
      if (nextHTag) {
        const currentHTagLevel = currentHTag.tagName.toLowerCase().replace('h', '')
        const nextHTagLevel = nextHTag.tagName.toLowerCase().replace('h', '')
        if (currentHTagLevel < nextHTagLevel - 1) {
          if (currentHTagLevel !== nextHTagLevel - 1) {
            const message = `Tag <h${nextHTagLevel}>${hTags[index + 1].textContent.replace(/(\r\n|\n|\r)/gm, '').trim()}</h${nextHTagLevel}> should be </h${+currentHTagLevel + 1}>\n\n`
            report += message
          }
        }
      }
    }
    // eslint-disable-next-line
    return report
  }
}
