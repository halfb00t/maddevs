<template>
  <div class="ebook-delivery">
    <div class="container">
      <UIBanner
        title="Build your product <br /> with Mad Devs"
        text="Together we build solutions that bring digital innovation."
        :image="$getMediaFromS3(`/images/CTABanner/Anatoliy.png`)"
        image-alt-text="Anatoliy"
        man-name="Anatoliy Fedorenko"
        man-position="Delivery Manager"
      >
        <UIButton @click="goToDeliveryPage">
          Find out about Collaboration Approaches
          <img
            width="20"
            height="20"
            src="@/assets/img/common/arrow-up-right.svg"
            alt="arrow"
          >
        </UIButton>
      </UIBanner>
    </div>
  </div>
</template>

<script>
import UIBanner from '@/components/shared/UIBanner'
import UIButton from '@/components/shared/UIButton'

export default {
  name: 'Delivery',
  components: { UIBanner, UIButton },
  methods: {
    goToDeliveryPage() {
      this.$router.push('/approach/delivery-models/')
    },
  },
}
</script>

<style lang="scss" scoped>
.ebook-delivery {
  background-color: #fff;
  padding-bottom: 50px;
  margin: -1px 0;

  .ui-button {
    display: flex;
    align-items: center;
    @include font('Inter', 16px, 600);
    letter-spacing: -0.4px;
    line-height: 20px;
    color: #fff;
    padding: 14px 24px;

    @media screen and (max-width: 900px) {
      padding: 12px;
    }

    img {
      margin-left: 7px;
    }
  }

  /deep/ .cta-banner {
    min-height: 543px;

    &__man span br {
      @media screen and (max-width: 900px) {
        display: none;
      }
    }
  }
}
</style>
