<template>
  <ListNumberedBox>
    <PrismicRichText
      v-if="hasListIntroduction"
      :field="slice.primary.list_introduction"
      :html-serializer="htmlSerializer"
    />
    <ListNumberedItemBox
      v-for="(item, index) in slice.items"
      :key="index"
    >
      {{ $prismic.asText(item.list_item) }}
    </ListNumberedItemBox>
  </ListNumberedBox>
</template>

<script>
import ListNumberedBox from '@/components/Cases/shared/ListNumberedBox'
import ListNumberedItemBox from '@/components/Cases/shared/ListNumberedItemBox'

export default {
  name: 'OrderedList',
  components: {
    ListNumberedItemBox,
    ListNumberedBox,
  },

  props: {
    slice: {
      type: Object,
      required: true,
    },

    htmlSerializer: {
      type: Function,
      default: () => null,
    },
  },

  computed: {
    hasListIntroduction() {
      return this.slice.primary.list_introduction && this.slice.primary.list_introduction.length !== 0
    },
  },
}
</script>

<style lang="scss" scoped>
.case-list_numbered {
  margin: 35px 0;
}
</style>
