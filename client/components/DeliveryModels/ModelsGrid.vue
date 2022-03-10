<template>
  <div class="container models-grid_container">
    <div class="models-grid">
      <LazyHydrate
        v-for="(modelKey, i) in Object.keys(models)"
        :key="modelKey"
        when-visible
      >
        <ModelCard
          :full="i === 2 || i === 3"
          :uid="modelKey"
          v-bind="models[modelKey]"
        />
      </LazyHydrate>
    </div>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import { deliveryModels } from '@/data/deliveryModels'

export default {
  name: 'ModelsGrid',
  components: {
    LazyHydrate,
    ModelCard: () => import('@/components/DeliveryModels/shared/ModelCard'),
  },

  data() {
    return {
      models: deliveryModels,
    }
  },
}
</script>

<style lang="scss" scoped>
.models-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 48px;

  @media screen and (max-width: 1200px) {
    grid-gap: 23px 29px;
  }

  @media screen and (max-width: 1024px) {
    &_container {
      max-width: 100%;
      padding: 0 20px;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 29px;
    &_container {
      max-width: 100%;
      padding: 0 16px;
    }
  }
}
</style>
