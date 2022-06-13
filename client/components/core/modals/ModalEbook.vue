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
      <h2 class="modal-content__title">
        Get your copy of “{{ ebookTitle }}”
      </h2>
      <ReadForm
        id="modal-ebook"
        :ebook-path="ebookPath"
        :ebook-name="ebookName"
        :ebook-image="ebookImage"
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

    ebookTitle: {
      type: String,
      default: '',
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
      type: String,
      default: '',
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
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 42px 48px;
  background-color: $bgcolor--silver;
  border-radius: 4px;
  box-sizing: border-box;

  @media screen and (max-width: 540px) {
    padding: 32px 38px;
  }

  @media screen and (max-width: 376px) {
    padding: 22px 28px;
  }

  &__img {
    width: 100%;
    max-width: 140px;
    height: auto;
  }

  &__title {
    @include font('Inter', 22px, 400);
    line-height: 30px;
    letter-spacing: -1px;
    color: $text-color--chinese-black;
    margin-top: 15px;
    margin-bottom: 24px;
    width: 100%;
  }
}

.modal-ebook {
  /deep/ .modal {
    &_container,
    &_head {
      padding: 0;
    }

    &_content {
      padding: 0;
      max-height: 80vh;
    }

    &_head {
      @media screen and (max-width: 640px) {
        margin-top: 54px;
      }
    }

    &_container {
      @media screen and (min-width: 640px) {
        width: 498px;
        max-width: 498px;
      }
    }

    &_close {
      top: 20px;
      right: 20px;
    }
  }

  /deep/ .read-form {
    max-width: 100%;
  }
}
</style>
