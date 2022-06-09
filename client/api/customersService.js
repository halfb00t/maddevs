export const getAllCustomers = async prismic => {
  try {
    const { data: { body } } = await prismic.api.getByUID('customerstype', 'list-of-customer-logos')
    return body[0].items
  } catch (error) {
    return error
  }
}
