<template>
  <BaseForm
    id="contact-me-form"
    ref="baseForm"
    button-label="Сontact Me"
    button-class-name="ui-button--transparent-bgc ui-button_submit-button-footer"
    button-id-name="contact_me_button"
    :use-company="true"
    :use-interest-radio-input="true"
    :interest-radio-input-required="true"
    :default-interest-radio-input="true"
    @submit="handleSubmit"
  />
</template>

<script>
import BaseForm from '@/components/core/forms/BaseForm'
import createLeadMixin from '@/mixins/createLeadMixin'

export default {
  name: 'ContactMeForm',
  components: {
    BaseForm,
  },

  mixins: [createLeadMixin(686633, 'Contact Me')],

  props: {
    formLocation: {
      type: String,
      default: 'Unknown',
    },

    id: {
      type: String,
      default: 'UnknownModal',
    },
  },

  methods: {
    async handleSubmit(formData) {
      const recaptcha = window.grecaptcha

      recaptcha.ready(() => {
        recaptcha.execute(process.env.reCaptchaSiteKey, { action: 'submit' }).then(token => {
          const variables = {
            token,
            ...formData,
            formLocation: this.formLocation,
            fromId: this.id,
          }

          // from mixin
          this.submitLead(variables)
        })
      })
    },

    reset() {
      this.$refs.baseForm.reset()
    },
  },
}
</script>
