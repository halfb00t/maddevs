<template>
  <div class="form-checkbox">
    <label
      :for="`sent_ebook_news-${id}`"
      class="form-checkbox-label required"
    >I agree to receive the monthly newsletter from Mad Devs
      <input
        :id="`sent_ebook_news-${id}`"
        v-model="isAgree"
        class="form-checkbox-input"
        data-testid="user-agreement-checkbox-input"
        type="checkbox"
        name="User agreement"
        @change="handleChange($event)"
      >
      <div class="checkmark" />
    </label>
  </div>
</template>

<script>
export default {
  name: 'UIFormCheckbox',

  props: {
    id: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      isAgree: true,
    }
  },

  methods: {
    handleChange() {
      this.$emit('change', { isAgree: this.isAgree })
    },

    reset() {
      this.isAgree = true
    },
  },
}
</script>
