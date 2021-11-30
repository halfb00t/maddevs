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
import { v4 as uuidv4 } from 'uuid'
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

  computed: {
    animationId() {
      const id = uuidv4()
      return `${this.animationName}-${id}`
    },
  },
}
</script>
