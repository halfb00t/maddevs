<template>
  <div>
    <div class="post-part single">
      <div
        :class="size"
        class="block-img"
      >
        <img
          v-lazy-load
          :class="{ 'block-img-zoom': zoomEnabled }"
          :data-src="img.url"
          :alt="img.alt || 'Image'"
          width="632"
          height="170"
          @click="openModal"
        >
        <SimpleModal
          v-if="zoomEnabled"
          ref="zoom"
        >
          <img
            v-lazy-load
            :data-src="img.url"
            :alt="img.alt || 'Image'"
          >
        </SimpleModal>
      </div>
      <p
        v-if="caption"
        data-testid="test-image-label"
        class="image-label"
      >
        {{ caption }}
      </p>
    </div>
  </div>
</template>

<script>
import SimpleModal from '@/components/slices/SimpleModal'

export default {
  name: 'ImageCaptionSlice',
  components: { SimpleModal },
  props: {
    slice: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      img: '',
      caption: '',
      size: '',
    }
  },

  computed: {
    zoomEnabled() {
      return this.slice.primary.enablezoom === 'enable'
    },
  },

  created() {
    this.img = this.slice.primary.image
    this.caption = this.$prismic.asText(this.slice.primary.caption)
    this.size = this.slice.slice_label
  },

  methods: {
    openModal() {
      if (this.slice && this.slice.primary.enablezoom === 'enable') {
        this.$refs.zoom.show()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.block-img {
  padding-bottom: 10px;
  text-align: center;
  &-zoom {
    cursor: pointer;
  }
}

.image-label {
  @include font('Inter', 14px, 400);
  display: block;
  text-align: center;
  line-height: 129%;
  letter-spacing: -0.02em;
  color: $text-color--grey;
  padding-bottom: 12px;
}
</style>
