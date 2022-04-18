<template>
  <div class="filter">
    <h5 class="filter__title">
      Topics
    </h5>
    <button
      class="filter__title filter__title--btn"
      type="button"
      aria-label="Open filter"
      title="Click to open filter"
      @click="openFilter"
    >
      Topics
      <svg
        ref="arrowSvg"
        class="filter__title-arrow"
        width="11"
        height="7"
        viewBox="0 0 11 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.2638 6.2726C10.1232 6.4132 9.93243 6.49219 9.73356 6.49219C9.53469 6.49219 9.34396 6.4132 9.20331 6.2726L5.49081 2.5601L1.77831 6.2726C1.63686 6.40922 1.44741 6.48481 1.25076 6.4831C1.05412 6.48139 0.866006 6.40252 0.726951 6.26346C0.587894 6.12441 0.509018 5.9363 0.50731 5.73965C0.505601 5.543 0.581197 5.35355 0.717815 5.2121L4.96056 0.969347C5.10121 0.828744 5.29194 0.749757 5.49081 0.749757C5.68968 0.749757 5.88042 0.828744 6.02106 0.969347L10.2638 5.2121C10.4044 5.35274 10.4834 5.54347 10.4834 5.74235C10.4834 5.94122 10.4044 6.13195 10.2638 6.2726Z"
          fill="#111111"
        />
      </svg>
    </button>
    <div class="filter__box">
      <ul
        ref="filterList"
        class="filter__list"
      >
        <li class="filter__list-item">
          <input
            id="allEbooks"
            type="radio"
            name="Tag"
            class="filter__list-item-radio"
            value="Ebooks"
            :checked="ebookCategory === 'Ebooks'"
            @change="onChangeCategoryHandler"
          >
          <label
            for="allEbooks"
            class="filter__list-item-label"
          >
            All ebooks
          </label>
        </li>
        <li
          v-for="(item, i) in categories"
          :key="item.category + i"
          class="filter__list-item"
        >
          <input
            :id="item.category"
            type="radio"
            name="Tag"
            class="filter__list-item-radio"
            :value="item.category"
            :checked="ebookCategory === item.category"
            @change="onChangeCategoryHandler"
          >
          <label
            :for="item.category"
            class="filter__list-item-label"
          >
            {{ item.category }}
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EbookFilter',
  props: {
    categories: {
      type: Array,
      default: () => [],
    },

    ebookCategory: {
      type: String,
      default: 'Ebooks',
    },
  },

  methods: {
    onChangeCategoryHandler(e) {
      this.$emit('onChangeCategory', e.target.value)
    },

    openFilter() {
      this.$refs.filterList.classList.toggle('filter__list--active')
      this.$refs.arrowSvg.classList.toggle('filter__title-arrow--active')
    },
  },
}
</script>
<style lang="scss" scoped>
%title {
  @include font('Poppins', 22.78px, 600);
  line-height: 130%;
  letter-spacing: -1px;
  color: $text-color--chinese-black;
  margin-bottom: 20px;
}

.filter {
  width: 20%;
  position: sticky;
  top: 100px;
  align-self: flex-start;

  @media screen and (max-width: 580px) {
    position: static;
    top: unset;
    padding-top: 0;
    width: 100%;
    margin-bottom: 32px;
  }

  &__title {
    @extend %title;
    @media screen and (max-width: 768px) {
      font-size: 18px;
      line-height: 22px;
      letter-spacing: -0.4px;
    }

    @media screen and (max-width: 580px) {
      display: none;
    }

    &--btn {
      @extend %title;
      display: none;
      @media screen and (max-width: 580px) {
        display: inline-flex;
        align-items: center;
        background: transparent;
        border: none;
        padding: 0;
        cursor: pointer;
      }
    }

    &-arrow {
      margin-left: 15px;
      transition: 0.2s ease-in-out;
      &--active {
        transform: rotate(180deg)
      }
    }
  }
  &__list {
    @media screen and (max-width: 580px) {
      max-height: 0;
      overflow: hidden;
      transition: 0.5s ease-in-out;
    }

    &--active {
      height: auto;
      max-height: 900px;
    }

    &-item {
      margin-bottom: 20px;
    }
    &-item-label {
      transition: 0.3s ease-in-out;
      @include font('Inter', 16px, 400);
      line-height: 24px;
      letter-spacing: -0.4px;
      color: $text-color--grey-pale;
      cursor: pointer;
    }
    &-item-radio {
      display: none;
      visibility: hidden;
      &:checked + .filter__list-item-label {
        color: $text-color--red;
      }
    }
  }
}
</style>
