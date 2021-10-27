<template>
  <section>
    <div class="container_regular">
      <h3 class="case_title_h3 m-12_bottom">
        Pipelines and testing
      </h3>
      <TextParagraph class="m-24_bottom">
        Code of exceptional quality has been our primary goal in our work with Clutch.co. By meticulously testing each
        code element with unit, acceptance, and screen compare tests and by applying present-day approaches to
        development and deployment, we have provided exceptional flexibility in our delivery of a stable Clutch.co
        solution. To avoid downtimes and issues caused by new deployments, testing and staging environments in
        Kubernetes perfectly mimic production. Thus, all updates are made without any inconvenience to the end users.
      </TextParagraph>
    </div>
    <div class="container_full case_image-container background-color-blue-grey m-48_bottom">
      <div
        class="container_regular"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom"
      >
        <Lottie
          id="pipeline-animation"
          :options="options"
          class="case_lottie"
          @animCreated="handleAnimation"
        />
      </div>
    </div>
    <div class="container_regular">
      <h3 class="case_title_h3 m-12_bottom">
        Communication
      </h3>
      <TextParagraph class="m-24_bottom media-m-12_bottom">
        A business always strives to effectively use their employees’ time and skills, even when they are 12 hours away.
        On top of the typical Slack communication, due to the social isolation required by the global pandemic, the Mad
        Devs team integrated online meetings to mimic a normal office setup.
      </TextParagraph>
      <List class="m-24_bottom">
        <ListItemDot class="m-24_bottom media-m-12_bottom">
          <span class="case_list-item-bold">Weekly video meetings with the CTO:</span> Three times a week, the project
          managers and the frontend and backend
          developers take part in open video meetings with the CTO. Here, they report on the work accomplished, raise
          concerns, and share suggestions.
        </ListItemDot>
        <ListItemDot class="m-24_bottom media-m-12_bottom">
          <span class="case_list-item-bold">Weekly video meetings with multi-location teams:</span> Three times a week,
          the project manager takes part in sync-up
          calls where she reports on ongoing problems and brainstorms solutions.
        </ListItemDot>
        <ListItemDot class="m-24_bottom media-m-12_bottom">
          <span class="case_list-item-bold">Weekly sprint planning meetings with team members:</span> Due to the
          continuously growing team size, weekly sprint
          planning meetings were split into seven meetings of smaller teams to improve communication effectiveness.
        </ListItemDot>
      </List>
    </div>
    <div class="container_middle case_img-wrap m-48_bottom">
      <Picture
        :shadow="false"
        :radius="false"
        :width="1026"
        :height="16.45"
        :background="true"
        folder="common"
        file="swiper-frame"
        extension="jpg"
        alt="Clutch: Safari Browser Top Bar."
      />
      <Picture
        :width="1026"
        :height="554"
        :lazy="true"
        folder="clutch"
        file="communication"
        extension="png"
        alt="Communication"
      />
    </div>
  </section>
</template>

<script>
import Lottie from 'vue-lottie/src/lottie.vue'
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import animationData from '@/assets/lottie/clutch/pipelines.json'
import playLottieMixin from '@/mixins/playLottieMixin'
import List from '@/components/Cases/shared/List'
import ListItemDot from '@/components/Cases/shared/ListItemDot'
import Picture from '@/components/Cases/shared/Picture'

export default {
  name: 'Pipelines',
  components: {
    TextParagraph,
    Lottie,
    List,
    ListItemDot,
    Picture,
  },

  mixins: [
    playLottieMixin('pipeline-animation', {
      animationData,
      autoplay: false,
      loop: false,
    }),
  ],
}
</script>

<style lang="scss" scoped>
.case {
  &_lottie {
    max-width: 813px;
  }

  &_list-item-bold {
    font-weight: 700;
  }

  &_img-wrap {
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));
  }
}
</style>
