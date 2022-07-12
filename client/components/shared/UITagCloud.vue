<template>
  <div
    v-if="tagsCategories.length"
    class="posts-filter"
  >
    <ul class="posts-filter__list">
      <li
        v-for="(tag, i) in tagsCategories"
        :key="`posts-filter__item-${i}`"
        class="posts-filter__item-wrapper"
      >
        <div class="posts-filter__item">
          <input
            :id="tag.tagName"
            type="checkbox"
            name="Tag"
            data-testid="test-post-input"
            :value="tag.tagName"
            :checked="activeTags.includes(tag.tagName)"
            @change="handleFilterChange"
          >
          <label :for="tag.tagName">{{ tag.tagName }}</label>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'UITagCloud',

  computed: {
    ...mapGetters([
      'tags',
      'activeTags',
    ]),

    tagsCategories() {
      const { tags } = this
      if (Array.isArray(tags) && tags.length) return tags
      return []
    },
  },

  mounted() {
    this.getTagsFromPrismic()
  },

  destroyed() {
    this.clearAllData()
  },

  methods: {
    ...mapActions([
      'changeActiveTags',
      'deleteActiveTag',
      'getTagsFromPrismic',
      'clearAllData',
    ]),

    handleFilterChange(e) {
      if (this.activeTags.includes(e.currentTarget.value)) {
        return this.deleteActiveTag(e.currentTarget.value)
      }
      return this.changeActiveTags(e.currentTarget.value)
    },
  },
}
</script>
<style lang="scss" scoped>
.posts-filter {
  min-width: 150px;
  margin-bottom: 50px;

  &__list {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 12px;
  }

  &__item {
    &-wrapper {
      &:last-child {
        margin-right: 0;
      }
    }

    input[type="checkbox"] {
      display: none;
    }

    label {
      @include font('Inter', 12px, 400);
      cursor: pointer;
      box-shadow: none;
      display: flex;
      align-items: flex-end;
      padding: 10px 16px;
      color: $text-color--black;
      background-color: $bgcolor--silver;
      border: 1px solid $border-color--grey-20-percent;
      line-height: 18px;
      border-radius: 20px;
      transition: 0.2s;
    }

    input[type="checkbox"]:checked + label {
      border-color: $border-color--red;
      color: $text-color--red;
    }
  }

  @media only screen and (min-width: 1024px) {
    &__item label:hover {
      border-color: $border-color--red;
      color: $text-color--red;
    }
  }

  @media only screen and (min-width: 991px) {
    margin-bottom: 35px;
  }

  @media screen and (max-width: 460px) {
    &__list {
      justify-content: flex-start;
    }
  }
}
</style>
