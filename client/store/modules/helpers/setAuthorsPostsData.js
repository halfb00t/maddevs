export const setAuthorsPostsData = (authors, posts) => {
  const authorsAdditionalData = new Map()

  posts.forEach(post => {
    if ('uid' in post.data?.post_coauthor) {
      const { uid } = post.data.post_coauthor
      const { tags = [], count = 0 } = authorsAdditionalData.get(uid) || {}
      authorsAdditionalData.set(uid, { tags: new Set([...tags, ...post.tags]), count: count + 1 })
    }
    const { uid } = post.data.post_author
    const { tags = [], count = 0 } = authorsAdditionalData.get(uid) || {}
    authorsAdditionalData.set(uid, { tags: new Set([...tags, ...post.tags]), count: count + 1 })
  })

  return authors
    .reduce((acc, rawAuthor) => {
      const { tags = [], count = 0 } = authorsAdditionalData.get(rawAuthor.uid) || {}
      const author = { ...rawAuthor, post_tags: Array.from(tags), post_count: count }
      if (!count) return acc
      return [...acc, author]
    }, [])
    .sort((firstAuthor, secondAuthor) => {
      const firstAuthorStatus = firstAuthor.data.position.startsWith('ex')
      const secondAuthorStatus = secondAuthor.data.position.startsWith('ex')
      if (firstAuthorStatus && secondAuthorStatus) {
        return secondAuthor.post_count - firstAuthor.post_count // sort by count for ex
      }
      if (firstAuthorStatus) return 1
      if (secondAuthorStatus) return -1
      return secondAuthor.post_count - firstAuthor.post_count // sort by count for non ex
    })
}
