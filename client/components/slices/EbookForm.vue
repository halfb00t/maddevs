<template>
  <div
    id="ebook-form"
    class="ebook-form"
  >
    <div
      v-if="!formSended"
      class="read-form__fields"
    >
      <BaseInput
        v-model="name"
        name="name"
        :show-label="true"
        :required="true"
        placeholder="John Smith"
        :validation="$v.name"
        label="Full name"
      />
      <BaseInput
        v-model="email"
        name="email"
        :show-label="true"
        placeholder="Email"
        :required="true"
        :validation="$v.email"
        label="Email"
      />
      <UIFormCheckbox
        id="form"
        ref="checkbox"
        @change="handleCheckboxChange"
      />
      <button
        :id="isValid ? 'sent_ebook_button': ''"
        class="ebook-form__button"
        :class="{ 'ebook-form__button--active': isValid }"
        @click="submit"
      >
        Send me the ebook
      </button>
      <p class="ebook-form__caption">
        By providing your email address, you agree to our Privacy Policy. We will not send you any spam – only link for downloading the ebook and some more useful resources in the future.
      </p>
    </div>
    <SuccessMessage
      v-else
      id="ebook-form"
      title="Thank you!"
      :message="successMessage"
    />
  </div>
</template>
<script>
import { email, maxLength, required } from 'vuelidate/lib/validators'
import BaseInput from '@/components/core/forms/BaseInput'
import SuccessMessage from '@/components/core/modals/SuccessMessage'
import { getLinkWithLifeTime } from '@/api/s3'
import { sendEmail } from '@/api/email'
import createLeadMixin from '@/mixins/createLeadMixin'
import { ebookSubmitFormEvent } from '@/analytics/events'
import { addUserType } from '@/analytics/Event'
import UIFormCheckbox from '@/components/shared/UIFormCheckbox'

export default {
  name: 'EbookForm',
  components: {
    BaseInput,
    SuccessMessage,
    UIFormCheckbox,
  },

  mixins: [createLeadMixin(624246, 'Request a PDF file from the Ebook page')],

  props: {
    ebookPath: {
      type: String,
      default: '',
    },

    bookName: {
      type: String,
      default: 'Pricing Strategies',
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
      successMessage: null,
      formSended: false,
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
      this.successMessage = `
        The letter with the PDF file was successfully sent to mail ${this.email}.
        <br><br> Please check your email.
      `
      this.formSended = true
    },

    reset() {
      this.$v.$reset() // Reset validation form
      this.$refs.checkbox.reset()
      this.name = ''
      this.email = ''
    },
  },
}
</script>
<style lang="scss" scoped>
.ebook-form {
  &__button {
    width: 100%;
    padding: 12px 15px;
    @include font('Inter', 16px, 400);
    line-height: 166%;
    letter-spacing: -0.1px;
    color: $text-color--red;
    border-radius: 6px;
    border: 1px solid $border-color--red;
    background-color: transparent;
    margin-bottom: 16px;
    box-sizing: border-box;
    opacity: 0.7;

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
    @include font('Inter', 11px, 400);
    line-height: 18px;
    letter-spacing: -0.4px;
    color: $text-color--grey-pale;
  }

  ::v-deep .success-message {
    background: $bgcolor--white-primary;
    margin-bottom: 85px;
    &__title {
      color: $text-color--black;
    }
  }
}
</style>
