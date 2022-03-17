<template>
  <div
    class="key-metrics-slice__content"
    :class="`key-metrics-slice__content--${colorThemeOption}-theme`"
  >
    <h2 class="key-metrics-slice__title">
      Mad Devs’ <br> key metrics
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
  name: 'ThirdVariation',
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

  data() {
    return {
      colorThemeOption: this.colorTheme === 'black' ? 'black' : 'white',
    }
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
        background-color: $bgcolor--black-pale;
        &__title,
        &__subtitle {
          color: $text-color--white-primary;
        }
      }
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1340px) {
      flex-direction: column;
      justify-content: flex-start;
    }
  }

  &__title {
    @include font('Poppins', 60px, 700);
    line-height: 64px;
    letter-spacing: -2.6px;
    margin-right: 45px;
    white-space: nowrap;
    @media screen and (max-width: 1340px) {
      margin-right: 0;
      margin-bottom: 10px;
      white-space: normal;
      br {
        display: none;
      }
    }
    @media screen and (max-width: 1024px) {
      font-size: 40px;
    }
  }

  &__grid {
    flex: 1;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

.key-metric {
  border-radius: 4px;
  padding: 22px 27px 30px;
  word-break: break-word;
  @media screen and (max-width: 1024px) {
    padding: 17px 22px 30px;
  }

  &__title {
    @include font('Inter', 53px, 700);
    line-height: 56px;
    letter-spacing: -0.013em;
    @media screen and (max-width: 1024px) {
      font-size: 40px;
      line-height: 56px;
    }
  }

  &__subtitle {
    @include font('Inter', 17px, 400);
    line-height: 24px;
    letter-spacing: -0.013em;
  }
}
</style>
