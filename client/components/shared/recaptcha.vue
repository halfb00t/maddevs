<template>
  <recaptcha
    @error="onError"
    @success="onSuccess"
    @expired="onExpired"
  />
</template>

<script>
export default {
  name: 'ReCaptcha',

  data() {
    return {
      recaptchaError: true,
      token: null,
    }
  },
}
</script>
