<template>
  <div
    data-testid="track-img"
    class="comparsion-container"
  >
    <img-comparison-slider hover="true">
      <img
        slot="first"
        :width="baseWidth"
        :height="baseHeight"
        :src="beforeImage"
      >

      <img
        slot="second"
        :width="baseWidth"
        :height="baseHeight"
        :src="afterImage"
      >
    </img-comparison-slider>
  </div>
</template>

<script>
export default {
  name: 'BeforeAfterImage',

  props: {
    beforeImage: {
      type: String,
      default: '',
    },

    afterImage: {
      type: String,
      default: '',
    },

    alt: {
      type: String,
      default: '',
    },

    baseWidth: {
      type: String,
      default: '',
    },

    baseHeight: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.comparsion {
  &-container {
    cursor: col-resize;
    position: relative;
    max-width: 100%;
    margin-left: -24px;
    padding: 20px 24px;
    img {
      width: 100%;
      height: auto;
      display: block;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 768px) {
    &-container {
      width: calc(100% + 24px);
      margin-left: -12px;
      padding: 20px 12px;
    }
  }

  @media screen and (max-width: 420px) {
    &-container {
      width: calc(100% + 12px);
      margin-left: -6px;
      padding: 20px 6px;
    }
  }

  @media screen and (max-width: 370px) {
    &-container {
      width: calc(100% + 6px);
      margin-left: -3px;
      padding: 20px 3px;
    }
  }
}

img-comparison-slider {
  --divider-width: 2px;
  --divider-color: #ec1c24;
  --default-handle-opacity: 0;
}
</style>
