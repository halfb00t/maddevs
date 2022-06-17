<template>
  <WeCreateProjectsForWithMap
    v-if="slice.variation === 'weCreateProjectsForWithMap'"
    :slice="slice"
  />
  <WeCreateProjectsFor
    v-else
    :slice="slice"
  />
</template>

<script>
import WeCreateProjectsForWithMap
  from '@/prismicSlices/pageParts/WeCreateProjectsFor/variations/WeCreateProjectsForWithMap/WeCreateProjectsForWithMap'
import WeCreateProjectsFor
  from '@/prismicSlices/pageParts/WeCreateProjectsFor/variations/default-slice/default-slice'

export default {
  name: 'WeCreateProjectsFor',
  components: {
    WeCreateProjectsForWithMap,
    WeCreateProjectsFor,
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
