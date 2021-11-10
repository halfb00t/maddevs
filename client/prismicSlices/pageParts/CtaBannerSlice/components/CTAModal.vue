<template>
  <div class="cta-banner-slice__modal">
    <ModalOrderProjectFromUs
      v-if="variant === 'order-project'"
      id="order-project-from-us-cta-slice"
      ref="modalVariantRef"
      :location="location"
    />
    <ModalContactMe
      v-else
      id="contact-me-cta-slice"
      ref="modalVariantRef"
      :location="location"
    />
  </div>
</template>

<script>
export default {
  name: 'CTAModal',
  components: {
    ModalContactMe: () => import('@/components/core/modals/ModalContactMe'),
    ModalOrderProjectFromUs: () => import('@/components/core/modals/ModalOrderProjectFromUs'),
  },

  props: {
    variant: {
      type: String,
      default: 'contact-me',
    },

    location: {
      type: String,
      default: '',
    },
  },

  methods: {
    show() {
      if (!this.$refs?.modalVariantRef?.show) return
      this.$refs.modalVariantRef.show()
    },
  },
}
</script>
