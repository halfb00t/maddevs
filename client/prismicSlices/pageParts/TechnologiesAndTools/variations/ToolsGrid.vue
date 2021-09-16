<template>
  <section class="tools-slice">
    <div
      class="container"
      :data-aos="animation"
      data-testid="tools-slice-container"
    >
      <div class="tools-slice__grid">
        <div
          v-for="(item, i) in items"
          :key="`${item}-${i}`"
          class="tools-slice__technology"
          data-testid="tools-slice-technology"
        >
          <img
            v-lazy-load
            :data-src="`${item.image.url}`"
            :alt="`${item.text}`"
            width="26"
            height="26"
            :field="item.image"
          >
          <span>{{ item.text }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ToolsGrid',

  props: {
    slice: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      items: this.slice?.items,
      animation: this.slice?.primary?.animation,
    }
  },
}
</script>

<style lang="scss" scoped>
.tools-slice {
  padding-top: 54px;

  &__grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1px 1px;

    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(9, 1fr);
    }

    @media screen and (max-width: 568px) {
      grid-template-columns: repeat(6, 1fr);
    }
  }

  &__technology {
    width: 100%;
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: opacity 0.2s linear;
    background: #26261F;

    @media screen and (max-width: 976px) {
      height: 74px;
    }

    @media screen and (max-width: 668px) {
      height: 54px;
      justify-content: flex-end;
    }

    img {
      width: 26px;
      height: 26px;

      @media screen and (max-width: 976px) {
        width: 20px;
        height: 20px;
      }
    }

    span {
      @include font('Inter', 11px, 400);
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

      @media screen and (max-width: 1370px) {
        max-width: 60px;
      }

      @media screen and (max-width: 1090px) {
        max-width: 40px;
      }

      @media screen and (max-width: 976px) {
        font-size: 8px;
        line-height: 13px;
        margin-top: 11px;
        max-width: 65px;
      }

      @media screen and (max-width: 850px) {
        max-width: 45px;
      }

      @media screen and (max-width: 668px) {
        margin-top: 9px;
        margin-bottom: 3px;
        max-width: 25px;
      }

      @media screen and (max-width: 576px) {
        max-width: 50px;
      }

      @media screen and (max-width: 420px) {
        max-width: 30px;
      }
    }
  }
}
</style>
