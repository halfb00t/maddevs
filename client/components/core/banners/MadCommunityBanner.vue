<template>
  <div
    class="mad-community-banner"
    :lazy-background="$getMediaFromS3(`/images/Blog/svg/flame.svg`)"
  >
    <div class="mad-community-banner__content">
      <div class="text-content_wrapper">
        <div class="main-title-wrapper">
          <h2
            class="banner-main-title banner-main-title--red"
            :lazy-background="$getMediaFromS3(`/images/Blog/svg/flame-small.svg`)"
          >
            Build your career with us
          </h2>
          <h3 class="banner-sub-title banner-sub-title--white">
            We are always open to talented professionals.
            Check if there is a suitable vacancy for you.
          </h3>
        </div>
        <div
          class="mad-community-banner__button-wrapper"
          :style="{backgroundImage: `url(${$getMediaFromS3(`/images/Blog/svg/mad-button.svg`)})`}"
          @click="goToCareersPage"
        >
          <div
            class="mad-community-banner__button"
          >
            Learn more
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MadCommunityBanner',

  methods: {
    goToCareersPage() {
      this.$router.push('/careers/')
    },
  },
}
</script>

<style lang="scss" scoped>
.mad-community-banner {
  padding: 20px 0 40px 52px;
  margin: 32px 0 0;
  font-weight: 800;
  background-repeat: no-repeat;
  background-position: right -140px bottom -270px;

  @media (max-width: 1320px) {
    background-size: 450px;
    background-position: right -170px bottom -270px;
    padding: 20px 0 40px;
    margin: 0;
  }

  @media screen and (max-width: 1024px) {
    background-image: none !important;
  }

  @media screen and (max-width: 768px) {
    padding: 0;
    margin: 0 0 72px 0;
  }

  @media screen and (max-width: 580px) {
    line-height: inherit;
    margin: 0 0 12px 0;
  }

  &__button-wrapper {
    padding: 0 42px 0 0;
    margin-top: 15px;
    background-repeat: no-repeat;
    display: inline-block;
    cursor: pointer;
  }

  &__button {
    color: $text-color--white;
    padding: 9px 86px 10px 53px;
    letter-spacing: 0.04em;
    border-radius: 0;
  }
}

.main-title-wrapper {
  max-width: 772px;
}

.banner-main-title {
  @include font('Poppins', 55px, 800);
  padding-top: 30px;
  margin-bottom: 20px;
  font-style: normal;
  background-repeat: no-repeat;
  background-position: right 50px bottom 40px;

  &--red {
    color: $text-color--red;
  }

  @media screen and (max-width: 1024px) {
    background-image: none !important;
    font-size: 40px;
    padding-top: 0;
  }
  @media screen and (max-width: 768px) {
    font-size: 32px;
    padding-top: 0;
    margin-bottom: 24px;
  }
}

.banner-sub-title {
  @include font('Poppins', 28px, 800);
  line-height: 34px;
  margin-bottom: 10px;
  @media (max-width: 1350px) {
    max-width: 500px;
  }
  @media screen and (max-width: 1024px) {
    max-width: 650px;
    font-size: 24px;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
    max-width: 500px;
  }
  @media screen and (max-width: 580px) {
    margin-top: 30px;
  }

  &--white {
    color: $text-color--white;
  }
}
</style>
