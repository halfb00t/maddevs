<template>
  <div
    class="key-metrics-slice__content"
    :class="`key-metrics-slice__content--${colorThemeOption}-theme`"
  >
    <h2 class="key-metrics-slice__title">
      Mad Devs’ key metrics
    </h2>
    <div class="key-metrics-slice__grid">
      <div
        v-for="metric in metrics"
        :key="metric.title"
        class="key-metric"
        data-testid="key-metric"
      >
        <h3 class="key-metric__title">
          {{ metric.title }}
        </h3>
        <p class="key-metric__subtitle">
          {{ metric.subtitle }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SecondVariation',
  props: {
    colorTheme: {
      type: String,
      default: 'white',
    },

    metrics: {
      type: Array,
      required: true,
      default: () => ([]),
    },
  },

  computed: {
    colorThemeOption() {
      if (this.colorTheme === 'black') return 'black'
      return 'white'
    },
  },
}
</script>

<style lang="scss" scoped>
.key-metrics-slice {
  &__content {
    &--white-theme {
      .key-metrics-slice__title {
        color: $text-color--black-oil;
      }
      /deep/ .key-metric {
        background-color: $bgcolor--silver;
        &__title,
        &__subtitle {
          color: $text-color--black-oil;
        }
      }
    }

    &--black-theme {
      .key-metrics-slice__title {
        color: $text-color--black-oil;
      }
      /deep/ .key-metric {
        background-color: $bgcolor--black-oil;
        &__title {
          color: $text-color--white-primary;
        }
        &__subtitle {
          color: $text-color--silver;
        }
      }
    }
  }

  &__title {
    @include font('Poppins', 42px, 700);
    line-height: 46px;
    letter-spacing: -1.3px;
    margin-bottom: 28px;
    text-align: center;
    @media screen and (max-width: 768px) {
      text-align: left;
    }
  }

  &__grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
}

.key-metric {
  border-radius: 4px;
  padding: 24px 32px;

  &__title {
    @include font('Inter', 28px, 700);
    line-height: 32px;
    letter-spacing: -1px;
  }

  &__subtitle {
    @include font('Inter', 16px, 400);
    line-height: 24px;
    letter-spacing: -0.4px;
  }
}
</style>
