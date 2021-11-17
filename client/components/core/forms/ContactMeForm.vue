<template>
  <BaseForm
    id="contact-me-form"
    ref="baseForm"
    button-label="Сontact Me"
    button-class-name="ui-button--transparent-bgc ui-button_submit-button-footer"
    :use-company="true"
    :use-interest-radio-input="true"
    :interest-radio-input-required="true"
    :recaptcha-error="recaptchaError"
    @submit="handleSubmit"
  >
    <template #reCaptcha>
      <div class="recaptcha">
        <recaptcha
          @error="onError"
          @success="onSuccess"
          @expired="onExpired"
        />
      </div>
    </template>
  </BaseForm>
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

  data() {
    return {
      recaptchaError: true,
      token: null,
    }
  },

  beforeDestroy() {
    const modalWithReCapthca = document.getElementById(this.id)
    if (modalWithReCapthca) {
      const reCapthcaTask = modalWithReCapthca.nextSibling
      if (reCapthcaTask) reCapthcaTask.remove()
    }
  },

  methods: {
    onError(error) {
      console.log('Error happened:', error)
    },

    onSuccess() {
      this.recaptchaError = false
    },

    onExpired() {
      console.log('Expired')
    },

    async handleSubmit(formData) {
      this.token = await this.$recaptcha.getResponse()
      const variables = {
        ...formData,
        formLocation: this.formLocation,
        token: this.token,
        fromId: this.id,
      }

      // from mixin
      this.submitLead(variables)
      await this.$recaptcha.reset()
      this.recaptchaError = true
    },

    reset() {
      this.$refs.baseForm.reset()
    },
  },
}
</script>

<style lang="scss" scoped>
.recaptcha {
  padding-bottom: 30px;
}
</style>
