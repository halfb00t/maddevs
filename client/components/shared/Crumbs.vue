<template>
  <ol
    v-if="crumbs.length"
    itemscope
    itemtype="https://schema.org/BreadcrumbList"
  >
    <li
      itemprop="itemListElement"
      itemscope
      itemtype="http://schema.org/ListItem"
      class="item"
    >
      <NuxtLink
        :to="'/'"
        class="title"
        itemprop="item"
        title="Home"
      >
        <span itemprop="name">Home</span>
        <meta
          itemprop="position"
          content="0"
        >
      </NuxtLink>
    </li>
    <li
      v-for="(crumb, i) in crumbs"
      :key="`${i}-${crumb}`"
      class="item"
      itemprop="itemListElement"
      itemscope
      itemtype="https://schema.org/ListItem"
    >
      <NuxtLink
        :to="crumb.to"
        :event="(crumbs.length - 1) === i || title === '...' ? '' : 'click'"
        class="title"
        itemprop="item"
        :title="(crumbs.length - 1) === i ? title : crumb.title"
      >
        <span itemprop="name">{{ (crumbs.length - 1) === i ? title : crumb.title }}</span>
        <meta
          itemprop="position"
          content="i + 1"
        >
      </NuxtLink>
    </li>
  </ol>
</template>

<script>
export default {
  name: 'Crumbs',

  data() {
    return {
      title: null,
    }
  },

  computed: {
    crumbs() {
      const { fullPath } = this.$route
      const pathArray = fullPath
        .replace(/^\//, '')
        .split('/')
        .filter(Boolean)
      const re = /\/$/
      const breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        if (path) {
          breadcrumbArray.push({
            to: pathArray[idx - 1]
              ? `/${pathArray[idx - 1]}/${path}${re.test(path) ? '' : '/'}`
              : `/${path}${re.test(path) ? '' : '/'}`,
            title: (`${path.charAt(0).toUpperCase()}${path.substr(1)}`).replace(/-/gm, ' '),
          })
        }
        return breadcrumbArray
      }, [])

      if (breadcrumbs[0]?.title === 'Customer university') breadcrumbs[0].to = '/blog/#customer-university'
      if (breadcrumbs[0]?.title === 'Tag') breadcrumbs[0].to = '/blog/'

      return breadcrumbs.length >= 2 ? breadcrumbs : []
    },
  },

  mounted() {
    const titleNodeElement = document.querySelector('title')
    if (titleNodeElement && titleNodeElement.nodeType === Node.ELEMENT_NODE) {
      this.title = document.title

      new MutationObserver(() => {
        this.title = document.title
      }).observe(document.querySelector('title'), { childList: true })
    } else {
      this.title = '...'
    }
  },
}
</script>

<style lang="scss" scoped>
ol {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

li {
  display: inline;
}

li:after {
  content: ' > ';
  display: inline;
  font-size: 12px;
  color: $text-color--grey-20-percent;
  padding: 0 0.0725em 0 0.15em;
}

li:last-child:after {
  content: '';
}

li a,
li span {
  text-decoration: none;
  font-size: 12px;
  line-height: 166%;
  letter-spacing: -0.1px;
}

li span {
 color: $text-color--grey-20-percent;
}

li span:hover {
  color: $text-color--cultured;
}
</style>
