<template>
  <ol
    itemscope
    itemtype="https://schema.org/BreadcrumbList"
  >
    <li
      v-if="crumbs.length"
      itemprop="itemListElement"
      itemscope
      itemtype="http://schema.org/ListItem"
      class="item"
    >
      <NuxtLink
        :to="'/'"
        class="title"
        itemprop="item"
        title="Mad Devs"
      >
        <span itemprop="name">Mad Devs</span>
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
        :event="(crumbs.length - 1) === i ? '' : 'click'"
        class="title"
        itemprop="item"
        :title="(crumbs.length - 1) === i ? getTitle : crumb.title"
      >
        <span itemprop="name">{{ (crumbs.length - 1) === i ? getTitle : crumb.title }}</span>
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

  computed: {
    getTitle() {
      return document.title
    },

    crumbs() {
      const { fullPath } = this.$route
      const pathArray = fullPath.startsWith('/')
        ? fullPath.substring(1).split('/')
        : fullPath.split('/')

      const breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        breadcrumbArray.push({
          to: breadcrumbArray[idx - 1]
            ? `/${breadcrumbArray[idx - 1].path}/${path}${path.endsWith('/') ? '' : '/'}`
            : `/${path}${path.endsWith('/') ? '' : '/'}`,
          title: (path.charAt(0).toUpperCase() + path.substr(1)).replace(/-/gm, ' '),
        })
        return breadcrumbArray
      }, [])

      for (let i = breadcrumbs.length; i >= 0; i -= 1) {
        if (!breadcrumbs[i]?.title) {
          breadcrumbs.splice(i, 1)
        }
      }

      return breadcrumbs.length >= 2 ? breadcrumbs : []
    },
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
