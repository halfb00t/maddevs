<template>
  <div>
    <div class="main-strapi-component">
      <div
        v-for="item in items"
        :key="item.getComponentName()"
      >
        <component
          :is="item.getComponentName()"
          :data="item"
        /><!--v-bind is not working-->
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from '@vue/composition-api'

import { Strapi } from '@/services/strapi'
import TextParagraph from '@/components/strapi/text/TextParagraph'
import TextTitle from '@/components/strapi/text/TextTitle'
import Spacer from '@/components/strapi/spacer/Spacer'

export default defineComponent({
  name: 'PageContent',
  components: {
    TextParagraph,
    TextTitle,
    Spacer,
  },

  props: {
    uid: {
      type: String,
      default: '',
    },
  },

  setup(props) {
    const items = ref([])
    onMounted(async () => {
      const strapi = new Strapi() // todo to boot
      items.value = await strapi.getPageContent(props.uid)
    })
    return { items }
  },
})
</script>

<style scoped>
.main-strapi-component {
  margin-top: 150px;
  color: red;
}
</style>
