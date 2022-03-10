<template>
  <section class="ebook-learn-card">
    <img
      v-if="icon"
      v-lazy-load
      width="54"
      height="54"
      :data-src="require(`@/assets/img/Ebook/${icon}`)"
      alt="Icon"
    >
    <p
      v-if="title === 'And much more...'"
      class="ebook-learn-card_title"
    >
      {{ title }}
    </p>
    <h3
      v-else
      class="ebook-learn-card_title"
    >
      {{ title }}
    </h3>
    <p
      class="ebook-learn-card_desc"
    >
      {{ description }}
    </p>
  </section>
</template>

<script>
export default {
  name: 'EbookLearnCard',
  props: {
    icon: {
      type: String,
      default: null,
    },

    title: {
      type: String,
      default: 'Card title',
    },

    description: {
      type: String,
      default: 'Card description',
    },
  },
}
</script>

<style lang="scss" scoped>
.ebook-learn-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: $bgcolor--black-pale;
  border-radius: 4px;
  padding: 24px;

  img {
    width: 54px;
    height: 54px;
    margin-bottom: 27px;
  }

  &_title {
    @include font('Inter', 21px, 600);
    line-height: 24px;
    letter-spacing: -1px;
    color: $text-color--white-primary;
    margin-bottom: 21px;
    padding: 0;
  }

  &_desc {
    @include font('Inter', 16px, 400);
    line-height: 24px;
    letter-spacing: -0.4px;;
    color: $text-color--grey-20-percent;
  }
}
</style>
