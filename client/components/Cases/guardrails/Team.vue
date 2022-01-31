<template>
  <section class="container_regular m-72_bottom media-m-48_bottom">
    <h2 class="case_title_h2 case_title m-48_bottom media-m-24_bottom">
      Meet the team
    </h2>
    <div class="m-72_bottom media-m-48_bottom">
      <ListTeam class="m-72_bottom media-m-41_bottom">
        <ListTeamItem
          v-for="member in team"
          :key="member.name"
          v-bind="member"
        />
      </ListTeam>
    </div>
    <TextQuoteAuthor
      class="case_text-align-center m-72_bottom p-48_top media-m-48_bottom"
      author="Stefan Streichsbier"
      position="Founder & CEO, GuardRails"
      file="stefan"
      extension="png"
      alt="Stefan Streichsbier"
      folder="guardrails"
    >
      “I am very happy with Mad Devs services so far. Looking forward to a long and fruitful partnership”.
    </TextQuoteAuthor>
  </section>
</template>

<script>
import TextQuoteAuthor from '@/components/Cases/shared/TextQuoteAuthor'
import ListTeamItem from '@/components/Cases/shared/ListTeamItem'
import ListTeam from '@/components/Cases/shared/ListTeam'
import { team } from '@/data/caseGuardrails'

export default {
  name: 'Team',
  components: {
    TextQuoteAuthor,
    ListTeamItem,
    ListTeam,
  },

  data() {
    return {
      team,
    }
  },
}
</script>

<style lang="scss" scoped>
.case {

}
</style>
