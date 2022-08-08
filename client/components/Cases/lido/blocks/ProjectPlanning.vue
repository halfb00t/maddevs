<template>
  <section class="case-lido__project-planning m-96_bottom media-m-48_bottom">
    <div class="container_regular">
      <h3 class="case_title_h2 m-12_bottom">
        Project planning and management
      </h3>
      <TextParagraph class="m-24_bottom">
        To perform client tasks, the most qualified programmers were recruited.
        The project's first phase involved 4 people, while the second phase involved 3 developers.
      </TextParagraph>
      <TextParagraph class="m-24_bottom">
        Work on both objectives occurred in several phases:
      </TextParagraph>
      <List class="m-24_bottom">
        <ListItemCustomCheckMark
          v-for="listItem in projectPlanningList"
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
            :data-src="$getMediaFromS3(`/images/Cases/lido/svg/${listItem.icon}.svg`)"
            :alt="listItem"
            class="list-item__box-icon"
          >
          <TextParagraph
            slot="description"
            :class="`case-lido__project-planning-list-item-description text-color-${listItem.textColor}`"
          >
            {{ listItem.text }}
          </TextParagraph>
        </ListItemCustomCheckMark>
      </List>
      <TextParagraph>
        *IMPORTANT: Lido ensures that external companies always audit smart contracts because it is a matter of security and the right functionality.
      </TextParagraph>
    </div>
  </section>
</template>
<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import ListItemCustomCheckMark from '@/components/Cases/shared/ListItemCustomCheckMark'
import List from '@/components/Cases/shared/List'
import { projectPlanningList } from '@/data/caseLido'

export default {
  name: 'ProjectPlanning',

  components: {
    TextParagraph,
    List,
    ListItemCustomCheckMark,
  },

  data() {
    return {
      projectPlanningList,
    }
  },
}
</script>
<style lang="scss" scoped>
.case-lido__project-planning {
  ::v-deep .list-item-custom-check-mark {
    padding: 18.92px 29.5px;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }

    @media screen and (max-width: 480px) {
      padding: 17.08px 13.5px;
    }
  }

  &-list-item-description {
    font-size: 20px;
    font-weight: 500;
    line-height: 166%;

    @media screen and (max-width: 480px) {
      font-size: 16px;
      line-height: 150%;
      letter-spacing: -0.02em;
    }
  }
}

.list-item__box-icon {
  vertical-align: text-bottom;
  margin-right: 27.44px;
  margin-top: 4px;

  @media screen and (max-width: 480px) {
    margin-right: 12.5px;
    margin-top: 0;
  }
}
</style>
