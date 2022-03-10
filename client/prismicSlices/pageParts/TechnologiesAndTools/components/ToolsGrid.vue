<template>
  <div class="tools-grid">
    <div
      v-for="(tool, i) in tools"
      :key="`${tool.label}-${i}`"
      :title="tool.label"
      class="tools-grid__item"
      :class="[
        `${tool.category}`,
        `${(activeCategory && tool.category === activeCategory) ? 'tools-grid__item--active' : ''}`,
        `${(activeCategory && tool.category !== activeCategory) ? 'tools-grid__item--inactive' : ''}`,
      ]"
      :style="{ backgroundColor: tool.color }"
    >
      <img
        v-lazy-load
        :data-src="$getMediaFromS3(`/images/tech-stack/${tool.icon}.svg`)"
        width="26"
        height="26"
        alt="Icon"
        class="tools-grid__item-icon"
      >
      <span class="tools-grid__item-label">
        {{ tool.label }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToolsGrid',

  props: {
    activeCategory: {
      type: String,
      default: null,
    },

    tools: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.tools-grid {
  width: calc(100% + 1px);
  margin-left: -1px;
  margin-top: -1px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    align-items: flex-start;
  }

  &__item {
    margin-left: 1px;
    margin-top: 1px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 102px;
    height: 90px;
    transition: opacity 0.2s linear;
    @media screen and (max-width: 768px) {
      width: 51px;
      height: 54px;
    }
    &,
    &--active {
      opacity: 1;
    }
    &--inactive {
      opacity: 0.5;
    }
    &-icon {
      display: block;
      width: 26px;
      min-width: 26px;
      height: 26px;
      @media screen and (max-width: 768px) {
        width: 20px;
        min-width: 20px;
        height: 20px;
      }
    }
    &-label {
      @include font('Inter', 12px, 400);
      display: block;
      white-space: nowrap;
      line-height: 14px;
      color: $text-color--grey-pale;
      margin-top: 11px;
      width: 82%;
      text-overflow: ellipsis;
      overflow: hidden;
      text-align: center;
      @media screen and (max-width: 768px) {
        font-size: 8px;
      }
    }
  }
}
</style>
