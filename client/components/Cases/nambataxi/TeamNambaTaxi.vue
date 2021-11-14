<template>
  <section class="container_regular">
    <h3 class="case_title_h3 m-24_bottom case_team-title">
      Meet the team
    </h3>
    <ListTeam class="m-72_bottom media-m-41_bottom">
      <ListTeamItem
        v-for="member in teamNamba"
        :key="member.name"
        v-bind="member"
      />
    </ListTeam>
  </section>
</template>

<script>
import ListTeam from '@/components/Cases/shared/ListTeam'
import ListTeamItem from '@/components/Cases/shared/ListTeamItem'
import { teamNamba } from '@/data/caseNambaTaxi'

export default {
  name: 'TeamNambaTaxi',
  components: {
    ListTeam,
    ListTeamItem,
  },

  data() {
    return {
      teamNamba,
    }
  },
}
</script>

<style lang="scss" scoped>
.case {
  &_team-title{
    text-align: center;
  }
}
</style>
