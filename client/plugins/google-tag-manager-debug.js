export default ({ $gtm }) => {
  $gtm.init(process.env.NODE_GOOGLE_TAG_MANAGER_ID)
}
