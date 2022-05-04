<template>
  <section class="software-body">
    <p
      v-if="showModal"
      class="software-body__title"
    >
      Please, leave your contacts. We will contact you soon.
    </p>
    <BaseForm
      v-if="showModal"
      id="chat-form"
      ref="baseForm"
      class-name="chat-form"
      button-label="Contact me"
      :use-company="isCompany"
      :default-interest-radio-input="true"
      button-class-name="ui-button--transparent-bgc ui-button_submit-button-footer"
      button-id-name="chat_button"
      :is-partnership="isPartnership"
      @submit="handleSubmit"
    />
    <div
      v-else-if="showSuccessModal"
    >
      <FormSuccess />
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import BaseForm from '@/components/core/forms/BaseForm'
import createLeadMixin from '@/mixins/createLeadMixin'
import FormSuccess from '@/components/core/chat/ChatModal/FormSuccess'

export default {
  name: 'Development',

  components: {
    BaseForm,
    FormSuccess,
  },

  mixins: [createLeadMixin(763813, 'Chat Form')],

  props: {
    isCompany: {
      type: Boolean,
      required: true,
    },

    isPartnership: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      showModal: true,
      showSuccessModal: false,
    }
  },

  methods: {
    ...mapActions(['setFilledLeadForm']),

    async handleSubmit(formData) {
      const variables = {
        ...formData,
        formLocation: 'Chat component',
      }
      await this.submitLead(variables)
      this.showSuccessModal = true
      this.$emit('close')
      this.setFilledLeadForm()
      await this.$router.push('/success-and-faq/')
    },

    reset() {
      this.$refs.baseForm.reset()
      this.showModal = false
    },
  },
}
</script>

<style lang="scss">
.software-body {
  padding: 20px;
  background-color: $bgcolor--white-primary;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  min-height: 400px;

  &__title {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    color: $text-color--black-oil;
    opacity: 0.7;
    margin-bottom: 10px;
  }

  .chat-form {
    .entry-field {
      font-size: 12px;
      line-height: 24px;
      padding: 13px 20px;
    }

    .field-item {
      margin-bottom: 10px;
    }

    .form-checkbox-label:first-child {
      margin-bottom: 10px;
    }

    .form-checkboxes {
      margin-bottom: 12px;
    }

    .form-checkbox-label {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 22px;
      letter-spacing: -0.013em;
    }
  }
}
</style>
