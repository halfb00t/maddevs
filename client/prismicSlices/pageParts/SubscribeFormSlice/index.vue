<template>
  <section
    class="subscribe-form-slice-section"
    :class="{ 'subscribe-form-slice-section--black-theme': backgroundColor === 'black' }"
  >
    <div
      class="subscribe-form-slice"
      :class="{ 'subscribe-form-slice--black-theme': backgroundColor === 'black' }"
    >
      <div class="subscribe-form-slice__image-wrapper">
        <img
          v-lazy-load
          :data-src="$getMediaFromS3('/images/Blog/svg/subscribe-mailbox.svg')"
          alt="Subscribe Mail Box"
          class="subscribe-form-slice__image"
          width="246"
          height="170"
        >
        <img
          v-lazy-load
          :data-src="$getMediaFromS3('/images/Blog/svg/subscribe-mailbox-mobile.svg')"
          alt="Subscribe Mail Box"
          class="subscribe-form-slice__image--mobile"
          width="120"
          height="168"
        >
      </div>
      <SubscribeForm
        form-location="Blog Post"
        :big-title="true"
        :submit-button-size-in-percentage="30"
        form-max-width="58%"
        :show-background-image="false"
        :line-break-for-success="true"
        :black-theme="backgroundColor === 'black'"
      />
    </div>
  </section>
</template>

<script>
import SubscribeForm from '@/components/core/forms/SubscribeForm'

export default {
  name: 'SubscribeFormSlice',

  components: { SubscribeForm },

  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },

  data() {
    return {
      backgroundColor: this.slice?.primary?.backgroundColor,
    }
  },
}
</script>

<style lang="scss" scoped>
.subscribe-form-slice-section {
  background: $bgcolor--white-primary;

  &--black-theme {
    background: $bgcolor--black;
  }
}

.subscribe-form-slice {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border: 1px solid #A0A0A1;
  padding-right: 53px;
  margin: 0 auto;

  @media screen and (max-width: 680px) {
    padding-right: 14px;
  }

  &--black-theme {
    background: $bgcolor--black;
    border-color: $border-color--black;
  }

  &__image-wrapper {
    width: 40%;
    align-self: flex-end;
  }

  &__image {
    width: 100%;
    height: auto;
    display: block;

    &--mobile {
      display: none;
    }

    @media screen and (max-width: 580px) {
      display: none;

      &--mobile {
        display: block;
        width: 100%;
        height: auto;
        max-width: 150px;
      }
    }

    @media screen and (max-width: 460px) {
      &--mobile {
        max-width: 100%;
      }
    }
  }

  ::v-deep .subscribe-form__title--big {
    margin: 18px 0 22px;
  }

  ::v-deep .subscribe-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 1024px) {
      max-width: 60% !important;

      &__title {
        margin-bottom: 14px;
      }

      &__email-success {
        display: inline-block;
        margin-bottom: 13px;
      }
    }

    @media screen and (max-width: 680px) {
      align-self: center;

      &__title {
        font-size: 18px;
      }
    }

    @media screen and (max-width: 460px) {
      &__title {
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        letter-spacing: -0.02em;
        margin-bottom: 12px;
      }

      &__button {
        height: 34px;
        display: block;
        text-align: center;
        padding: 0;
        font-size: 12px;
      }

      &__email {
        font-size: 10px;
      }

      &__email-success {
        width: 90%;
        br {
          display: none;
        }
      }
    }

    @media screen and (max-width: 430px) {
      max-width: 60% !important;

      &__email-success {
        width: 90%;
        br {
          display: none;
        }
      }
    }

    &__controllers {
      width: 80%;

      @media screen and (max-width: 460px) {
        width: 90%;

        min-height: 34px;
        max-height: 34px;

        &-input-wrap {
          height: 34px;
        }
      }
    }
  }
}
</style>
