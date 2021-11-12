<template>
  <div class="read-form">
    <div class="read-form__fields">
      <BaseInput
        v-model="name"
        name="name"
        :show-label="false"
        :required="true"
        placeholder="Your name"
        :validation="$v.name"
      />
      <BaseInput
        v-model="email"
        name="email"
        :show-label="false"
        placeholder="Email"
        :required="true"
        :validation="$v.email"
      />
      <button
        class="read-form__button"
        :class="{ 'read-form__button--active': isValid, 'read-form__button--always-fullsized': fullsizeButton }"
        @click="submit"
      >
        Download the ebook
      </button>
    </div>
    <p class="read-form__caption">
      By providing your email address, you agree to our Privacy Policy. We will not send you any spam – just some more useful resources in the future.
    </p>
  </div>
</template>

<script>
import { email, maxLength, required } from 'vuelidate/lib/validators'
import BaseInput from '@/components/core/forms/BaseInput'
import { sendEbookInfoToSlack } from '@/api/ebookSlackWebhook'
import { getLinkWithLifeTime } from '@/api/s3'

export default {
  name: 'ReadForm',
  components: { BaseInput },

  props: {
    fullsizeButton: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      name: '',
      email: '',
    }
  },

  validations: {
    email: {
      required,
      email,
    },

    name: {
      required,
      maxLength: maxLength(100),
    },

    validationGroup: ['email', 'name'],
  },

  computed: {
    isValid() {
      return !this.$v.validationGroup.$invalid
    },
  },

  methods: {
    async submit() {
      if (!this.isValid) return
      const params = {
        region: 'eu-west-1',
        bucket: 'maddevsio',
        file: 'pdf/custom-software-development-pricing-strategies-ebook.pdf',
        expiresIn: 86400, // sec -> 24h
      }
      const { data: pdfUrl } = await getLinkWithLifeTime(this.$axios, params)
      await sendEbookInfoToSlack(this.$axios, { email: this.email, name: this.name })
      window.open(pdfUrl, '_blank').focus()

      // const requestSender = {
      //   body: {
      //     email: {
      //       templateId: 348595, // Required
      //       variables: {
      //         subject: 'Your Pricing Strategies Ebook by Mad Devs',
      //         emailTo: this.email,
      //         pdfUrl,
      //       },
      //
      //       attachment: null,
      //     },
      //   },
      //
      //   base64: null,
      // }
      // const requestMarketing = {
      //   body: {
      //     email: {
      //       templateId: 624246, // Required
      //       variables: {
      //         subject: 'Request a PDF file from the Ebook page',
      //         senderName: this.name,
      //         emailTo: process.env.emailMarketing,
      //         fromSender: this.email,
      //         page: window.location.href,
      //       },
      //
      //       attachment: null,
      //     },
      //   },
      //
      //   base64: '',
      // }
      // sendEmail(this.$axios, requestSender) // Send email to sender
      // sendEmail(this.$axios, requestMarketing) // Send email to Mad Devs marketing
      this.$emit('form-sended', { email: this.email, name: this.name })
      this.resetForm()
    },

    resetForm() {
      this.$v.$reset() // Reset validation form
      this.name = ''
      this.email = ''
    },
  },
}
</script>

<style lang="scss" scoped>
.read-form {
  &__fields {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    /deep/ .field-item {
      width: 100%;
      margin-bottom: 16px;

      input {
        width: 100%;
        padding: 12px 15px;
        @include font('Inter', 16px, 400);
        color: #707072;
        border-radius: 4px;
        border: 1px solid #707072;
        background-color: transparent;
        box-sizing: border-box;
      }

      .v-placeholder-asterisk {
        left: 17px !important;
        top: 50% !important;
        transform: translateY(-50%);
        color: #707072;
      }
    }
  }

  &__button {
    width: auto;
    padding: 12px 15px;
    @include font('Inter', 16px, 600);
    line-height: 20px;
    letter-spacing: -0.4px;
    color: #A0A0A1;
    border-radius: 4px;
    border: 1px solid #707072;
    background-color: transparent;
    margin-bottom: 16px;
    box-sizing: border-box;
    opacity: 0.7;

    &--always-fullsized {
      width: 100%;
    }

    &--active {
      background-color: #ec1c24;
      border-color: #ec1c24;
      color: #fff;
      opacity: 1;
      cursor: pointer;

      &:hover {
        background-color: #d41e24;
      }

      &:active {
        background-color: #c21c22;
      }
    }
  }

  &__caption {
    @include font('Inter', 14px, 400);
    letter-spacing: -0.4px;
    color: #A0A0A1;
    line-height: 18px;
  }
}
</style>
