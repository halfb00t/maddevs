<template>
  <BaseForm
    id="individuals-form"
    ref="baseForm"
    button-class-name="ui-button--transparent-bgc ui-button_submit-button-footer"
    button-label="Get individual proactive rockets"
    :use-description="true"
    :use-interest-radio-input="true"
    :interest-radio-input-required="true"
    :default-interest-radio-input="true"
    @submit="handleSubmit"
  >
    <BaseInput
      v-model="expertise"
      name="questionsOnItConsulting"
      label="Expertise you are interested in"
      placeholder="React development, Heroku Postgres, etc"
    />
  </BaseForm>
</template>

<script>
import BaseForm from '@/components/core/forms/BaseForm'
import BaseInput from '@/components/core/forms/BaseInput'
import createLeadMixin from '@/mixins/createLeadMixin'

import exceptKeys from '@/helpers/exceptKeys'

export default {
  name: 'IndividualsForm',
  components: {
    BaseForm,
    BaseInput,
  },

  mixins: [createLeadMixin(304625, 'Individuals')],

  props: {
    formLocation: {
      type: String,
      default: 'Unknown',
    },
  },

  data() {
    return {
      expertise: '',
    }
  },

  methods: {
    handleSubmit(formData) {
      const variables = {
        ...exceptKeys(formData, ['description']),
        interestedExpertise: this.expertise || '',
        projectDescription: formData.description,
        formLocation: this.formLocation,
      }

      // from mixin
      this.submitLead(variables)
    },

    reset() {
      this.$refs.baseForm.reset()
      this.expertise = ''
    },
  },
}
</script>
