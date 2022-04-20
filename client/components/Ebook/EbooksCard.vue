<template>
  <div
    class="ebook-card"
  >
    <NuxtLink
      :to="`/ebooks/${link}`"
      class="ebook-card__image-box"
    >
      <img
        v-lazy-load
        :data-src="image.url"
        :alt="image.alt"
        width="270"
        height="228"
      >
    </NuxtLink>
    <NuxtLink
      :to="`/ebooks/${link}`"
      class="ebook-card__content"
    >
      <h4 class="ebook-card__title">
        {{ title }}
      </h4>
      <p class="ebook-card__subtitle">
        {{ subtitle }}
      </p>
    </NuxtLink>
    <NuxtLink
      :to="`/ebooks/${link}`"
      class="ebook-card__link"
    >
      Read now
    </NuxtLink>
  </div>
</template>
<script>
export default {
  name: 'EbooksCard',

  props: {
    title: {
      type: String,
      default: '',
    },

    subtitle: {
      type: String,
      default: '',
    },

    image: {
      type: Object,
      default: () => ({}),
    },

    link: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
.ebook-card {
  display: flex;
  flex-direction: column;

  &:hover .ebook-card__link {
    color: $text-color--red;
  }

  &:hover img {
    top: -60px;
  }

  &:hover .ebook-card__image-box::after {
    width: 120px;
  }

  &__image-box {
    background-color: $bgcolor--silver;
    border-radius: 10px;
    margin-bottom: 30px;
    perspective: 800px;
    padding: 15px 20px 35px;
    display: flex;
    justify-content: center;
    position: relative;
    &::after {
      content: '';
      width: 100px;
      height: 100px;
      position: absolute;
      top: 65%;
      left: 50%;
      background: rgba(0, 0, 0, 0.1);
      box-shadow: 0 0 40px 10px rgba(0, 0, 0, 0.2);
      border-radius: 50%;
      transform: scaleY(0.07) translateX(-50%);
      z-index: -1;
      transition: 0.5s ease-in-out;
    }
    img {
      position: relative;
      transform: rotate3d(1, -3, 5, 20deg);
      top: -30px;
      transition: 0.5s ease-in-out;
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
  }

  &__content {
    flex-grow: 1;
    margin-bottom: 20px;
  }

  &__title {
    @include font('Poppins', 22.78px, 600);
    line-height: 130%;
    letter-spacing: -1px;
    color: $text-color--chinese-black;
    margin-bottom: 10px;
  }

  &__subtitle {
    @include font('Inter', 16px, 400);
    line-height: 166%;
    letter-spacing: -0.035em;
    color: $text-color--grey-pale;
  }

  &__link {
    @include font('Inter', 16px, 600);
    line-height: 20px;
    letter-spacing: -0.4px;
    color: $text-color--grey-20-percent;
    transition: 0.3s ease-in-out;
  }
}
</style>
