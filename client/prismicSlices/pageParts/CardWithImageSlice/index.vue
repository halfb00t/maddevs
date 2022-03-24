<template>
  <section class="section card-with-image">
    <div class="container">
      <div
        class="card-with-image__item"
        :style="{backgroundColor: background || '#f4f4f4'}"
      >
        <div
          class="card-with-image__text-content"
          :class="Object.keys(image).length === 0 && 'card-with-image__text-content-full'"
        >
          <h4
            v-if="title"
            class="card-with-image__title"
            :style="{color: textColor || '#111'}"
          >
            {{ title }}
          </h4>
          <p
            v-if="description"
            class="card-with-image__description"
            :style="{color: textColor || '#111'}"
          >
            {{ description }}
          </p>
        </div>
        <div
          v-if="Object.keys(image).length !== 0"
          class="card-with-image__image-box"
        >
          <img
            v-lazy-load
            :data-src="image.url"
            :alt="image.alt || 'Image'"
            class="card-with-image__image"
            :width="image.dimensions.width"
            :height="image.dimensions.height"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CardWithImageSlice',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },

  data() {
    return {
      title: this.slice?.primary?.title,
      description: this.slice?.primary?.description,
      background: this.slice?.primary?.backgroundColor,
      textColor: this.slice?.primary?.textColor,
      image: this.slice?.primary?.image,
    }
  },
}
</script>

<style lang="scss" scoped>
.section {
  background: #fff;
}

.container {
  max-width: 817px;
}

.card-with-image {
  &__item {
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      position: relative;
    }
    @media screen and (max-width: 676px) {
      flex-direction: column;
    }
  }
  &__text-content {
    padding: 39px 43px;
    width: 53%;
    @media screen and (max-width: 768px) {
      width: 62%;
      padding: 34.33px 33px;
    }
    @media screen and (max-width: 676px) {
      width: 100%;
      padding: 30px 21px 0;
      box-sizing: border-box;
    }
  }
  &__text-content-full {
    width: 100%;
    @media screen and (max-width: 676px) {
      padding-bottom: 30px;
    }
  }
  &__title {
    @include font('Inter', 20px, 700);
    line-height: 26px;
    letter-spacing: -0.4px;
    margin-bottom: 10px;
    @media screen and (max-width: 576px) {
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 14px;
    }
  }
  &__description {
    @include font('Inter', 17px, 400);
    line-height: 166%;
    letter-spacing: -0.035em;
  }
  &__image-box {
    width: 36%;
    position: relative;
    @media screen and (max-width: 768px) {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 33%;
      height: 100%;
    }
    @media screen and (max-width: 676px) {
      position: relative;
      inset: unset;
      width: 100%;
      height: 147px;
      display: flex;
    }
  }
  &__image {
    width: 100%;
    height: auto;
    display: block;
    position: absolute;
    bottom: 0;
    @media screen and (max-width: 676px) {
      position: relative;
      bottom: -10px;
      height: 100%;
      width: auto;
      margin-left: auto;
      margin-right: 30px;
    }
  }
}
</style>
