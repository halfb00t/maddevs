<template>
  <section class="case_container media-m-48_bottom m-96_bottom">
    <div class="container_regular">
      <h2 class="case_title_h2 m-24_bottom media-m-12_bottom">
        Widget speed optimisation
      </h2>
      <TextParagraph class="m-66_bottom">
        Our frontend and backend developers not only made the appearance of the widget pixel-perfect but also refactored
        the widget. Thus, when Clutch users add a widget to their website, it has minimal effects on the page’s load
        time and looks just right.
      </TextParagraph>
    </div>
    <div class="container_full background-color-blue-grey p-80_bottom p-80_top media-p-24_top media-p-0_bottom">
      <div class="case_img-section">
        <div v-mad-parallax="animationSettingsImg">
          <div class="case_image-wrap">
            <Picture
              :width="1440"
              :height="440"
              :lazy="false"
              folder="clutch"
              file="widget"
              extension="png"
              alt="Widget Speed"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MadParallax from '@/plugins/mad-parallax'
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Picture from '@/components/Cases/shared/Picture'

export default {
  name: 'WidgetSpeed',
  components: {
    TextParagraph,
    Picture,
  },

  directives: {
    MadParallax,
  },

  data() {
    return {
      animationSettingsImg: {
        direction: 'x',
        reverse: true,
        customMove: true,
        startPoint: 3.5,
        speed: 0.3,
      },
    }
  },
}
</script>

<style scoped lang="scss">
.case {
  &_image-wrap {
    min-width: 4211px;
    max-width: 4211px;
    min-height: 540px;
    max-height: 595px;
    position: relative;
    left: 50%;
    transform: translateX(-30%);

  }

  @media screen and (max-width: 768px) {
    &_image-wrap {
      left: unset;
      right: 942px;
      transform: none;
    }

    &_img-section {
      max-height: 276px;
      overflow: hidden;
    }
  }
}
</style>
