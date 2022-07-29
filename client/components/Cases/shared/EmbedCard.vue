<template>
  <div
    class="embed-card"
    data-aos="fade-up"
  >
    <img
      v-lazy-load
      :data-src="$getMediaFromS3(`/images/Cases/${folder}/${extension}/${file}.${extension}`)"
      :alt="`${file} logo`"
      class="embed-card__image"
    >
    <div class="embed-card__text-content">
      <h4 class="embed-card__title">
        {{ title }}
      </h4>
      <a
        :href="link"
        class="embed-card__link"
        target="_blank"
      >
        {{ textLink }}
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EmbedCard',

  props: {
    title: {
      type: String,
      default: '',
    },

    folder: {
      type: String,
      default: '',
    },

    file: {
      type: String,
      default: '',
    },

    extension: {
      type: String,
      default: '',
    },

    textLink: {
      type: String,
      default: '',
    },

    link: {
      type: String,
      default: '',
    },
  },
}
</script>
<style scoped lang="scss">
.embed-card {
  background: linear-gradient(270deg, #1DA5FC 0%, #53D3E0 98.65%);
  border-radius: 10px;
  padding: 12.5px 72px;
  display: flex;
  column-gap: 72px;

  &__text-content {
    display: flex;
    flex-direction: column;
  }

  &__title {
    @include font('Inter', 28px, 700);
    line-height: 32px;
    letter-spacing: -1px;
    color: $text-color--white-primary;
    margin-bottom: 24px;
    margin-top: 15px;
  }

  &__link {
    background: $bgcolor--white-primary;
    border-radius: 5px;
    @include font('Inter', 16px, 400);
    line-height: 26px;
    color: $text-color--chinese-black;
    padding: 5px 27.5px;
    margin-right: auto;
  }

  @media screen and (max-width: 725px) {
    flex-direction: column;
    padding: 25.5px 32px;

    &__image {
      width: 103px;
      height: 101px;
    }

    &__title {
      margin-top: 21px;
      font-size: 21.25px;
      line-height: 130%;
      letter-spacing: -0.02em;
      font-weight: 600;
    }
  }
}
</style>
