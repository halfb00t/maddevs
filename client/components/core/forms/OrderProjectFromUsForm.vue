<template>
  <BaseForm
    id="order-project-form"
    ref="baseForm"
    button-class-name="ui-button--transparent-bgc ui-button_submit-button-footer"
    button-id-name="submit_project_button"
    button-label="Submit your project"
    :use-interest-radio-input="true"
    :interest-radio-input-required="true"
    :default-interest-radio-input="true"
    :use-company="true"
    :use-description="true"
    @submit="handleSubmit"
  />
</template>

<script>
import { mapActions } from 'vuex'
import BaseForm from '@/components/core/forms/BaseForm'
import createLeadMixin from '@/mixins/createLeadMixin'

import exceptKeys from '@/helpers/exceptKeys'

export default {
  name: 'OrderProjectFromUsForm',
  components: {
    BaseForm,
  },

  mixins: [createLeadMixin(304632, 'Order Project From Us')],

  props: {
    formLocation: {
      type: String,
      default: 'Unknown',
    },
  },

  methods: {
    ...mapActions(['setFilledLeadForm']),

    async handleSubmit(formData) {
      const variables = {
        ...exceptKeys(formData, 'description'),
        projectDescription: formData.description,
        formLocation: this.formLocation,
      }

      // from mixin
      await this.submitLead(variables)
      this.$emit('triggerClose')
      this.setFilledLeadForm()
      await this.$router.push('/test-anton-prismic-slices/')
    },

    reset() {
      this.$refs.baseForm.reset()
    },
  },
}
</script>
