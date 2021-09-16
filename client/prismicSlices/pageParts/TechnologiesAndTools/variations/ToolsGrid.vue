<template>
  <section class="tools-slice">
    <div
      class="container"
    >
      <div class="tools-slice__container">
        <div
          v-for="item in items"
          :key="item.text"
          class="tools-slice__item"
        >
          <img
            v-lazy-load
            :src="`${item.image.url}`"
            :alt="item.text"
            width="26"
            height="26"
          >
          <span class="tools-slice__span">{{ item.text }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ToolsGrid',

  props: {
    items: {
      type: Array,
      default: () => ([]),
    },
  },
}
</script>

<style lang="scss" scoped>
.tools-slice {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1px 1px;
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(9, 1fr);
    }
    @media screen and (max-width: 568px) {
      grid-template-columns: repeat(6, 1fr);
    }

    &__item {
      width: 100%;
      height: 90px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      transition: opacity 0.2s linear;
    }

    &__span {
      font-family: "Inter", sans-serif;
      font-size: 11px;
      font-weight: 400;
      white-space: nowrap;
      line-height: 13px;
      color: rgba(255, 255, 255, 0.25);
      margin-top: 15px;
      display: block;
      width: 100%;
      max-width: 90px;
      text-overflow: ellipsis;
      text-align: center;
      overflow: hidden;
    }
}
</style>
