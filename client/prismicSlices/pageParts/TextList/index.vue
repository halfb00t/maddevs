<template>
  <section class="section">
    <div class="container">
      <h4
        v-if="title"
        class="title"
      >
        {{ title }}
      </h4>
      <ul
        v-if="slice.variation === 'default-slice'"
        data-testid="default-list"
        class="list"
      >
        <li
          v-for="(item, i) of items"
          :key="i"
          class="list__item"
        >
          {{ item.listText }}
        </li>
      </ul>
      <ul
        v-else-if="slice.variation === 'twoColumnsList'"
        data-testid="two-columns"
        class="list_two_columns"
      >
        <li
          v-for="(item, i) of items"
          :key="i"
          class="list_two_columns__item"
        >
          {{ item.listText }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TextList',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },

  data() {
    return {
      items: this.slice?.items,
      title: this.slice?.primary?.title,
    }
  },
}
</script>

<style lang="scss" scoped>
.section {
  background: #fff;
  color: #111;
}

.container {
  max-width: 817px;
}

.list,
.list_two_columns {
  list-style: disc inside;
  &__item {
    padding: 16px 16px 16px 26px;
    margin: 0 0 16px 0;
    border-radius: 8px;
    background-color: #f4f4f4;
    @include font('Inter', 17px, 400);
    line-height: 166%;
    letter-spacing: -0.035em;
    &:last-child {
      margin-bottom: 0;
    }
   }
}

.list_two_columns {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  &__item {
    width: 42%;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    &:last-child {
      margin-bottom: 16px;
    }
  }
}
a {
  color: #111;
}
.title {
  @include font('Inter', 28px, 700);
  line-height: 32px;
  letter-spacing: -1px;
  color: #232323;
  margin-bottom: 24px;
  @media screen and (max-width: 768px) {
    font-size: 26px;
    font-weight: 600;
    line-height: 130%;
    letter-spacing: -0.04em;
  }
}
</style>
