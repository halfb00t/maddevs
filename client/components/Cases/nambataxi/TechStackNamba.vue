<template>
  <section class="container_regular">
    <h2 class="case_title_h2 m-24_bottom media-m-12_bottom case_technology-title">
      Technologies we used
    </h2>
    <ListTechnologies class="m-96_bottom media-m-48_bottom">
      <ListTechnologiesItem
        v-for="technology in techStackNambaTaxi"
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
import { techStackNambaTaxi } from '@/data/caseNambaTaxi'

export default {
  name: 'TechStackNamba',
  components: {
    ListTechnologies,
    ListTechnologiesItem,
  },

  data() {
    return {
      techStackNambaTaxi,
    }
  },
}
</script>

<style lang="scss" scoped>
.case {
  &_technology-title{
    text-align: center;
  }
  &_tech-list-item::v-deep {
    .django {
      width: 57px;
    }
    .osrm, .django-rest{
      width: 63px;
    }

    @media screen and (max-width: 768px) {
      p {
        font-size: 8px;
      }
      .django, .osrm {
        width: 30px;
      }
    }
  }
}
</style>
