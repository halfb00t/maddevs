<template>
  <div
    ref="imageWrapper"
    class="img-wrapper"
  >
    <img
      v-lazy-load
      width="772"
      height="472"
      class="img-wrapper__before-img"
      :data-src="beforeImage"
      alt="Before image"
    >
    <div
      class="img-wrapper__compare-overlay"
      :style="{ width: `${compareWidth}%` }"
    >
      <img
        v-lazy-load
        width="772"
        height="472"
        class="img-wrapper__after-img"
        :data-src="afterImage"
        alt="After image"
        :style="{ width: width + 'px' }"
      >
    </div>
    <input
      v-model="compareWidth"
      class="img-wrapper__compare-range"
      type="range"
      min="0"
      max="100"
      :step="step"
      tabindex="-1"
    >
    <div
      class="img-wrapper__handle-wrap"
      :style="{ left: compareWidth + '%' }"
    >
      <div class="img-wrapper__handle">
        <svg
          class="img-wrapper__handle-arrow img-wrapper__handle-arrow--l"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
        <svg
          class="img-wrapper__handle-arrow img-wrapper__handle-arrow--r"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>
      <span class="img-wrapper__handle-line" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UIBeforeAfterImage',

  props: {
    value: {
      type: Number,
      default: 50,
    },

    beforeImage: {
      type: String,
      default: '',
    },

    afterImage: {
      type: String,
      default: '',
    },

    step: {
      type: Number,
      default: 0.1,
    },
  },

  data() {
    return {
      width: null,
      compareWidth: this.value,
    }
  },

  mounted() {
    window.addEventListener('resize', this.resizeHandler)
    this.width = this.$refs.imageWrapper.getBoundingClientRect().width
  },

  destroyed() {
    window.removeEventListener('resize', this.resizeHandler)
  },

  methods: {
    resizeHandler() {
      this.width = this.$refs.imageWrapper.getBoundingClientRect().width
    },
  },
}
</script>

<style lang='scss' scoped>
.img-wrapper {
  width: 100%;
  position: relative;

  &__compare-overlay {
    position: absolute;
    overflow:hidden;
    height: auto;
    top:0;
  }

  &__before-img,
  &__after-img {
    width: 100%;
    height: auto;
  }

  &__after-img {
    width: 50%;
    position: relative;
  }

  &__compare-range {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 999;
    width: 100%;
    left: 0;
    right: 0;
    height: 50px;
    cursor: ew-resize;
    background: rgba(0,0,0,.4);
    opacity: 0;
  }

  &__handle-arrow {
    position: absolute;
    width: 20px;

    @media screen and (max-width: 568px) {
      width: 15px;
    }

    @media screen and (max-width: 480px) {
      width: 10px;
    }
  }

  &__handle-arrow--l {
    left: 0;
  }

  &__handle-arrow--r {
    right: 0;
  }

  &__handle-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    height: 100%;
    transform: translate(-50%, -50%);
  }

  &__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background: #FF0000;
    border-radius: 50%;
    width: 30px;
    height: 30px;

    @media screen and (max-width: 568px) {
      width: 25px;
      height: 25px;
    }

    @media screen and (max-width: 480px) {
      width: 15px;
      height: 15px;
    }
  }

  &__handle-line {
    content: '';
    position: absolute;
    top:0;
    width: 2px;
    height: 100%;
    background: #FF0000;
    z-index: 4;
    pointer-events:none;
    user-select:none;
  }
}
</style>
