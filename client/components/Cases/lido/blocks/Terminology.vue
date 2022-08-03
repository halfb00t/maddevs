<template>
  <section class="case-lido__terminology m-96_bottom media-m-48_bottom">
    <div class="container_regular">
      <h3
        id="terminology"
        class="case_title_h2 m-24_bottom case-lido__terminology-title"
      >
        Terminology
      </h3>
      <List>
        <ListItemTerminology
          v-for="(term, i) in terminologyLido"
          :key="term + i"
          data-aos="fade-up"
        >
          <TextParagraph v-html="term" />
        </ListItemTerminology>
      </List>
    </div>
  </section>
</template>
<script>
import { terminologyLido } from '@/data/caseLido'
import List from '@/components/Cases/shared/List'
import ListItemTerminology from '@/components/Cases/lido/shared/ListItemTerminology'
import TextParagraph from '@/components/Cases/shared/TextParagraph'

export default {
  name: 'Terminology',
  components: { TextParagraph, ListItemTerminology, List },
  data() {
    return {
      terminologyLido,
    }
  },
}
</script>
<style lang="scss" scoped>
.case-lido__terminology {
  &-title {
    scroll-margin-top: 100px;
  }
}
</style>
