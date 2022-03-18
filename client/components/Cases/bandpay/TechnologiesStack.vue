<template>
  <section class="container_regular">
    <h3 class="case_title_h2 m-24_bottom media-m-12_bottom">
      Technology stack
    </h3>
    <ListTechnologies class="m-96_bottom media-m-48_bottom">
      <ListTechnologiesItem
        v-for="technology in techStackBandpay"
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
import { techStackBandpay } from '@/data/caseBandpay'

export default {
  name: 'TechnologiesStack',
  components: {
    ListTechnologies,
    ListTechnologiesItem,
  },

  data() {
    return {
      techStackBandpay,
    }
  },
}
</script>
<style lang="scss" scoped>
.case {
  &_tech-list-item::v-deep {
    p {
      font-size: 12px;
    }

    .stripe {
      width: 52px;
    }

    .retrofit {
      width: 55px;
      height: 55px;
      margin-top: -10px;
      margin-bottom: 0;
    }

    .moya {
      width: 62px;
      margin-top: -3px;
      margin-bottom: 8px;
    }

    @media screen and (max-width: 768px) {
      p {
        font-size: 8px;
      }
      .stripe {
        width: 30px;
      }

      .retrofit {
        width: 33px;
        height: 33px;
        margin-top: -5px;
        margin-bottom: 0;
      }

      .moya {
        width: 30px;
        margin-top: 0;
        margin-bottom: 8px;
      }
    }
  }
}
</style>
