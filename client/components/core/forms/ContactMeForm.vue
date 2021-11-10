<template>
  <BaseForm
    id="contact-me-form"
    ref="baseForm"
    button-label="Сontact Me"
    button-class-name="ui-button--transparent-bgc ui-button_submit-button-footer"
    :use-company="true"
    :use-interest-radio-input="true"
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
  },

  async mounted() {
    await this.$recaptcha.init()
  },

  beforeDestroy() {
    this.$recaptcha.destroy()
  },

  methods: {
    async handleSubmit(formData) {
      const token = await this.$recaptcha.execute('contactMe')
      const variables = {
        ...formData,
        formLocation: this.formLocation,
        token,
      }

      // from mixin
      this.submitLead(variables)
    },

    reset() {
      this.$refs.baseForm.reset()
    },
  },
}
</script>
