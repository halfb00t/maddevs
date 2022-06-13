export const getAllCustomers = async prismic => {
  try {
    const { data: { body } } = await prismic.api.getByUID('customerstype', 'list-of-customer-logos')
    const [customers] = body
    return customers.items
  } catch (error) {
    return error
  }
}
