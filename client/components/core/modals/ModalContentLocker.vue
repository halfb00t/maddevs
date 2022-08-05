<template>
  <Modal
    ref="modalContentLocker"
    modal-background="black"
    where-is-called="ebook"
    :class="{ 'modal-content-locker': !formSended }"
    :ebook-sendpulse-template-id="sendPulseTemplateId || 763889"
  >
    <div
      v-if="!formSended && ebookSubTitle"
      class="modal-content"
      data-testid="content-locker-modal-content"
    >
      <img
        v-lazy-load
        class="modal-content__img"
        width="110"
        height="155"
        :data-src="ebookImage.url"
        :alt="ebookImage.alt || 'Ebook Image'"
      >
      <ReadForm
        id="modal-content-locker"
        :fullsize-button="true"
        :ebook-title="title"
        :ebook-sub-title="ebookSubTitle"
        :ebook-path="ebookPath"
        :ebook-name="ebookName"
        :send-pulse-template-id="sendPulseTemplateId"
        @form-sended="handleSendedForm"
      />
    </div>
    <!-- id is needed for google analytics, don't remove it -->
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
import { Cookies } from '@/helpers/cookies'
import getRandomTitle from '@/helpers/getRandomTitle'

export default {
  name: 'ModalContentLocker',
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

    ebook: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      successMessage: null,
      formSended: false,
      title: '',
      ebookSubTitle: this.ebook?.primary?.title,
      ebookImage: this.ebook?.primary?.ebookImage,
      ebookPath: this.ebook?.primary?.ebookPath,
      ebookName: this.ebook?.primary?.ebookName,
      sendPulseTemplateId: this.ebook?.primary?.sendPulseTemplateId,
    }
  },

  mounted() {
    this.title = getRandomTitle(this.sendPulseTemplateId)
  },

  methods: {
    handleSendedForm(payload) {
      this.successMessage = `
        The letter with the PDF file was successfully sent to mail ${payload.email}.
        <br><br> Please check your email.
      `
      this.formSended = true
      Cookies.setCookie({
        name: `sawModal_${this.ebook.primary.sendPulseTemplateId}`,
        value: true,
        expires: 30,
      })
    },

    show() {
      if (!this.$refs.modalContentLocker.show) return
      this.$refs.modalContentLocker.show()
    },

    close() {
      if (!this.$refs.modalContentLocker.close) return
      this.$refs.modalContentLocker.close()
    },
  },
}
</script>

<style lang="scss" scoped>
.modal-content {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 25px 46px;
  background-color: $bgcolor--silver;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (max-width: 540px) {
    padding: 30px 32px;
  }

  &__img {
    width: 100%;
    max-width: 249px;
    height: auto;
    transform: rotate(9deg);
    margin-right: 43px;

    @media screen and (max-width: 768px) {
      margin-right: 0;
      margin-bottom: 21px;
    }

    @media screen and (max-width: 480px) {
      max-width: 78px;
    }
  }

  &__title {
    @include font("Inter", 28px, 700);
    line-height: 32px;
    margin: 22px 15px 8px;
    letter-spacing: -1px;
    color: $text-color--chinese-black;
    text-align: center;
    align-self: center;

    @media screen and (max-width: 580px) {
      @include font("Inter", 20px, 700);
      line-height: 26px;
    }
  }

  &__description {
    @include font("Inter", 22px, 400);
    line-height: 30px;
    margin: 0 15px 24px;
    letter-spacing: -1px;
    color: $text-color--chinese-black;
    text-align: center;
    @media screen and (max-width: 580px) {
      @include font("Inter", 17px, 400);
      line-height: 24px;
      margin-bottom: 20px;
    }
  }
}

.modal-content-locker {
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
      top: 20px;
      right: 20px;
    }
  }

  /deep/ .read-form {
    max-width: 100%;
  }
}
</style>
