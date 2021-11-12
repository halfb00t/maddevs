export const sendEbookInfoToSlack = async (axios, { name, email }) => {
  const url = process.env.ebookWebhookUrl

  const body = {
    text: `Ebook successfully downloaded by: \nName: *${name}* \nEmail: *${email}*`,
  }

  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
  })
}
