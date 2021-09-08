<template>
  <div class="container">
    <ul class="card-grid-slice">
      <li
        v-for="(item, i) of items"
        :key="`card-grid-slice__item-${i}`"
        class="card-grid-slice__item"
        :class="{ 'card-grid-slice__item--full-width': item.fullWidth }"
      >
        <a
          :href="item.btnLink"
          target="_blank"
          class="card-grid-slice__item-link"
        >
          <div class="card-grid-slice__item-info">
            <h3 v-html="item.title" />
            <p v-html="item.description" />
            <UIArrowButton
              color="black"
              class="card-grid-slice__item-button"
            />
          </div>
          <img
            class="card-grid-slice__item-logo"
            :src="item.image.url"
            :alt="item.image.alt"
            :width="item.image.width"
            :height="item.image.height"
          >
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import UIArrowButton from '@/components/shared/UIArrowButton'

export default {
  name: 'CardGridSlice',

  components: {
    UIArrowButton,
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
  .title-desc {
    margin-bottom: 46px;
  }

  .card-grid-slice {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 48px;

    @media screen and (max-width: 1260px) {
      grid-gap: 24px;
    }

    @media screen and (max-width: 1090px) {
      grid-template-columns: 1fr;
    }

    &__item {
      background-color: $bgcolor--silver;
      border-radius: 4px;
      &--full-width {
        grid-column: auto/span 2;
      }
      &:hover {
        .card-grid-slice__item-button {
          background-color: $text-color--black-oil;
          color: $text-color--white-primary;
        }
      }
      &-link {
        padding: 90px 112px 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        width: 100%;
        height: 100%;
        color: $text-color--black-oil;
        word-break: break-word;
        &--bottom-padding {
          padding-bottom: 104px;
        }
      }
      &-info {
        h3 {
          font-size: 56px;
          line-height: 60px;
          letter-spacing: -0.013em;
        }
        p {
          margin-top: 31px;
          font-size: 20px;
          line-height: 29px;
          letter-spacing: -0.013em;
          max-width: 814px;
        }
      }
      &-button {
        margin: 40px auto 0;
      }
      &-logo {
        margin-top: 45px;
        display: block;
        line-height: 1;
        max-width: 75%;
        width: auto;
        height: auto;
      }

      @media screen and (max-width: 1260px) {
        &-info {
          h3 {
            font-size: 40px;
            line-height: 48px;
          }
          p {
            margin-top: 16px;
            font-size: 17px;
            line-height: 25px;
          }
        }
      }

      @media screen and (max-width: 1090px) {
        /deep/ br {
          display: none;
        }
        &--full-width {
          grid-column: auto;
        }
      }

      @media screen and (max-width: 1024px) {
        &-link {
          padding-top: 51px;
          &--bottom-padding {
            padding-bottom: 65px;
          }
        }
        &-button {
          margin-top: 28px;
        }
        &-logo {
          margin-top: 30px;
        }
      }

      @media screen and (max-width: 768px) {
        &-link {
          padding: 29px 20px 0;
          &--bottom-padding {
            padding-bottom: 43px;
          }
        }
        &-info {
          h3 {
            font-size: 32px;
          }
        }
      }
    }
  }
</style>
