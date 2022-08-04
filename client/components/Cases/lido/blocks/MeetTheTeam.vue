<template>
  <section class="container_regular m-96_bottom media-m-48_bottom">
    <h3 class="case_title_h2 m-24_bottom">
      Meet the team
    </h3>
    <ListTeam
      class="m-72_bottom media-m-41_bottom"
    >
      <ListTeamItem
        v-for="member in teamLido"
        :key="member.name"
        v-bind="member"
      />
    </ListTeam>
  </section>
</template>
<script>
import ListTeam from '@/components/Cases/shared/ListTeam'
import ListTeamItem from '@/components/Cases/shared/ListTeamItem'
import { teamLido } from '@/data/caseLido'

export default {
  name: 'MeetTheTeam',
  components: {
    ListTeam,
    ListTeamItem,
  },

  data() {
    return {
      teamLido,
    }
  },
}
</script>
