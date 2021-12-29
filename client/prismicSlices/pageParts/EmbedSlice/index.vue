<template>
  <section class="embed-slice">
    <section class="embed-slice__container">
      <EmbedSlice
        :slice="slice"
        :custom-title="true"
      />
    </section>
  </section>
</template>

<script>
import EmbedSlice from '@/components/slices/EmbedSlice.vue'

export default {
  name: 'Embed',
  components: {
    EmbedSlice,
  },

  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.embed-slice {
  background: $bgcolor--white-primary;
  width: 100%;

  &__container {
    max-width: 816px;
    margin: 0 auto;
    padding: 0px 24px;
    margin-bottom: 1px;
  }

  /deep/ &__title {
    @include font('Poppins', 25px, 700);
    line-height: 32px;
    color: $text-color--black-oil;
    margin: 0;
    margin-bottom: 6px;
  }

  /deep/ &__description {
    @include font('Inter', 15px, 400);
    color: $text-color--grey-pale;
    margin: 0;
  }
}
</style>
