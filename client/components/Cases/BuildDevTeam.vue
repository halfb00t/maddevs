<template>
  <div class="build-dev-team_wrapper">
    <div class="container">
      <UIBanner
        title="Let’s build or scale up your development team?"
        text="Book a call with us and we’ll guide you through a structured process to assess the right solution for your business. You'll be talking to technical experts, not account managers."
        :image="$getMediaFromS3(`/images/CTABanner/Anatoliy.png`)"
        image-alt-text="Anatoliy Fedorenko"
        man-name="Anatoliy Fedorenko"
        man-position="Head of Delivery"
      >
        <UIButton
          class="build-dev-team__button"
          @click="show"
        >
          Book a free consultation
        </UIButton>
      </UIBanner>
      <ModalContactMe
        ref="modalContactMe"
        :location="'\'Book a free consultation\' button, case studies page'"
      />
    </div>
  </div>
</template>

<script>
import UIBanner from '@/components/shared/UIBanner'
import UIButton from '@/components/shared/UIButton'

export default {
  name: 'BuildDevTeam',
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
.build-dev-team {
  &_wrapper {
    background-color: $bgcolor--white-primary;
    padding-bottom: 100px;
    margin-top: -1px;
    @media screen and (max-width: 768px) {
      padding-bottom: 44px;
    }

    /deep/ .cta-banner__image {
      right: 0;
      @media screen and (max-width: 900px) {
        right: -55px;
      }
      @media screen and (max-width: 768px) {
        right: 0;
        margin-top: 20px;
        margin-right: -40px;
      }
    }
  }
  &__button {
    font-weight: normal;
    padding: 17px 28px;
    font-size: 18px;
    @media screen and (max-width: 900px) {
      font-size: 16px;
    }
  }
}
</style>
