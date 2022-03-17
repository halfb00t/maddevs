<template>
  <section class="container_regular">
    <h3 class="case_title_h2 m-24_bottom">
      Meet the team
    </h3>
    <div
      ref="meetTheTeamList"
    >
      <ListTeam
        v-if="intoView"
        class="m-72_bottom media-m-41_bottom"
      >
        <ListTeamItem
          v-for="member in teamBandpay"
          :key="member.name"
          v-bind="member"
        />
      </ListTeam>
    </div>
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
      intoView: false,
    }
  },

  mounted() {
    this.mountWhenVisible()
  },

  methods: {
    mountWhenVisible() {
      const Observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.intoView = true
            observer.unobserve(entry.target)
          }
        })
      })
      Observer.observe(this.$refs.meetTheTeamList)
    },
  },
}
</script>
