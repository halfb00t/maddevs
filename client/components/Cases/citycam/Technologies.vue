<template>
  <section class="container_regular">
    <h2 class="case_title_h2 m-24_bottom media-m-12_bottom">
      Technology stack
    </h2>
    <ListTechnologies class="m-96_bottom media-m-48_bottom">
      <ListTechnologiesItem
        v-for="technology in technologies"
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
import { technologies } from '@/data/caseCityCam'

export default {
  name: 'Technologies',
  components: {
    ListTechnologies,
    ListTechnologiesItem,
  },

  data() {
    return {
      technologies,
    }
  },
}
</script>

<style lang="scss" scoped>
.case {
  &_tech-list-item::v-deep p {
    font-size: 12px;
  }
  @media screen and (max-width: 768px) {
    &_tech-list-item::v-deep p {
      font-size: 8px;
    }
  }
}
</style>
