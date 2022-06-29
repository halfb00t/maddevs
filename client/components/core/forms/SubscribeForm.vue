<template>
  <form
    id="subscribe-form"
    class="subscribe-form"
    :style="{ maxWidth: formMaxWidth }"
    @submit.prevent="submitSubscriber"
  >
    <h4
      class="subscribe-form__title"
      :class="{
        'subscribe-form__title--big': bigTitle,
        'subscribe-form__title--medium': mediumTitle,
        'subscribe-form__title--black-theme': blackTheme,
      }"
    >
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
          v-if="!isActive && showButton"
          class="subscribe-form__button"
          type="button"
          @click="showEmailInput"
        >
          Subscribe
        </button>
      </transition>
      <transition-group
        name="email"
        appear
      >
        <div
          v-if="isActive"
          key="email-form"
          class="subscribe-form__controllers-input-wrap"
        >
          <input
            v-model="$v.email.$model"
            type="email"
            class="subscribe-form__email"
            :class="{
              'subscribe-form__email--invalid': $v.email.$error || emailExists,
              'subscribe-form__email--black-theme': blackTheme,
            }"
            placeholder="your@mail.com*"
            required
            @input="handleInput"
          >
          <button
            class="subscribe-form__submit-btn"
            :class="{
              'subscribe-form__submit-btn--disabled': isSubmitted,
            }"
            :style="{ width: `${submitButtonSizeInPercentage}%` }"
            :disabled="isSubmitted"
            type="submit"
          >
            <svg
              v-if="!isSubmitted"
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
            <svg
              v-if="isSubmitted"
              width="15"
              height="10"
              viewBox="0 0 15 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.981445 3.74805L6.48145 9.24805L14.4814 1.24805"
                stroke="white"
              />
            </svg>
          </button>
        </div>
      </transition-group>
    </div>
    <transition-group
      name="messages"
    >
      <span
        v-if="$v.email.$error && !isSubmitted"
        key="email-error"
        class="subscribe-form__email-error"
      >
        Your email is not valid, please try again.
      </span>
      <span
        v-if="emailExists && !$v.email.$error"
        key="email-error"
        class="subscribe-form__email-error"
      >
        Your email already exists
      </span>
      <span
        v-if="isSubmitted && !$v.email.$error"
        key="email-success"
        class="subscribe-form__email-success"
      >
        You are successfully subscribed! Thank you!<br v-if="lineBreakForSuccess"> The newsletter will be sent on the first Tuesday of the month.
      </span>
    </transition-group>
    <svg
      v-if="showBackgroundImage"
      class="subscribe-form__bg-open-email"
      :class="{ 'subscribe-form__bg-open-email--medium': mediumTitle }"
      width="89"
      height="89"
      viewBox="0 0 89 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M66.2963 26.0404L37.6779 16.835C37.3859 16.7411 37.0687 16.767 36.7958 16.907C36.523 17.0471 36.317 17.2897 36.2231 17.5817C36.1292 17.8736 36.1551 18.1909 36.2951 18.4637C36.4352 18.7365 36.6778 18.9425 36.9698 19.0364L65.5882 28.2418C65.8801 28.3357 66.1974 28.3098 66.4702 28.1698C66.743 28.0298 66.949 27.7871 67.0429 27.4952C67.1368 27.2032 67.1109 26.886 66.9709 26.6131C66.8309 26.3403 66.5882 26.1343 66.2963 26.0404ZM59.9233 45.8532L31.3049 36.6478C31.013 36.5539 30.6957 36.5798 30.4229 36.7198C30.1501 36.8598 29.944 37.1025 29.8501 37.3944C29.7562 37.6864 29.7821 38.0036 29.9222 38.2764C30.0622 38.5493 30.3049 38.7553 30.5968 38.8492L59.2152 48.0546C59.5071 48.1485 59.8244 48.1226 60.0972 47.9825C60.3701 47.8425 60.5761 47.5998 60.67 47.3079C60.7639 47.016 60.738 46.6987 60.5979 46.4259C60.4579 46.1531 60.2153 45.9471 59.9233 45.8532ZM64.172 32.6447L35.5535 23.4393C35.2616 23.3454 34.9443 23.3713 34.6715 23.5113C34.3987 23.6513 34.1927 23.894 34.0988 24.1859C34.0049 24.4778 34.0308 24.7951 34.1708 25.0679C34.3108 25.3408 34.5535 25.5468 34.8454 25.6407L63.4639 34.8461C63.7558 34.94 64.0731 34.9141 64.3459 34.774C64.6187 34.634 64.8247 34.3913 64.9186 34.0994C65.0125 33.8075 64.9866 33.4902 64.8466 33.2174C64.7066 32.9446 64.4639 32.7386 64.172 32.6447ZM62.0476 39.2489L33.4292 30.0435C33.1373 29.9496 32.82 29.9755 32.5472 30.1156C32.2744 30.2556 32.0684 30.4982 31.9745 30.7902C31.8806 31.0821 31.9065 31.3994 32.0465 31.6722C32.1865 31.945 32.4292 32.151 32.7211 32.2449L61.3395 41.4503C61.6315 41.5442 61.9487 41.5183 62.2216 41.3783C62.4944 41.2383 62.7004 40.9956 62.7943 40.7037C62.8882 40.4117 62.8623 40.0945 62.7223 39.8216C62.5822 39.5488 62.3396 39.3428 62.0476 39.2489Z"
        :fill="blackTheme ? '#1F1F1F' : '#F4F4F4'"
      />
      <path
        d="M77.2115 42.7054L72.5175 36.908L77.2264 22.2685C77.5052 21.3927 77.4261 20.4421 77.0065 19.6244C76.5868 18.8067 75.8605 18.1883 74.9864 17.9042L35.3609 5.15832C34.4851 4.87949 33.5345 4.95855 32.7168 5.37825C31.8991 5.79794 31.2807 6.52415 30.9966 7.39829L26.2877 22.0377L19.0103 24.0451C17.4978 24.5794 16.1296 25.4569 15.0131 26.6087C13.8966 27.7605 13.0621 29.1554 12.5752 30.6839L4.11336 56.9908C3.26676 59.6328 3.50275 62.5027 4.76955 64.9709C6.03635 67.4391 8.23049 69.304 10.8706 70.1564L56.9903 84.9912C59.6323 85.8378 62.5022 85.6019 64.9704 84.3351C67.4386 83.0683 69.3035 80.8741 70.1559 78.234L78.6178 51.9271C79.1143 50.3861 79.2457 48.7509 79.0016 47.1504C78.7576 45.55 78.1447 44.0282 77.2115 42.7054V42.7054ZM69.1717 47.3097L75.5882 44.4667C76.0064 45.1219 76.321 45.8376 76.5211 46.5886L68.2263 50.2486L69.1717 47.3097ZM19.375 26.3851L22.9419 32.4394L21.993 35.3893L17.391 27.5689C17.9899 27.0779 18.6586 26.679 19.375 26.3851V26.3851ZM6.47444 63.1309C6.18354 62.3973 6.00645 61.6236 5.94929 60.8365L28.3901 50.8075L29.5702 52.8025L6.47444 63.1309ZM48.4924 54.1278C47.2367 52.0099 45.2496 50.4246 42.9058 49.6707C40.5619 48.9167 38.0232 49.0463 35.7682 50.035L31.6698 51.826L23.5642 38.0567L33.198 8.10639C33.2919 7.81447 33.4979 7.5718 33.7708 7.43178C34.0436 7.29175 34.3609 7.26584 34.6528 7.35974L74.2783 20.1057C74.5702 20.1996 74.8129 20.4056 74.9529 20.6784C75.0929 20.9512 75.1189 21.2685 75.025 21.5604L65.3912 51.5107L50.8473 57.9461L48.4924 54.1278ZM65.0244 81.5754L51.9984 59.956L54.1349 59.0157L66.718 79.8974C66.2541 80.55 65.6812 81.1176 65.0244 81.5754V81.5754Z"
        :fill="blackTheme ? '#1F1F1F' : '#F4F4F4'"
      />
    </svg>
  </form>
</template>
<script>
import { required, email } from 'vuelidate/lib/validators'
import createLeadMixin from '@/mixins/createLeadMixin'

export default {
  name: 'SubscribeForm',

  mixins: [createLeadMixin(Number(process.env.sendPulseAddressBooksId), 'Create new newsletter subscriber')],

  props: {
    formLocation: {
      type: String,
      default: 'Unknown',
    },

    formMaxWidth: {
      type: String,
      default: '199px',
    },

    bigTitle: {
      type: Boolean,
      default: false,
    },

    mediumTitle: {
      type: Boolean,
      default: false,
    },

    showButton: {
      type: Boolean,
      default: true,
    },

    showBackgroundImage: {
      type: Boolean,
      default: true,
    },

    blackTheme: {
      type: Boolean,
      default: false,
    },

    submitButtonSizeInPercentage: {
      type: Number,
      default: 30,
    },

    lineBreakForSuccess: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isActive: false,
      email: '',
      isSubmitted: false,
      type: 'subscribe-form',
      emailExists: false,
      timeoutId: null,
    }
  },

  mounted() {
    if (!this.showButton) this.isActive = true
  },

  validations: {
    email: {
      email,
      required,
    },
  },

  methods: {
    handleInput() {
      clearTimeout(this.timeoutId)
      this.timeoutId = setTimeout(() => {
        this.emailExists = false
        this.isSubmitted = false
      }, 600)
    },

    showEmailInput() {
      this.isActive = !this.isActive
    },

    async submitSubscriber() {
      this.$v.$touch()
      if (this.$v.$invalid) return
      this.emailExists = this.checkEmailInLocalStorage()
      if (this.emailExists) return
      const variables = {
        addressBooksId: Number(process.env.sendPulseAddressBooksId),
        newsLetter: 'Yes',
        formLocation: this.formLocation,
        type: this.type,
        email: this.email,
        fromId: this.type,
        templateId: Number(process.env.sendPulseAddressBooksId),
      }
      await this.submitLead(variables)
      this.isSubmitted = true
      this.$v.$reset()
    },

    checkEmailInLocalStorage() {
      const subscriber = JSON.parse(localStorage.getItem('newsLetter_subscriber')) || []
      if (subscriber.length) {
        if (subscriber.includes(this.email)) return true
        subscriber.push(this.email)
      } else {
        subscriber.push(this.email)
      }
      localStorage.setItem('newsLetter_subscriber', JSON.stringify(subscriber))
      return false
    },
  },
}
</script>
<style lang="scss" scoped>
.subscribe-form {
  position: relative;

  &__title {
    @include font('Inter', 14px, 700);
    line-height: 130%;
    letter-spacing: -0.1px;
    color: $text-color--black-oil;
    max-width: 150px;
    margin-bottom: 14px;
    position: relative;
    z-index: 2;

    &--medium {
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.1px;
      max-width: 200px;
    }

    &--big {
      font-size: 20px;
      line-height: 26px;
      text-align: center;
      letter-spacing: -0.4px;
      max-width: 100%;
    }

    &--black-theme {
      color: $text-color--white-primary;
    }
  }

  &__controllers {
    width: 100%;
    position: relative;
    min-height: 45px;
    margin-bottom: 5px;
    z-index: 2;
  }

  &__controllers-input-wrap {
    position: absolute;
    top: 0;
    border-radius: 6px;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
    display: flex;
    overflow: hidden;
    z-index: 2;
    width: 100%;
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
    background: $bgcolor--white-primary;
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

    &--invalid {
      border-color: $border-color--red;
    }

    &--black-theme {
      color: $text-color--white-primary;
      background: $bgcolor--black;
    }
  }

  &__submit-btn {
    width: 30%;
    background-color: $bgcolor--red;
    border: none;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    cursor: pointer;

    &--disabled {
      cursor: not-allowed;
    }
  }

  &__email-error,
  &__email-success {
    width: 100%;
    @include font('Inter', 10px, 400);
    line-height: 18px;
    letter-spacing: -0.02em;
    color: $text-color--red;
  }

  &__email-success {
    color: $text-color--grey-pale;
  }

  &__bg-open-email {
    position: absolute;
    top: -20px;
    right: -13px;
    z-index: 0;
    width: 100px;
    height: 100px;

    &--medium {
      top: -10px;
    }
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

.messages-enter-active,
.messages-leave-active {
  transition: all 0.3s ease-in-out;
}

.messages-enter,
.messages-leave-to {
  opacity: 0;
}
</style>
