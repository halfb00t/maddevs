<template>
  <section class="container_regular">
    <h3 class="case_title_h2 m-24_bottom media-m-12_bottom">
      Technology stack
    </h3>
    <ListTechnologies class="m-96_bottom media-m-48_bottom">
      <ListTechnologiesItem
        v-for="technology in techStackLido"
        :key="technology.name"
        class="case_tech-list-item"
        v-bind="technology"
      />
    </ListTechnologies>
  </section>
</template>
<script>
import ListTechnologies from '@/components/Cases/shared/ListTechnologies'
import ListTechnologiesItem from '@/components/Cases/shared/ListTechnologiesItem'
import { techStackLido } from '@/data/caseLido'

export default {
  name: 'TechnologiesStack',
  components: {
    ListTechnologies,
    ListTechnologiesItem,
  },

  data() {
    return {
      techStackLido,
    }
  },
}
</script>
<style lang="scss" scoped>

</style>
