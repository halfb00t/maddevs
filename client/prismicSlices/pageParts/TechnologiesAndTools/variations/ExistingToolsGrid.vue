<template>
  <section
    v-if="tools && tools.length"
    class="tools-slice"
  >
    <div
      class="container"
      :class="{ 'aos-animate': alreadyAnimated }"
      :data-aos="animation"
      data-testid="tools-slice-container"
    >
      <ToolsCategories
        v-if="categories && categories.length"
        :categories="categories"
        :active-category="activeCategory"
        @selectCategory="onSelectCategory"
      />
      <ToolsGrid
        v-if="tools && tools.length"
        :tools="tools"
        :active-category="activeCategory"
      />
    </div>
  </section>
</template>

<script>
import ToolsCategories from '../components/ToolsCategories'
import ToolsGrid from '../components/ToolsGrid'
import { toolsData } from '../data/tools'

export default {
  name: 'ExistingToolsGrid',
  components: {
    ToolsCategories,
    ToolsGrid,
  },

  props: {
    animation: {
      type: String,
      default: null,
    },

    selectedTools: {
      type: String,
      default: 'frontend',
    },
  },

  data() {
    return {
      activeCategory: null,
      alreadyAnimated: false, // needed to prevent the aos animation repeating on DOM changes
    }
  },

  computed: {
    categories() {
      if (!toolsData[this.selectedTools]) return []
      return toolsData[this.selectedTools].categories
    },

    tools() {
      if (!toolsData[this.selectedTools]) return []
      return toolsData[this.selectedTools].tools
    },
  },

  methods: {
    onSelectCategory(value) {
      this.alreadyAnimated = true
      if (this.activeCategory === value) {
        this.activeCategory = null
        return null
      }
      this.activeCategory = value
      return null
    },
  },
}
</script>
