export const sendEbookInfoToSlack = async (axios, { name, email }) => {
  const url = process.env.ebookWebhookUrl

  const body = {
    text: `Ebook successfully downloaded by: \nName: *${name}* \nEmail: *${email}*`,
  }

  const raw = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
  })

  const result = await raw.json()

  console.log('result', result)
  return result
}
