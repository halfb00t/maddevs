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
          id="v2-modal"
          :site-key="recaptchaSiteKey"
          @success="onSuccess"
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
      widgetModalId: 0,
    }
  },

  computed: {
    recaptchaSiteKey() {
      return `${process.env.reCaptchaSiteKey}`
    },
  },

  async mounted() {
    await this.$recaptcha.init()

    this.widgetModalId = this.$recaptcha.render('v2-modal', {
      sitekey: process.env.reCaptchaSiteKey,
    })
  },

  beforeDestroy() {
    const modalWithReCapthca = document.getElementById(this.id)
    if (modalWithReCapthca) {
      const reCapthcaTask = modalWithReCapthca.nextSibling
      if (reCapthcaTask) {
        reCapthcaTask.remove()
      }
    }

    this.$recaptcha.destroy()
  },

  methods: {
    onSuccess() {
      this.recaptchaError = false
    },

    async handleSubmit(formData) {
      try {
        this.token = await this.$recaptcha.getResponse(this.widgetModalId)
      } catch (e) {
        console.log(e)
      }
      const variables = {
        ...formData,
        formLocation: this.formLocation,
        token: this.token,
        fromId: this.id,
      }

      // from mixin
      this.submitLead(variables)
      await this.$recaptcha.reset(this.widgetModalId)
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
