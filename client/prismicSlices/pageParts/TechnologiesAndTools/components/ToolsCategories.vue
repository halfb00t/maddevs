<template>
  <div
    v-if="categories && categories.length"
    class="tools-categories"
  >
    <button
      v-for="category in categories"
      :key="category.value"
      type="button"
      class="tools-categories__checkbox"
      :class="{
        'tools-categories__checkbox--active': activeCategory === category.value
      }"
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
  @media screen and (max-width: 976px) {
    margin-bottom: 10px;
  }

  &__checkbox {
    border: 0px;
    outline: none;
    background: transparent;
    padding: 0;
    margin-right: 31px;
    color: #938f95;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.02em;
    display: flex;
    align-items: center;
    cursor: pointer;
    @media screen and (max-width: 976px) {
      margin-right: 9px;
      margin-left: 9px;
      font-size: 12px;
      line-height: 18px;
      margin-bottom: 14px;
    }
    @media screen and (max-width: 390px) {
      margin-right: 0;
      margin-left: 7px;
    }
    @media screen and (max-width: 330px) {
      font-size: 10px;
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
        background: #938f95;
        opacity: 0;
        transition: opacity 0.2s;
      }
    }
  }
}
</style>
