<template>
  <LottieMad
    :id="animationId"
    class="case_lottie"
    height="395px"
    :lottie-link="$getMediaFromS3(`/images/backend-development/lottie/${animationName}.json`)"
    :autoplay="true"
  />
</template>

<script>
import uid from '@/helpers/generatorUid'
import LottieMad from '@/components/shared/LottieMad'

export default {
  name: 'CardAnimation',

  components: {
    LottieMad,
  },

  props: {
    animationName: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      id: null,
    }
  },

  computed: {
    animationId() {
      return `${this.animationName}-${this.id}`
    },
  },

  mounted() {
    this.id = uid()
  },
}
</script>
