<template>
  <section class="container_regular">
    <h3 class="case_title_h2 m-24_bottom">
      Meet the team
    </h3>
    <ListTeam class="m-72_bottom media-m-41_bottom">
      <ListTeamItem
        v-for="member in teamBandpay"
        :key="member.name"
        v-bind="member"
      />
    </ListTeam>
  </section>
</template>
<script>
import ListTeam from '@/components/Cases/shared/ListTeam'
import ListTeamItem from '@/components/Cases/shared/ListTeamItem'
import { teamBandpay } from '@/data/caseBandpay'

export default {
  name: 'MeetTeam',
  components: {
    ListTeam,
    ListTeamItem,
  },

  data() {
    return {
      teamBandpay,
    }
  },
}
</script>
