<template>
  <BaseForm
    id="get-expert-advice-form"
    ref="baseForm"
    button-class-name="ui-button--transparent-bgc ui-button_submit-button-footer"
    button-label="Get expert advice"
    :use-interest-radio-input="true"
    :interest-radio-input-required="true"
    :default-interest-radio-input="true"
    :additional-valid="!$v.validationGroup.$invalid"
    @submit="handleSubmit"
  >
    <BaseInput
      v-model="questionsOnItConsulting"
      name="questionsOnItConsulting"
      label="Your questions on IT consulting"
      placeholder="Tell us how we can help you…"
      :validation="$v.questionsOnItConsulting"
      element-type="textarea"
    />
  </BaseForm>
</template>

<script>
import { maxLength } from 'vuelidate/lib/validators'
import BaseForm from '@/components/core/forms/BaseForm'
import BaseInput from '@/components/core/forms/BaseInput'
import createLeadMixin from '@/mixins/createLeadMixin'

export default {
  name: 'GetExpertAdviceForm',
  components: {
    BaseForm,
    BaseInput,
  },

  mixins: [createLeadMixin(304641, 'Get Expert Advice')],

  props: {
    formLocation: {
      type: String,
      default: 'Unknown',
    },
  },

  validations: {
    questionsOnItConsulting: {
      maxLength: maxLength(256),
    },

    validationGroup: ['questionsOnItConsulting'],
  },

  data() {
    return {
      questionsOnItConsulting: '',
    }
  },

  methods: {
    handleSubmit(formData) {
      const variables = {
        ...formData,
        questionsOnItConsulting: this.questionsOnItConsulting || '',
        formLocation: this.formLocation,
      }

      // from mixin
      this.submitLead(variables)
    },

    reset() {
      this.$refs.baseForm.reset()
      this.$v.$reset()
      this.questionsOnItConsulting = ''
    },
  },
}
</script>
