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
          class="nav-link-slice__link nav-link-slice__link-active"
          :class="leftButton ? 'nav-link-slice__link-not-active' : ''"
          @click="clickPreviewButton"
          v-html="prevButtonText"
        />
        <Component
          :is="'p'"
          target="_self"
          class="nav-link-slice__link nav-link-slice__link-active"
          :class="rightButton ? 'nav-link-slice__link-not-active' : ''"
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
    right: {
      type: Boolean,
      required: true,
    },

    left: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      prevButtonText: 'Previous',
      nextButtonText: 'Next',
    }
  },

  computed: {
    rightButton() {
      return this.right
    },

    leftButton() {
      return this.left
    },
  },

  methods: {
    clickNextButton() {
      this.$emit('next')
    },

    clickPreviewButton() {
      this.$emit('preview')
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

    &-active {
      color: $text-color--black-oil;
      &:first-child {
        border-right: 1px solid $text-color--black-lighter;
      }
    }

    &-not-active {
      color: $text-color--grey-20-percent !important;
      &:hover {
        pointer-events: none;
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
