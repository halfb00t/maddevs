import extractSchemaOrg from '@/helpers/extractSchemaOrg'

export default author => {
  if (!author.data) return {}

  const socialNetworks = author.data.social_networks
    .filter(item => item.network && item.link.url)
    .map(item => ({
      key: item.network.toLowerCase(),
      title: item.network,
      link: item.link,
    }))

  return {
    type: author.type,
    id: author.id,
    uid: author.uid,
    name: author.data.name,
    position: author.data.position,
    thumbnailImage: author.data.thumbnail_image,
    image: author.data.image,
    metaTitle: author.data.meta_title,
    metaDescription: author.data.meta_description,
    schemaOrgSnippet: extractSchemaOrg(author.data.schema_org_snippets),
    socialNetworks,
  }
}
