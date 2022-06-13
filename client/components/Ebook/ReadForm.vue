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
      <UIFormCheckbox
        :id="id"
        ref="checkbox"
        @change="handleCheckboxChange"
      />
      <button
        :id="isValid ? 'sent_ebook_button': ''"
        class="read-form__button"
        :class="{ 'read-form__button--active': isValid, 'read-form__button--always-fullsized': fullsizeButton }"
        @click="submit"
      >
        Send me the ebook
      </button>
    </div>
    <p class="read-form__caption">
      By providing your email address, you agree to our Privacy Policy. We will not send you any spam – only link for downloading the ebook and some more useful resources in the future.
    </p>
  </div>
</template>

<script>
import { email, maxLength, required } from 'vuelidate/lib/validators'
import BaseInput from '@/components/core/forms/BaseInput'
import { sendEmail } from '@/api/email'
import createLeadMixin from '@/mixins/createLeadMixin'
import { getLinkWithLifeTime } from '@/api/s3'
import { ebookSubmitFormEvent } from '@/analytics/events'
import { addUserType } from '@/analytics/Event'
import UIFormCheckbox from '@/components/shared/UIFormCheckbox'

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

    bookName: {
      type: String,
      default: '',
    },

    id: {
      type: String,
      required: true,
    },

    ebookImage: {
      type: String,
      default: '',
    },

    sendPulseTemplateId: {
      type: Number,
      default: 763889, // default value is a template ID of  "Ebooks - Pricing Strategies"
    },
  },

  data() {
    return {
      name: '',
      email: '',
      type: 'ebook-form',
      isAgree: true,
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
            templateId: Number(this.sendPulseTemplateId) || 763889, // default value is a template ID of  "Ebooks - Pricing Strategies"
            variables: {
              subject: `Your ${this.bookName} Ebook by Mad Devs`,
              emailTo: this.email,
              bookName: this.bookName,
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
        formLocation: this.bookName,
      }
      // from mixin
      this.submitLead(variables)

      addUserType('download_ebook')
      ebookSubmitFormEvent.send()

      this.$emit('form-sended', { email: this.email, name: this.name })
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
        color: $text-color--grey-pale;
        border-radius: 4px;
        border: 1px solid $text-color--grey-pale;
        background-color: transparent;
        box-sizing: border-box;
      }

      .v-placeholder-asterisk {
        left: 17px !important;
        top: 50% !important;
        transform: translateY(-50%);
        color: $text-color--grey-pale;
      }
    }
  }

  &__button {
    width: auto;
    padding: 12px 15px;
    @include font('Inter', 16px, 600);
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
    @include font('Inter', 14px, 400);
    letter-spacing: -0.4px;
    color: $text-color--grey-opacity-40-percent;
    line-height: 18px;
  }
}
</style>
