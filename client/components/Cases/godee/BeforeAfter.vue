<template>
  <section>
    <section class="container_full case_before-after-wrapper background-color-silver m-48_top media-m-20_top">
      <h2 class="case_title_h2 m-24_bottom case_text-align-center">
        Before & After
      </h2>
      <div class="container_regular">
        <UIBeforeAfterImage
          :value="50"
          :step="0.05"
          :before-image="$getMediaFromS3(`/images/Cases/godee/png/application-after.png`)"
          :after-image="$getMediaFromS3(`/images/Cases/godee/png/application-before.png`)"
        />
      </div>
    </section>
    <p class="case_image-description m-12_top m-104_bottom media-m-48_bottom">
      GoDee 2018 VS. GoDee {{ currentYear }}
    </p>
  </section>
</template>

<script>
import UIBeforeAfterImage from '@/components/shared/UIBeforeAfterImage'

export default {
  name: 'BeforeAfter',

  components: {
    UIBeforeAfterImage,
  },

  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
}
</script>
