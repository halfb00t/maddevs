export default ({ $gtm }) => {
  if (process.env.NODE_ENV === 'production') {
    $gtm.init(process.env.NODE_GOOGLE_TAG_MANAGER_ID)
  }
}
