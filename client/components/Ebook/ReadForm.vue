<template>
  <div class="read-form">
    <div class="read-form__fields">
      <h2
        v-if="ebookTitle"
        class="modal-content__title"
      >
        {{ ebookTitle }}
      </h2>
      <h2
        v-if="description"
        class="read-form__sub-title"
      >
        Get your copy of “ {{ description }}”
      </h2>
      <div class="read-form__inputs">
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
      </div>
      <UIFormCheckbox
        :id="id"
        ref="checkbox"
        @change="handleCheckboxChange"
      />
      <button
        :id="isValid ? 'sent_ebook_button' : ''"
        class="read-form__button"
        :class="{
          'read-form__button--active': isValid,
          'read-form__button--always-fullsized': fullsizeButton,
        }"
        @click="submit"
      >
        Send me the ebook
      </button>
    </div>
    <p class="read-form__caption">
      By providing your email address, you agree to our Privacy Policy. We will
      not send you any spam – only link for downloading the ebook and some more
      useful resources in the future.
    </p>
  </div>
</template>

<script>
import { email, maxLength, required } from 'vuelidate/lib/validators'
import BaseInput from '@/components/core/forms/BaseInput'
import { sendEmail } from '@/api/email'
import createLeadMixin from '@/mixins/createLeadMixin'
import { getLinkWithLifeTime } from '@/api/s3'
import { ebookSubmitFormPixelEvent } from '@/analytics/pixelEvents'
import UIFormCheckbox from '@/components/shared/UIFormCheckbox'
import { submitEbookEventToGA4 } from '@/helpers/submitEbook'
import { sendPulseEbookTemplates } from '@/data/sendPulseTemplates'
import { submitNewsletterSubscription } from '@/analytics/events'

export default {
  name: 'ReadForm',
  components: {
    BaseInput,
    UIFormCheckbox,
  },

  mixins: [createLeadMixin(624246, 'Request a PDF file from the Ebook page')],

  props: {
    fullsizeButton: {
      type: Boolean,
      default: false,
    },

    ebookPath: {
      type: String,
      default: '',
    },

    ebookName: {
      type: String,
      default: '',
    },

    ebookTitle: {
      type: String,
      default: '',
    },

    ebookSubTitle: {
      type: Array,
      default: () => [],
    },

    id: {
      type: String,
      required: true,
    },

    sendPulseTemplateId: {
      type: Number,
      default: sendPulseEbookTemplates.pricing_strategies, // default value is a template ID of  "Ebooks - Pricing Strategies"
    },
  },

  data() {
    return {
      name: '',
      email: '',
      type: 'ebook-form',
      isAgree: true,
      sendPulseEbookTemplates,
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

    description() {
      return this.$prismic.asText(this.ebookSubTitle)
    },
  },

  methods: {
    handleCheckboxChange({ isAgree }) {
      this.isAgree = isAgree
    },

    async submit() {
      if (!this.isValid) return
      const params = {
        region: 'eu-west-1',
        bucket: 'maddevsio',
        file: this.ebookPath,
        expiresIn: 86400, // sec -> 24h
      }
      const { data: pdfUrl } = await getLinkWithLifeTime(this.$axios, params)

      const requestSender = {
        body: {
          email: {
            templateId: Number(this.sendPulseTemplateId) || sendPulseEbookTemplates.pricing_strategies, // default value is a template ID of  "Ebooks - Pricing Strategies"
            variables: {
              subject: `Your ${this.ebookName} Ebook by Mad Devs`,
              emailTo: this.email,
              bookName: this.ebookName,
              pdfUrl,
            },

            attachment: null,
          },
        },

        base64: null,
      }

      sendEmail(this.$axios, requestSender) // Send email to sender

      const variables = {
        type: this.type,
        fullName: this.name,
        email: this.email,
        consent_to_mailing: this.isAgree ? 'Yes' : 'No',
        page: window.location.href,
        formLocation: this.ebookName,
      }
      // from mixin
      this.submitLead(variables)

      submitEbookEventToGA4(this.sendPulseTemplateId)
      ebookSubmitFormPixelEvent.send()
      if (this.isAgree) submitNewsletterSubscription.send()

      this.$emit('form-sended', {
        email: this.email,
        name: this.name,
      })
      this.$refs.checkbox.reset()
    },

    reset() {
      this.$v.$reset() // Reset validation form
      this.name = ''
      this.email = ''
    },
  },
}
</script>

<style lang="scss" scoped>
.read-form {
  &__title {
    @include font('Inter', 28px, 700);
    line-height: 32px;
    margin: 22px 15px 8px;
    letter-spacing: -1px;
    color: $text-color--chinese-black;
    text-align: center;
    align-self: center;
    @media screen and (max-width: 580px) {
      @include font('Inter', 21px, 700);
      line-height: 24px;
    }
  }

  &__sub-title {
    @include font('Inter', 16px, 400);
    line-height: 26px;
    letter-spacing: -1px;
    color: $text-color--chinese-black;
    margin-top: 10px;
    margin-bottom: 25px;
    width: 100%;

    @media screen and (max-width: 768px) {
      font-size: 14px;
      line-height: 21px;
      letter-spacing: -0.4px;
    }
  }

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
        padding: 11px 15px;
        @include font("Inter", 16px, 400);
        color: $text-color--grey-pale;
        border-radius: 4px;
        border: 1px solid $text-color--grey-pale;
        background-color: transparent;
        box-sizing: border-box;
        line-height: 26px;
      }

      .v-placeholder-asterisk {
        left: 17px !important;
        top: 50% !important;
        transform: translateY(-50%);
        color: $text-color--grey-pale;
      }
    }
  }

  &__inputs {
    width: 100%;
    display: flex;
    gap: 20px;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 0;
    }
  }

  &__button {
    width: 100%;
    padding: 9px 0;
    @include font("Inter", 16px, 600);
    line-height: 20px;
    letter-spacing: -0.4px;
    color: $text-color--grey-opacity-40-percent;
    border-radius: 4px;
    border: 1px solid $border-color--grey-selected;
    background-color: transparent;
    margin-bottom: 16px;
    box-sizing: border-box;
    opacity: 0.7;

    &--always-fullsized {
      width: 100%;
    }

    &--active {
      background-color: $bgcolor--red;
      border-color: $border-color--red;
      color: $text-color--white-primary;
      opacity: 1;
      cursor: pointer;

      &:hover {
        background-color: $bgcolor--maximum-red;
      }

      &:active {
        background-color: $bgcolor--fire-engine-red;
      }
    }
  }

  &__caption {
    @include font("Inter", 12px, 400);
    letter-spacing: -0.4px;
    color: $text-color--grey-opacity-40-percent;
    line-height: 18px;
    text-align: center;
  }
}
</style>
