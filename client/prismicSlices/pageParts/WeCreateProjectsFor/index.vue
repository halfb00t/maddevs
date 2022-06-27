<template>
  <WeCreateProjectsForWithMap
    :slice="slice"
  />
</template>

<script>
// DO NOT USE DEFAULT VARIATION !
import WeCreateProjectsForWithMap
  from '@/prismicSlices/pageParts/WeCreateProjectsFor/variations/WeCreateProjectsForWithMap/WeCreateProjectsForWithMap'

export default {
  name: 'WeCreateProjectsFor',
  components: {
    WeCreateProjectsForWithMap,
  },

  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>
