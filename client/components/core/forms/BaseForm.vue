<template>
  <div
    class="form"
    :class="className"
  >
    <div class="fields-list">
      <BaseInput
        v-model="fullName"
        name="fullName"
        :show-label="useLabels"
        label="Full Name"
        :placeholder="fullNamePlaceholder"
        :required="fullnameRequired"
        :validation="$v.fullName"
      />
      <RadioButtons
        v-if="useInterestRadioInput"
        :id="id"
        v-model="interestChoice"
        name="projectRadioButton"
        :label="interestRadioLabel"
        :required="interestRadioInputRequired"
        :default-choice="defaultInterestRadioInput"
        :radio-input-labels="interestRadioChoices"
      />
      <BaseInput
        v-if="useCompanyField"
        v-model="company"
        name="company"
        :show-label="useLabels"
        label="Company"
        :placeholder="companyPlaceholder"
        :required="true"
        :validation="$v.company"
      />
      <BaseInput
        v-model="email"
        name="email"
        :show-label="useLabels"
        label="Work Email"
        :placeholder="emailPlaceholder"
        :required="emailRequired"
        :validation="$v.email"
      />
      <BaseInput
        v-if="usePhone"
        name="phoneNumber"
        :value="phoneNumber"
        :show-label="useLabels"
        label="Phone Number"
        :placeholder="phonePlaceholder"
        :required="false"
        :validation="$v.phoneNumber"
        @input="phoneChangeHandler"
      />
      <BaseInput
        v-if="useDescription"
        v-model="description"
        name="description"
        :show-label="useLabels"
        label="Project description"
        :placeholder="descriptionPlaceholder"
        :required="false"
        :validation="$v.description"
        element-type="textarea"
      />
      <slot />
    </div>
    <UIFormCheckboxes
      :id="id"
      ref="checkboxes"
      @change="handleCheckboxesChange"
    />
    <UIFormCheckbox
      :id="id"
      ref="checkbox"
      @change="handleCheckboxChange"
    />

    <UIButton
      :id="isValid ? buttonIdName : ''"
      :disabled="!isValid || isSubmitted"
      :loading="isSubmitted"
      :class="buttonClassName"
      @click="handleSubmit"
    >
      {{ buttonLabel }}
    </UIButton>
  </div>
</template>

<script>
import { required, email, maxLength } from 'vuelidate/lib/validators'
import { phone } from '@/helpers/validators'
import BaseInput from '@/components/core/forms/BaseInput'
import RadioButtons from '@/components/core/forms/RadioButtons'

import UIFormCheckboxes from '@/components/shared/UIFormCheckboxes'
import UIButton from '@/components/shared/UIButton'
import phoneHandlerMixin from '@/mixins/phoneHandlerMixin'
import UIFormCheckbox from '@/components/shared/UIFormCheckbox'
import { submitNewsletterSubscription } from '@/analytics/events'

export default {
  name: 'BaseForm',
  components: {
    BaseInput,
    UIFormCheckboxes,
    UIButton,
    RadioButtons,
    UIFormCheckbox,
  },

  mixins: [phoneHandlerMixin],

  validations() {
    const defaultFields = {
      fullName: {
        maxLength: maxLength(50),
      },

      email: {
        email,
      },

      validationGroup: ['fullName', 'email'],
    }

    if (this.fullnameRequired) defaultFields.fullName.required = required
    if (this.emailRequired) defaultFields.email.required = required

    if (this.usePhone) {
      defaultFields.phoneNumber = {
        phone,
        maxLength: maxLength(50),
      }
      defaultFields.validationGroup.push('phoneNumber')
    }

    if (this.useDescription) {
      defaultFields.description = {
        maxLength: maxLength(256),
      }
      defaultFields.validationGroup.push('description')
    }

    if (this.useCompanyField) {
      defaultFields.company = {
        required,
        maxLength: maxLength(256),
      }
      defaultFields.validationGroup.push('company')
    }

    return defaultFields
  },

  props: {
    buttonLabel: {
      type: String,
      default: 'Submit',
    },

    buttonClassName: {
      type: String,
      default: 'modal-button',
    },

    buttonIdName: {
      type: String,
      default: '',
    },

    additionalValid: {
      type: Boolean,
      default: true,
    },

    className: {
      type: String,
      default: '',
    },

    id: {
      type: String,
      required: true,
    },

    usePhone: {
      type: Boolean,
      default: true,
    },

    useDescription: {
      type: Boolean,
      default: false,
    },

    useCompany: {
      type: Boolean,
      default: false,
    },

    useInterestRadioInput: {
      type: Boolean,
      default: false,
    },

    useLabels: {
      type: Boolean,
      default: true,
    },

    fullnameRequired: {
      type: Boolean,
      default: true,
    },

    emailRequired: {
      type: Boolean,
      default: true,
    },

    fullNamePlaceholder: {
      type: String,
      default: 'John Smith',
    },

    companyPlaceholder: {
      type: String,
      default: 'My Awesome Company, Inc.',
    },

    emailPlaceholder: {
      type: String,
      default: 'your@mail.com',
    },

    phonePlaceholder: {
      type: String,
      default: 'Phone number',
    },

    descriptionPlaceholder: {
      type: String,
      default: 'Describe your project...',
    },

    interestRadioInputRequired: {
      type: Boolean,
      default: false,
    },

    defaultInterestRadioInput: {
      type: Boolean,
      default: false,
    },

    isPartnership: {
      type: Boolean,
      default: false,
    },

    interestRadioLabel: {
      type: String,
      default: 'I\'m interested in ...',
    },

    interestRadioChoices: {
      type: Array,
      default: () => ['Software development', 'Partnership'],
    },
  },

  data() {
    return {
      // phoneNumber from mixin
      fullName: '',
      interestChoice: this.defaultChoice(),
      email: '',
      description: '',
      company: '',
      agreeWithPrivacyPolicy: false,
      agreeToGetMadDevsDiscountOffers: false,
      isSubmitted: false,
      isAgree: true,
    }
  },

  computed: {
    useCompanyField() {
      return (
        (this.useCompany && this.interestChoice === 'Software development')
        || (this.useCompany && !this.useInterestRadioInput)
      )
    },

    isValid() {
      if (this.interestRadioInputRequired) {
        return (
          !this.$v.validationGroup.$invalid
          && this.agreeWithPrivacyPolicy
          && this.additionalValid
          && !!this.interestChoice
        )
      }
      return !this.$v.validationGroup.$invalid && this.agreeWithPrivacyPolicy && this.additionalValid
    },
  },

  methods: {
    handleCheckboxChange({ isAgree }) {
      this.isAgree = isAgree
    },

    defaultChoice() {
      if (this.isPartnership) return 'Partnership'
      return this.defaultInterestRadioInput ? this.interestRadioChoices[0] : ''
    },

    handleCheckboxesChange({ privacy, discountOffers }) {
      this.agreeWithPrivacyPolicy = privacy
      this.agreeToGetMadDevsDiscountOffers = discountOffers
    },

    handleSubmit() {
      if (!this.isValid) return
      this.isSubmitted = true

      const formData = {
        fullName: this.fullName || '',
        interest: this.interestChoice || '',
        email: this.email || '',
        agreeWithPrivacyPolicy: this.agreeWithPrivacyPolicy,
        agreeToGetMadDevsDiscountOffers: this.agreeToGetMadDevsDiscountOffers,
        newsLetter: this.isAgree ? 'Yes' : 'No',
      }
      if (
        (this.useCompany
        && this.useInterestRadioInput
        && this.interestChoice !== 'Software development')
        || !this.useCompany
      ) {
        formData.company = 'Field was hidden'
      }

      if (this.usePhone) formData.phoneNumber = this.phoneNumber
      if (this.useDescription) formData.description = this.description
      if (this.useCompanyField) formData.company = this.company
      if (this.isAgree) submitNewsletterSubscription.send()

      this.$emit('submit', formData)
    },

    reset() {
      this.$refs.checkboxes.reset()
      this.$v.$reset()
      this.fullName = ''
      this.interestChoice = this.defaultChoice()
      this.email = ''
      this.phoneNumber = ''
      this.description = ''
      this.company = ''
      this.agreeWithPrivacyPolicy = false
      this.agreeToGetMadDevsDiscountOffers = false
      this.isSubmitted = false
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  /deep/ .v-placeholder-asterisk {
    @include font('Inter', 16px, 400);
    padding-left: 4px;
    padding-bottom: 2px;
    letter-spacing: -0.013em;
    color: $text-color--grey-pale;
    left: 17px !important;
    top: 50% !important;
    transform: translateY(-50%);
  }
}
</style>
