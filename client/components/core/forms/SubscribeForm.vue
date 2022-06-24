<template>
  <div
    class="subscribe-form"
  >
    <h4 class="subscribe-form__title">
      Subscribe to our monthly Newsletter
    </h4>
    <div
      class="subscribe-form__controllers"
    >
      <transition
        name="button"
        appear
      >
        <button
          v-if="!isActive"
          class="subscribe-form__button"
          @click="showEmailInput"
        >
          Subscribe
        </button>
      </transition>
      <transition
        name="email"
        appear
      >
        <div
          v-if="isActive"
          class="subscribe-form__controllers-input-wrap"
        >
          <input
            type="email"
            class="subscribe-form__email"
            placeholder="your@mail.com"
          >
          <button
            class="subscribe-form__submit-btn"
            @click="submitSubscriber"
          >
            <svg
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.81494 1.24805L10.9816 5.41471L6.81494 9.58138"
                stroke="white"
              />
              <path
                d="M0.981445 5.41504H10.7037"
                stroke="white"
              />
            </svg>
          </button>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SubscribeForm',

  data() {
    return {
      isActive: false,
      isSend: false,
    }
  },

  methods: {
    showEmailInput() {
      this.isActive = !this.isActive
    },

    submitSubscriber() {
      this.isSend = !this.isSend
      this.isActive = !this.isActive
    },
  },
}
</script>
<style lang="scss" scoped>
.subscribe-form {
  max-width: 199px;

  &__title {
    @include font('Inter', 14px, 700);
    line-height: 130%;
    letter-spacing: -0.1px;
    color: $text-color--black-oil;
    max-width: 150px;
    margin-bottom: 14px;
  }

  &__controllers {
    width: 100%;
    position: relative;
  }

  &__controllers-input-wrap {
    position: absolute;
    top: 0;
    border-radius: 6px;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
    display: flex;
    overflow: hidden;
  }

  &__button {
    background: $bgcolor--red;
    width: 100%;
    border: none;
    border-radius: 6px;
    @include font('Inter', 14px, 400);
    line-height: 166%;
    letter-spacing: -0.1px;
    font-feature-settings: 'ss02' on, 'liga' off;
    color: $text-color--white-primary;
    padding: 9px 62px;
    cursor: pointer;
  }

  &__email {
    width: 100%;
    background: transparent;
    display: block;
    @include font('Inter', 12px, 400);
    line-height: 166%;
    letter-spacing: -0.1px;
    color: $text-color--quote-box;
    border: 1px solid $text-color--grey-opacity-40-percent;
    border-right: none;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    padding: 11.25px 11px;
  }

  &__submit-btn {
    width: 30%;
    background-color: $bgcolor--red;
    border: none;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    cursor: pointer;
  }
}

// ANIMATIONS
.button-enter-active,
.button-leave-active {
  transition: all 0.3s ease-in-out;
}

.button-enter,
.button-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.email-enter-active,
.email-leave-active {
  transition: all 0.3s ease-in-out;
}

.email-enter,
.email-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
