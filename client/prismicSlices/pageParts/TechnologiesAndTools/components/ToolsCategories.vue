<template>
  <div class="tools-categories">
    <button
      v-for="category in categories"
      :key="category.value"
      type="button"
      class="tools-categories__checkbox"
      :class="{ 'tools-categories__checkbox--active': activeCategory === category.value }"
      @click="setActiveCategory(category.value)"
    >
      <div
        class="tools-categories__checkbox-icon"
        :style="{ backgroundColor: category.color }"
      />
      {{ category.label }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'ToolsCategories',
  props: {
    activeCategory: {
      type: String,
      default: null,
    },

    categories: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    setActiveCategory(value) {
      this.$emit('selectCategory', value)
    },
  },
}
</script>

<style lang="scss" scoped>
.tools-categories {
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 43px;
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }

  &__checkbox {
    @include font('Inter', 14px, 400);
    line-height: 22px;
    letter-spacing: -0.02em;
    border: 0px;
    outline: none;
    background: transparent;
    padding: 0;
    color: $text-color--spanish-gray;
    margin-right: 31px;
    display: flex;
    align-items: center;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      font-size: 12px;
      line-height: 16px;
      margin-right: 18px;
    }

    &:last-child {
      margin-right: 0;
    }

    &--active {
      /deep/ .tools-categories__checkbox-icon::after {
        opacity: 1;
      }
    }

    &-icon {
      position: relative;
      display: inline-block;
      width: 16px;
      min-width: 16px;
      height: 16px;
      border-radius: 2px;
      margin-right: 8px;
      @media screen and (max-width: 768px) {
        margin-right: 4px;
      }

      &::after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 8px;
        min-width: 8px;
        height: 8px;
        border-radius: 50%;
        background: $bgcolor--spanish-gray;
        opacity: 0;
        transition: opacity 0.2s;
      }
    }
  }
}
</style>
