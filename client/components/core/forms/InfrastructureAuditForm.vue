<template>
  <BaseForm
    id="infrastructure-audit-form"
    ref="baseForm"
    button-class-name="ui-button--transparent-bgc ui-button_submit-button-footer"
    button-label="Get an infrastructure audit"
    :use-company="true"
    :use-interest-radio-input="true"
    :interest-radio-input-required="true"
    :default-interest-radio-input="true"
    @submit="handleSubmit"
  >
    <RadioList
      id="infrastructure-audit"
      label="Where is your project hosted?"
      :options="options"
      :required="false"
      @select="handleSelectProjectHost"
    />
  </BaseForm>
</template>

<script>
import BaseForm from '@/components/core/forms/BaseForm'
import RadioList from '@/components/shared/UIRadioList'
import createLeadMixin from '@/mixins/createLeadMixin'

export default {
  name: 'InfrastructureAuditForm',
  components: {
    BaseForm,
    RadioList,
  },

  mixins: [createLeadMixin(304628, 'Infrastructure audit')],

  props: {
    formLocation: {
      type: String,
      default: 'Unknown',
    },
  },

  data() {
    return {
      selectedProjectHost: null,
      options: [
        {
          value: 'on-premises',
          label: 'On-premises',
        },
        {
          value: 'amazon',
          label: 'Amazon Web Services',
        },
        {
          value: 'google-cloud',
          label: 'Google Cloud Platform',
        },
        {
          value: 'microsoft-azure',
          label: 'Microsoft Azure',
        },
        {
          value: 'heroku',
          label: 'Heroku',
        },
        {
          value: 'digital-ocean',
          label: 'Digital Ocean',
        },
        {
          value: 'other',
          label: 'Other',
        },
      ],
    }
  },

  methods: {

    handleSelectProjectHost(projectHost) {
      this.selectedProjectHost = projectHost
    },

    handleSubmit(formData) {
      const variables = {
        ...formData,
        selectedProjectHost: this.selectedProjectHost ? this.selectedProjectHost.label || '' : '',
        formLocation: this.formLocation,
      }

      // from mixin
      this.submitLead(variables)
    },

    reset() {
      this.$refs.baseForm.reset()
      this.selectedProjectHost = null
    },
  },
}
</script>
