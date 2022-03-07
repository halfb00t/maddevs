<template>
  <ol
    vocab="http://schema.org/"
    typeof="BreadcrumbList"
  >
    <li
      v-if="crumbs.length"
      class="item"
    >
      <NuxtLink
        :to="'/'"
        class="title"
      >
        Mad Devs
      </NuxtLink>
    </li>
    <li
      v-for="(crumb, i) in crumbs"
      :key="i"
      class="item"
    >
      <NuxtLink
        :tag="(crumbs.length - 1) === i ? 'span': 'a'"
        :to="crumb.to"
        class="title"
      >
        {{ crumb.title }}
      </NuxtLink>
    </li>
  </ol>
</template>

<script>
export default {
  name: 'Crumbs',

  computed: {
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
          title: path.charAt(0).toUpperCase() + path.substr(1),
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
  content: ' » ';
  display: inline;
  font-size: 12px;
  color: $text-color--grey-pale;
  padding: 0 0.0725em 0 0.15em;
}

li:last-child:after {
  content: '';
}

li a,
li span {
  text-decoration: none;
  color: $text-color--grey-pale;
  font-size: 12px;
  line-height: 166%;
  letter-spacing: -0.1px;
}

li span {
 color: $text-color--gainsboro;
 pointer-events: none;
}

li a:hover {
  text-decoration: underline;
}
</style>
