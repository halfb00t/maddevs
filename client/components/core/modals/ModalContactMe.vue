<template>
  <!-- id is needed for google analytics, don't remove it -->
  <Modal
    id="contact-me-modal"
    ref="modalContactMe"
    modal-background="white"
  >
    <ContactMeForm
      id="contact-me-modal"
      :form-location="location"
      @triggerClose="close"
    />
  </Modal>
</template>

<script>
import Modal from '@/components/core/Modal'
import ContactMeForm from '@/components/core/forms/ContactMeForm'

export default {
  name: 'ModalContactMe',
  components: {
    ContactMeForm,
    Modal,
  },

  props: {
    location: {
      type: String,
      default: '',
    },
  },

  methods: {
    show() {
      if (!this.$refs.modalContactMe.show) return
      this.$refs.modalContactMe.show()
    },

    close() {
      if (!this.$refs.modalContactMe.close) return
      this.$refs.modalContactMe.close()
    },
  },
}
</script>
