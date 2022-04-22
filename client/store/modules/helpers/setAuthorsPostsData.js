export const setAuthorsPostsData = (authors, posts) => {
  const authorsAdditionalData = new Map()

  posts.forEach(post => {
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
    .sort((a, b) => a.post_count - b.post_count)
}
