import textEllipsis from '@/helpers/textEllipsis'

const getFirstParagraph = (slices, limit) => {
  let paragraph = ''
  let haveFirstParagraph = false
  slices.forEach(slice => {
    if (haveFirstParagraph || slice.slice_type !== 'text') return

    slice.primary.text.filter(block => block.type === 'paragraph').forEach(block => {
      paragraph += block.text.replace(/`(.*?)`/g, '<span class="inline-code">$1</span>')
      haveFirstParagraph = true
    })
  })

  return textEllipsis(paragraph, { limit })
}

export default getFirstParagraph
