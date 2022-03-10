<template>
  <div>
    <VueGist
      v-if="isMounted"
      :gist-id="$prismic.asText(slice.primary.gist_id)"
      :file="$prismic.asText(slice.primary.file_name)"
    />
  </div>
</template>

<script>
import VueGist from '@/components/VueGist/VueGist'

export default {
  name: 'GithubGistSlice',
  components: {
    VueGist,
  },

  props: {
    slice: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      isMounted: false,
    }
  },

  mounted() {
    this.isMounted = true
  },
}
</script>

<style scoped lang="scss">
/deep/ .gist {
  .gist-meta, .gist-data, .gist-file, .blob-num, .blob-code {
    font-family: 'IBM Plex Mono', monospace !important;
  }
}
</style>
