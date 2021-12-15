<template>
  <div
    class="mad-community-banner"
    :style="{backgroundImage: `url(${$getMediaFromS3(`/images/Blog/svg/flame.svg`)})`}"
  >
    <div class="mad-community-banner__content">
      <div class="text-content_wrapper">
        <div class="main-title-wrapper">
          <h2
            class="banner-main-title banner-main-title--red"
            :style="{backgroundImage: `url(${$getMediaFromS3(`/images/Blog/svg/flame-small.svg`)})`}"
          >
            Build your career with us
          </h2>
          <h3 class="banner-sub-title banner-sub-title--white">
            We are always open to talented professionals.
            <br>
            Check if there is a suitable vacancy for you.
          </h3>
        </div>
        <div
          class="mad-community-banner__button-wrapper"
          :style="{backgroundImage: `url(${$getMediaFromS3(`/images/Blog/svg/mad-logo.svg`)})`}"
        >
          <UIButton
            type="button"
            class="mad-community-banner__button"
          >
            <!-- @click="" //todo add method to this action-->
            Learn more
          </UIButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UIButton from '@/components/shared/UIButton'

export default {
  name: 'MadCommunityBanner',
  components: {
    UIButton,
  },

  data() {
  },
}
</script>

<style lang="scss" scoped>
.mad-community-banner {
  padding: 20px 0 40px 52px;
  margin: 52px 0 0;
  font-weight: 800;
  line-height: 67px;

  background-repeat: no-repeat;
  background-position: right -140px bottom -270px;
  &__button-wrapper {
    padding: 0 42px 0 0;
    margin-top: 15px;
    background-repeat: no-repeat;
    background-position: right 1px bottom 12px;
    display: inline-block;
    background-size: 44px;
  }
  &__button {
    @include font('Poppins', 14px, 800);
    padding: 7px 40px;
    letter-spacing: 0.04em;
    border-radius: 0;
    background-position: right -140px center 0;
  }

}

.banner-main-title {
  @include font('Poppins', 55px, 800);
  padding-top: 30px;
  margin-bottom: 24px;
  font-style: normal;
  background-repeat: no-repeat;
  background-position: right 50px bottom 40px;

  &--red {
    color: $text-color--red;
  }
}

.main-title-wrapper {
  max-width: 772px;
}

.banner-sub-title {
  @include font('Poppins', 28px, 800);
  line-height: 34px;

  &--white {
    color: $text-color--white;
  }
}
</style>
