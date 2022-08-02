<template>
  <Modal
    ref="modalContentLocker"
    modal-background="black"
    where-is-called="ebook"
    :class="{ 'modal-content-locker': !formSended }"
    :ebook-sendpulse-template-id="sendPulseTemplateId || 763889"
  >
    <div
      v-if="!formSended && ebookTitle"
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
      <h2 class="modal-content__title">
        {{ title }}
      </h2>
      <h2 class="modal-content__description">
        Get your copy of “{{ $prismic.asText(ebookTitle) }}”
      </h2>
      <ReadForm
        id="modal-content-locker"
        :fullsize-button="true"
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
      titles: [
        'How to negotiate with an IT vendor?',
        'Are looking for software development services?',
        'Are an aspiring IT company searching for useful information?',
        'Are interested in pricing information for custom software development?',
      ],

      ebookTitle: this.ebook?.primary?.title,
      ebookImage: this.ebook?.primary?.ebookImage,
      ebookPath: this.ebook?.primary?.ebookPath,
      ebookName: this.ebook?.primary?.ebookName,
      sendPulseTemplateId: this.ebook?.primary?.sendPulseTemplateId,
    }
  },

  mounted() {
    this.makeRandomTitle()
  },

  methods: {
    makeRandomTitle() {
      if (this.sendPulseTemplateId === 791537) { // to be removed this if
        this.title = 'Are you wondering what processes and principles Mad Devs follow when developing software?'
        return
      }
      const randomIndex = Math.floor(Math.random() * this.titles.length)
      this.title = this.titles[randomIndex]
    },

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
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 25px 46px;
  background-color: $bgcolor--silver;
  border-radius: 4px;
  box-sizing: border-box;

  @media screen and (max-width: 540px) {
    padding: 30px 32px;
  }

  &__img {
    width: 100%;
    max-width: 100px;
    height: auto;
    transform: rotate(9deg);
    margin: 0 auto;
  }

  &__title {
    @include font('Inter', 28px, 700);
    line-height: 32px;
    margin: 22px 15px 8px;
    letter-spacing: -1px;
    color: $text-color--chinese-black;
    text-align: center;
    align-self: center;
    @media screen and (max-width: 580px) {
      @include font('Inter', 21px, 700);
      line-height: 24px;
    }
  }

  &__description {
    @include font('Inter', 22px, 400);
    line-height: 30px;
    margin: 0 15px 24px;
    letter-spacing: -1px;
    color: $text-color--chinese-black;
    text-align: center;
    @media screen and (max-width: 580px) {
      @include font('Inter', 17px, 400);
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

    &_content {
      padding: 0;
      max-height: 80vh;
    }

    &_head {
      @media screen and (max-width: 670px) {
        margin-top: 0;
      }
    }

    &_container {
      @media screen and (min-width: 720px) {
        width: 654px;
        max-width: 654px;
      }
      @media screen and (max-width: 720px) {
        margin-top: 0;
        background-color: $bgcolor--silver;
      }
    }

    &_content, &-content {
      @media screen and (max-width: 720px) {
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
