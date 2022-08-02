<template>
  <!-- id is needed for google analytics, don't remove it -->
  <Modal
    :id="id"
    ref="modalEbook"
    modal-background="black"
    :class="{ 'modal-ebook': !formSended }"
  >
    <div
      v-if="!formSended"
      class="modal-content"
    >
      <img
        v-lazy-load
        class="modal-content__img"
        width="110"
        height="155"
        :data-src="ebookImage.url"
        :alt="ebookImage.alt || 'Image'"
      >
      <ReadForm
        id="modal-ebook"
        :ebook-path="ebookPath"
        :ebook-name="ebookName"
        :ebook-image="ebookImage"
        :ebook-sub-title="ebookSubTitle"
        :send-pulse-template-id="sendPulseTemplateId"
        @form-sended="handleSendedForm"
      />
    </div>
    <SuccessMessage
      v-else
      :id="id"
      title="Thank you!"
      :message="successMessage"
    />
  </Modal>
</template>

<script>
import Modal from '@/components/core/Modal'
import ReadForm from '@/components/Ebook/ReadForm'
import SuccessMessage from '@/components/core/modals/SuccessMessage'

export default {
  name: 'ModalEbook',
  components: {
    Modal,
    ReadForm,
    SuccessMessage,
  },

  props: {
    id: {
      type: String,
      default: '',
    },

    location: {
      type: String,
      default: '',
    },

    ebookSubTitle: {
      type: Array,
      default: () => [],
    },

    ebookPath: {
      type: String,
      default: '',
    },

    ebookName: {
      type: String,
      default: '',
    },

    ebookImage: {
      type: Object,
      required: true,
    },

    sendPulseTemplateId: {
      type: Number,
      default: null,
    },
  },

  data() {
    return {
      successMessage: null,
      formSended: false,
    }
  },

  methods: {
    handleSendedForm(payload) {
      this.successMessage = `
        The letter with the PDF file was successfully sent to mail ${payload.email}.
        <br><br> Please check your email.
      `
      this.formSended = true
    },

    show() {
      if (!this.$refs.modalEbook.show) return
      this.$refs.modalEbook.show()
    },

    close() {
      if (!this.$refs.modalEbook.close) return
      this.$refs.modalEbook.close()
    },
  },
}
</script>

<style lang="scss" scoped>
.modal-content {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 42px 48px;
  background-color: $bgcolor--silver;
  box-sizing: border-box;

  @media screen and (max-width: 675px) {
    padding: 20px;
    flex-direction: column;
    align-items: flex-start;
  }

  &__img {
    width: 100%;
    max-width: 249px;
    height: auto;
    margin-right: 43px;

    @media screen and (max-width: 480px) {
      max-width: 78px;
      margin-right: 0;
      margin-bottom: 21px;
    }
  }
}

.modal-ebook {
  /deep/ .modal {
    &_container,
    &_head {
      padding: 0;
    }

    &_head {
      position: unset;

      @media screen and (max-width: 640px) {
        position: relative;
      }
    }

    &_container {
      border-radius: 0;

      @media screen and (max-width: 640px) {
        padding: 0 16px;
      }
    }

    &_content {
      padding: 0;
      max-height: 90vh;
    }

    &_head {
      @media screen and (max-width: 640px) {
        margin-top: 54px;
      }
    }

    &_container {
      @media screen and (min-width: 640px) {
        width: 998px;
        max-width: 998px;
      }
    }

    &_close {
      padding: 0;
      top: 21px;
      right: 41px;

      @media screen and (max-width: 768px) {
        top: 20px;
        right: 20px;
      }
    }
  }

  /deep/ .read-form {
    max-width: 100%;
  }
}
</style>
