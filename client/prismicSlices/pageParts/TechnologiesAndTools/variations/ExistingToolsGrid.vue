<template>
  <section
    v-if="tools && tools.length"
    class="tools-slice"
  >
    <div
      class="container"
      :data-aos="animation"
      data-testid="tools-slice-container"
    >
      <ToolsCategories
        :categories="categories"
        :active-category="activeCategory"
        @selectCategory="onSelectCategory"
      />
      <ToolsGrid
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
    }
  },

  computed: {
    categories() {
      if (
        !toolsData[this.selectedTools]
        && !toolsData[this.selectedTools].categories
      ) return []
      return toolsData[this.selectedTools].categories
    },

    tools() {
      if (
        !toolsData[this.selectedTools]
        && !toolsData[this.selectedTools].tools
      ) return []
      return toolsData[this.selectedTools].tools
    },
  },

  methods: {
    onSelectCategory(value) {
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
