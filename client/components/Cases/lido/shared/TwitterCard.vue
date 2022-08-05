<template>
  <div class="twitter-card">
    <Tweet
      :id="id"
      widget-class="twitter-card__tweet"
    />
  </div>
</template>
<script>
import { Tweet } from 'vue-tweet-embed'

export default {
  name: 'TwitterCard',

  components: { Tweet },

  props: {
    id: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
.twitter-card {
  &__tweet {
    display: flex;
    justify-content: center;
  }
}
</style>
