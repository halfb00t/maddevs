<template>
  <div class="cta-banner_container container">
    <UIBanner
      title="Build your product <br /> with Mad Devs"
      text="Together we build solutions that bring digital innovation."
      :image="$getMediaFromS3(`/images/CTABanner/Anatoliy.png`)"
      image-alt-text="Anatoliy"
      man-name="Anatoliy Fedorenko"
      man-position="Head of Delivery"
    >
      <UIButton @click="show">
        Estimate your project
      </UIButton>
    </UIBanner>
    <ModalContactMe
      ref="modalContactMe"
      :location="'\'Estimate your project\' button, delivery models page'"
    />
  </div>
</template>

<script>
import UIBanner from '@/components/shared/UIBanner'
import UIButton from '@/components/shared/UIButton'

export default {
  name: 'CTABanner',
  components: {
    UIBanner,
    UIButton,
    ModalContactMe: () => import('@/components/core/modals/ModalContactMe'),
  },

  methods: {
    show() {
      if (!this.$refs?.modalContactMe?.show) return
      this.$refs.modalContactMe.show()
    },
  },
}
</script>

<style lang="scss" scoped>
.cta-banner_container {
  padding-bottom: 119px;
  @media screen and (max-width: 768px) {
    padding-bottom: 44px;
  }

  /deep/ .cta-banner {
    @media screen and (max-width: 992px) {
      min-height: 425px;
    }

    &__image {
      @media screen and (max-width: 960px) {
        right: 40px;
      }
      @media screen and (max-width: 860px) {
        right: -55px;
      }
      @media screen and (max-width: 768px) {
        right: 0;
        margin-top: 20px;
        margin-right: -40px;
      }
    }
  }

  /deep/ .ui-button {
    width: 233px;
    height: 52px;
    font-weight: 400;
    font-size: 18px;
    letter-spacing: -0.02em;
    @media screen and (max-width: 900px) {
      font-size: 16px;
    }
  }

}
</style>
