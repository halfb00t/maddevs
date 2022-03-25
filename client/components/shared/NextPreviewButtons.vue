<template>
  <section :style="{ backgroundColor: '#f4f4f4' }">
    <div
      data-testid="nav-link__container"
      class="container"
    >
      <div
        class="nav-link-slice__links"
        :class="[
          `nav-link-slice__links-center`,
        ]"
      >
        <Component
          :is="'p'"
          target="_self"
          class="nav-link-slice__link nav-link-slice__link-white"
          @click="clickPreviewButton"
          v-html="prevButtonText"
        />
        <Component
          :is="'p'"
          target="_self"
          class="nav-link-slice__link nav-link-slice__link-white"
          @click="clickNextButton"
          v-html="nextButtonText"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NextPreviewButtons',

  props: {
  },

  data() {
    return {
      prevButtonText: 'Previous',
      nextButtonText: 'Next',
      disabledLink: 'none',
    }
  },

  methods: {
    clickNextButton() {
      this.$emit('next', 3)
    },

    clickPreviewButton() {
      this.$emit('preview', 3)
    },
  },
}
</script>

<style lang="scss" scoped>
.nav-link-slice {
  &__links {
    display: flex;
    justify-content: center;

    // Positions
    &-left {
      justify-content: flex-start;
    }

    &-center {
      justify-content: center;
    }

    &-right {
      justify-content: flex-end;
    }

    p {
      cursor: default;
      color: $text-color--grey-opacity-20-percent;
    }

    a {
      transition: all .15s ease;
      &:hover {
        color: $text-color--red;
      }
    }
  }

  &__link {
    // prevent text selection after double click
    user-select: none; /* standard syntax */
    -webkit-user-select: none; /* webkit (safari, chrome) browsers */
    -moz-user-select: none; /* mozilla browsers */
    -khtml-user-select: none; /* webkit (konqueror) browsers */
    -ms-user-select: none; /* IE10+ */

    @include font("Inter", 16px, 500);
    line-height: 24px;
    text-align: center;
    position: relative;

    &-white {
      color: $text-color--black-lighter;
      &:first-child {
        border-right: 1px solid $text-color--black-lighter;
      }
    }

    &:hover {
      color: $text-color--venetian-red;
      cursor: pointer;
    }

    &:before {
      content: "";
      position: absolute;
      top: 8px;
      width: 8px;
      height: 8px;
      border-width: 0 0 1px 1px;
      border-style: solid;
    }

    &:after {
      content: "";
      position: absolute;
      top: 12px;
      height: 1px;
      width: 11px;
      box-shadow: inset 0 0 0 32px;
      transform-origin: right top;
    }

    &:first-child {
      padding: 0 40px 0 30px;
      &:before {
        left: 0;
        transform: rotate(45deg);
      }
      &:after {
        left: -1px;
      }
    }

    &:last-child {
      padding: 0 30px 0 40px;
      &:before {
        right: 0;
        transform: rotate(230deg);
      }
      &:after {
        right: -1px;
      }
    }
  }

  @media screen and (max-width: 450px) {
    &__links {
      justify-content: space-between;
    }
    &__link {
      &:first-child {
        padding: 0 10px 0 30px;
        border: none;
      }
      &:last-child {
        padding: 0 30px 0 10px;
      }
    }
  }
}
</style>
