<template>
  <section class="m-96_bottom media-m-48_bottom">
    <section class="container_regular m-48_bottom media-m-24_bottom">
      <h3 class="case_title_h2 m-12_bottom">
        Project planning and management
      </h3>
      <TextParagraph class="m-24_bottom media-m-12_bottom">
        The size of the development team changed throughout the whole project. The group was relatively small initially,
        but it scaled up sharply as we moved forward with the project and onboarded new team members, such as frontend,
        backend, and mobile developers. At that time, we used the Agile Scrum methodology, that is, divided the project
        into incremental phases or 2-week sprints and held regular demo and retrospective sessions.
      </TextParagraph>
      <TextParagraph class="m-24_bottom media-m-12_bottom">
        After the active development phase changed for the support phase, the team size decreased, and we switched
        to Kanban. This methodology has no fixed sprints and timeframes, and it focuses more on the flow of the project.
        By applying Kanban, we prioritised tasks by pulling them into the workflow from the backlog.
      </TextParagraph>
    </section>
    <section class="container_middle">
      <div class="case_image-wrapper m-48_top media-m-24_top case_box-shadow">
        <Picture
          :shadow="false"
          :lazy="false"
          :radius="false"
          :width="1026"
          :height="16.45"
          :background="true"
          folder="common"
          file="safari-top-bar-black"
          extension="jpg"
          alt="Project Planning"
        />
        <div class="container_middle__main-image">
          <Picture
            :shadow="false"
            :lazy="false"
            :radius="false"
            :width="944"
            :height="474.71"
            folder="bandpay"
            file="project-planning"
            extension="png"
            alt="Project Planning"
          />
        </div>
      </div>
    </section>
  </section>
</template>
<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Picture from '@/components/Cases/shared/Picture'

export default {
  name: 'ProjectPlanning',
  components: {
    TextParagraph,
    Picture,
  },
}
</script>
<style lang="scss" scoped>
.container_middle {
  &__main-image {
    padding: 53.1px 42px 68px 42px;
  }
}
.case_image-wrapper {
  border-radius: 3px;
  overflow: hidden;
}
</style>
