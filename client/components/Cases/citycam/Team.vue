<template>
  <section class="container_regular">
    <h3 class="case_title_h3 m-96_top m-24_bottom media-m-48_top media-m-12_bottom">
      Meet the team
    </h3>
    <ListTeam class="m-72_bottom media-m-41_bottom">
      <ListTeamItem
        v-for="member in team"
        :key="member.name"
        v-bind="member"
      />
    </ListTeam>
    <TextQuoteAuthor
      class="case_text-align-center m-72_bottom p-48_top media-m-48_bottom"
      author="Iskender Bektemir"
      position="Managing Director at CityCam"
      file="iskender-bektemir"
      extension="png"
      alt="Iskender Bektemir"
      folder="citycam"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom"
    >
      “The Mad Devs specialists aren’t afraid of challenges and are able to combine both hardware and software skills.
      This is what was needed for us. We also appreciate the professional approach to the work and constant
      communication. ”
    </TextQuoteAuthor>
  </section>
</template>

<script>
import ListTeam from '@/components/Cases/shared/ListTeam'
import ListTeamItem from '@/components/Cases/shared/ListTeamItem'
import TextQuoteAuthor from '@/components/Cases/shared/TextQuoteAuthor'
import { team } from '@/data/caseCityCam'

export default {
  name: 'Team',
  components: {
    ListTeam,
    ListTeamItem,
    TextQuoteAuthor,
  },

  data() {
    return {
      team,
    }
  },
}
</script>
