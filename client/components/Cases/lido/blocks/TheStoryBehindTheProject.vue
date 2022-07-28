<template>
  <section class="container_regular m-96_bottom media-m-48_bottom case-lido__story-behind">
    <h3 class="case_title_h2 m-12_bottom media-m-24_bottom">
      The story behind the project
    </h3>
    <TextParagraph class="m-24_bottom media-m-48_bottom">
      This project came about as a result of a perfect match between the clients' desires and Mad Devs' capabilities.
      The client lacked the time and resources necessary to accelerate the rollout of new integrations,
      such as conducting research, comparing two codebases, and developing a plan for task scoping.
    </TextParagraph>
    <List class="m-48_bottom media-m-24_bottom">
      <ListItemCustomCheckMark
        v-for="listItem in theStoryBehindList"
        :key="listItem.text"
        :background-color="listItem.backgroundColor"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom"
        class="case-lido__story-behind-list-item"
      >
        <img
          slot="icon"
          v-lazy-load
          width="25"
          height="25"
          :data-src="$getMediaFromS3(`/images/Cases/lido/svg/check-mark.svg`)"
          :alt="listItem"
          class="list-item__box-icon"
        >
        <TextParagraph
          slot="description"
          :class="`text-color-${listItem.textColor}`"
        >
          {{ listItem.text }}
        </TextParagraph>
      </ListItemCustomCheckMark>
    </List>
  </section>
</template>
<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import ListItemCustomCheckMark from '@/components/Cases/shared/ListItemCustomCheckMark'
import List from '@/components/Cases/shared/List'
import { theStoryBehindList } from '@/data/caseLido'

export default {
  name: 'TheStoryBehindTheProject',
  components: {
    TextParagraph,
    List,
    ListItemCustomCheckMark,
  },

  data() {
    return {
      theStoryBehindList,
    }
  },
}
</script>
<style scoped lang="scss">
.list-item__box-icon {
  vertical-align: text-bottom;
  margin-right: 14.78px;
}
</style>
