<template>
  <ModalContentLocker
    id="content-locker"
    ref="modalContentLocker"
    data-testid="content-locker"
  />
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ModalContentLocker from '@/components/core/modals/ModalContentLocker'

const TIME_TO_LOCK_CONTENT = 15000 // in ms

export default {
  name: 'ContentLocker',
  components: { ModalContentLocker },

  data() {
    return {
      isScrolled: false,
      isShowLocker: false,
    }
  },

  computed: {
    ...mapGetters(['showContentLocker']),
  },

  watch: {
    isScrolled() {
      if (this.showContentLocker) this.startTimeout()
    },

    isShowLocker() {
      this.$refs.modalContentLocker.show()
    },
  },

  mounted() {
    this.addScrollListener()
  },

  destroyed() {
    this.removeScrollListener()
  },

  methods: {
    ...mapActions(['changeContentLockerDisplay']),

    handleScroll() {
      this.isScrolled = true
      this.removeScrollListener()
    },

    addScrollListener() {
      document.addEventListener('scroll', this.handleScroll)
    },

    removeScrollListener() {
      document.removeEventListener('scroll', this.handleScroll)
    },

    startTimeout() {
      setTimeout(() => {
        this.isShowLocker = true
        this.changeContentLockerDisplay(false)
      }, TIME_TO_LOCK_CONTENT)
    },
  },
}
</script>
