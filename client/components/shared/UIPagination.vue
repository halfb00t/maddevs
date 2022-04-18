<template>
  <div class="pagination">
    <ul
      class="pagination__list"
      :class="{'pagination__list--few-items': totalPages <= 3}"
    >
      <li class="pagination__list-item">
        <button
          class="pagination__list-arrow-btn"
          :disabled="isInFirstPage"
          :title="isInFirstPage && 'No pages'"
          aria-label="Go to previous page"
          @click="onClickPreviousPage"
        >
          &lt;--- Prev
        </button>
      </li>
      <li
        v-for="page in pages"
        :key="page.name"
      >
        <button
          type="button"
          :disabled="page.isDisabled"
          :title="page.isDisabled && 'This is current page'"
          class="pagination__list-pages-btn"
          :class="{ 'pagination__list-pages-btn--active': isPageActive(page.name) }"
          :aria-label="`Go to page number ${page.name}`"
          @click="onClickPage(page.name)"
        >
          {{ page.name }}
        </button>
      </li>
      <li v-if="totalPages > currentPage + 1">
        <span
          class="pagination__list-pages-btn"
          style="cursor: default;"
        >
          ...
        </span>
      </li>
      <li v-if="totalPages > currentPage + 1">
        <button
          type="button"
          :disabled="currentPage === totalPages"
          class="pagination__list-pages-btn"
          :class="{ 'pagination__list-pages-btn--active': isPageActive(totalPages) }"
          :aria-label="`Go to page number ${totalPages}`"
          @click="onClickPage(totalPages)"
        >
          {{ totalPages }}
        </button>
      </li>
      <li class="pagination__list-item">
        <button
          class="pagination__list-arrow-btn"
          :disabled="isInLastPage"
          :title="isInLastPage && 'No pages'"
          aria-label="Go to next page"
          @click="onClickNextPage"
        >
          Next ---&gt;
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'UIPagination',

  props: {
    maxVisibleButtons: {
      type: Number,
      default: 3,
    },

    totalPages: {
      type: Number,
      required: true,
    },

    perPage: {
      type: Number,
      default: 6,
    },

    currentPage: {
      type: Number,
      required: true,
    },
  },

  computed: {
    startPage() {
      if (this.currentPage === 1) return 1
      if (this.currentPage === this.totalPages && this.totalPages >= this.maxVisibleButtons) {
        return this.totalPages - this.maxVisibleButtons + 1
      }
      return this.currentPage - 1
    },

    pages() {
      const range = []

      if (this.totalPages >= this.maxVisibleButtons) {
        for (let i = this.startPage;
          i <= Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
          i += 1) {
          range.push({
            name: i,
            isDisabled: i === this.currentPage,
          })
        }
      } else {
        for (let i = this.startPage; i <= this.totalPages && i > 0; i += 1) {
          range.push({
            name: i,
            isDisabled: i === this.currentPage,
          })
        }
      }
      return range
    },

    isInFirstPage() {
      return this.currentPage === 1
    },

    isInLastPage() {
      return this.currentPage === this.totalPages
    },
  },

  methods: {
    onClickPreviousPage() {
      this.$emit('pageChanged', this.currentPage - 1)
    },

    onClickPage(page) {
      this.$emit('pageChanged', page)
    },

    onClickNextPage() {
      this.$emit('pageChanged', this.currentPage + 1)
    },

    isPageActive(page) {
      return this.currentPage === page
    },
  },
}
</script>
<style lang="scss" scoped>
%btn {
  background-color: transparent;
  border: none;
  @include font('Inter', 16px, 400);
  line-height: 27px;
  cursor: pointer;
}

.pagination {
  max-width: 311px;
  margin: 0 auto;
  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &--few-items {
      justify-content: space-evenly;
    }
  }
  &__list-arrow-btn {
    @extend %btn;
    color: $text-color--red;
    &:disabled {
      cursor: not-allowed;
      color: $text-color--grey-20-percent;
    }
  }

  &__list-pages-btn {
    @extend %btn;
    color: $text-color--grey-20-percent;
    outline: 5px solid transparent !important;
    &--active {
      cursor: not-allowed;
      color: $text-color--red;
    }
  }
}
</style>
