export function extractText(text) {
  if (text[0] === '.') {
    return text.slice(1)
  }
  return text
}
