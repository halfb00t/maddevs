<template>
  <div class="radio-button-list">
    <p
      v-if="showLabel"
      class="radio-button-list__field-name field-name"
      :class="required ? 'required' : ''"
      data-testid="test-radio-label"
    >
      {{ label }}
    </p>
    <div class="radio-button-list__container">
      <div
        v-for="(inputLabel, i) in radioInputLabels"
        :key="`${name}-${id}-${i}`"
        data-testid="test-radio-buttons"
      >
        <label
          class="radio-button-list__form-checkbox-label form-checkbox-label"
          :data-testid="`test-radio-label-${i}`"
        >
          <div
            class="radio-button-list__label-text"
            :class="{ checked: inputLabel === picked }"
            v-html="inputLabel"
          />
          <input
            v-model="picked"
            type="radio"
            name="radioBtn"
            class="form-checkbox-input"
            :value="inputLabel"
          >
          <div class="checkmark" />
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RadioButtons',

  props: {
    name: {
      type: String,
      default: 'name',
    },

    id: {
      type: String,
      default: 'input-id',
    },

    showLabel: {
      type: Boolean,
      default: true,
    },

    label: {
      type: String,
      default: 'Label',
    },

    radioInputLabels: {
      type: Array,
      default: () => ['Label One', 'Label Two'],
    },

    defaultChoice: {
      type: Boolean,
      default: false,
    },

    required: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      picked: this.defaultPick(),
    }
  },

  watch: {
    picked() {
      this.$emit('input', this.picked)
    },

    immediate: true,
  },

  methods: {
    defaultPick() {
      return this.defaultChoice ? this.radioInputLabels[0] : null
    },
  },
}
</script>

<style lang="scss" scoped>
.radio-button-list {
  margin-bottom: 13px;

  &__container {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: flex-start;
    & > div {
      margin-bottom: 10px;
      margin-right: 20px;
      &:last-of-type {
        margin-right: 0;
      }
    }
  }

  &__form-checkbox-label {
    font-size: 16px;
    margin-bottom: 0;
  }

  &__label-text {
    white-space: normal;
  }

  &__field-name {
    margin-bottom: 10px;
  }
}
.checked {
  color: $input-color--grey !important;

  div {
    color: $input-color--grey !important;
  }
}
</style>
