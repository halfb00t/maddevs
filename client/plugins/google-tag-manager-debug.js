export default ({ $gtm }) => {
  if (process.env.FF_ENVIRONMENT === 'production') {
    $gtm.init(process.env.NODE_GOOGLE_TAG_MANAGER_ID)
  }
}
