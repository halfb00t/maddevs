<template>
  <div
    class="card-grid-with-icon"
    :class="colorThemeClass"
  >
    <div class="container">
      <ul class="card-grid-with-icon__content">
        <li
          v-for="item in items"
          :key="item.name"
          class="card-item"
        >
          <Component
            :is="item.link.url ? 'a' : 'div'"
            :href="item.link.url ? item.link.url : null"
            :target="item.link.url ? '_blank' : null"
            class="card-item__wrapper"
          >
            <div class="card-item__content">
              <img
                :src="item.icon.url"
                :alt="item.icon.alt"
                class="card-item__logo"
              >
              <h3
                class="card-item__title"
                v-html="item.title"
              />
              <p class="card-item__description">
                {{ item.description }}
              </p>
            </div>
            <UIArrowButton v-if="displayButtons" />
          </Component>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import UIArrowButton from '@/components/shared/UIArrowButton'

export default {
  name: 'CardGridWithIcon',
  components: {
    UIArrowButton,
  },

  props: {
    colorTheme: {
      type: String,
      default: 'white',
    },

    displayButtons: {
      type: Boolean,
      default: false,
    },

    items: {
      type: Array,
      default: () => ([]),
    },
  },

  computed: {
    colorThemeClass() {
      if (this.colorTheme === 'black') return 'card-grid-with-icon--black-theme'
      return 'card-grid-with-icon--white-theme'
    },
  },
}
</script>

<style lang="scss" scoped>
.card-grid-with-icon {
  &--white-theme {
    .card-item {
      background-color: $bgcolor--silver;
      &:hover {
        .ui-arrow-button {
          background-color: $text-color--black-oil;
          color: $text-color--white-primary;
        }
      }
      &__wrapper {
        color: $text-color--black-oil;
      }
      &__description {
        color: $text-color--quote-box;
      }
      .ui-arrow-button {
        border-color: $text-color--black-oil;
        color: $text-color--black-oil;
      }
    }
  }

  &--black-theme {
    .card-item {
      background-color: $bgcolor--black-pale;
      &:hover {
        .ui-arrow-button {
          background-color: $text-color--white-primary;
          color: $text-color--black-oil;
        }
      }
      &__wrapper {
        color: $text-color--white-primary;
      }
      &__description {
        color: $text-color--silver;
      }
      .ui-arrow-button {
        border-color: $text-color--white-primary;
        color: $text-color--white-primary;
      }
    }
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    @media screen and (max-width: 1260px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
}

.card-item {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  border-radius: 4px;
  &__wrapper {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 67px 60px;
    @media screen and (max-width: 768px) {
      padding: 67px 45px;
    }
  }
  &__logo {
    display: block;
    width: 64px;
    height: auto;
  }
  &__title {
    @include font('Inter', 28px, 600);
    margin-top: 27px;
    line-height: 32px;
    letter-spacing: -0.013em;
  }
  &__description {
    @include font('Inter', 17px, 400);
    margin-top: 21px;
    line-height: 25px;
    letter-spacing: -0.013em;
  }
  .ui-arrow-button {
    margin-top: 50px;
  }
}
</style>
