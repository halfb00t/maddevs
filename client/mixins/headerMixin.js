import { mapActions } from 'vuex'

const headerMixin = selector => ({
  created() {
    this.setHeaderTransparentArea(selector)
    this.setHeaderTransparent(true)
  },

  destroyed() {
    this.setHeaderTransparentArea(null)
    this.setHeaderTransparent(false)
  },

  methods: {
    ...mapActions(['setHeaderTransparentArea', 'setHeaderTransparent']),
  },
})

export default headerMixin
