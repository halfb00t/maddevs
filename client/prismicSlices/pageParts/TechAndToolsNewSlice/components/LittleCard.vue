<template>
  <div
    class="technologies__little-card"
    data-testid="tech-little-card"
  >
    <img
      v-lazy-load
      :data-src="icon.url && icon.url"
      :alt="icon.alt || 'Icon'"
      width="45"
      height="45"
      class="technologies__little-card-icon"
    >
    <h3
      class="technologies__little-card-title"
    >
      {{ title }}
    </h3>
  </div>
</template>
<script>
export default {
  name: 'LittleCard',

  props: {
    icon: {
      type: Object,
      default: () => ({}),
    },

    title: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
.technologies__little-card {
  flex: 1 1 8%;
  background: $bgcolor--black-pale;
  box-sizing: border-box;
  padding: 30px;
  border-radius: 9px;
  transition: 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &-icon {
    width: 100%;
    height: auto;
    min-width: 30px;
    max-width: 45px;
    transition: 0.2s ease-in-out;
    opacity: 1;
  }

  &-title {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    text-align: center;
    position: absolute;
    color: $text-color--white-primary;
    @include font('Inter', 13px, 400);
    line-height: 120%;
    opacity: 0;
    transition: 0.2s ease-in-out;
  }

  @media screen and (min-width: 700px) {
    &:hover {
      background: transparent;
      box-shadow: 0 0 1px 1px #36383A;
    }

    &:hover .technologies__little-card-icon {
      opacity: 0;
    }

    &:hover .technologies__little-card-title {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1214px) {
    min-width: 106px;
  }

  @media screen and (max-width: 400px) {
    padding: 10px;
    width: 50px;
    height: 50px;
    min-width: auto;
    &-icon {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
