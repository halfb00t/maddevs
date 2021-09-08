<template>
  <section
    id="meet-our-experts"
    class="meet-our-experts"
  >
    <div class="container">
      <div
        class="meet-our-experts__experts-list"
        :data-aos="animation"
      >
        <div
          v-for="expert in slice.items"
          :key="expert.name"
          class="meet-our-experts__expert-item"
        >
          <img
            :src="expert.image.url"
            :alt="expert.image.alt"
            width="295"
            height="401"
            class="meet-our-experts__expert-item-img"
          >
          <div class="meet-our-experts__expert-bottom_content">
            <div class="meet-our-experts__expert-info">
              <div class="meet-our-experts__expert-name">
                {{ expert.name }}
              </div>
              <div class="meet-our-experts__expert-position">
                {{ expert.position }}
              </div>
            </div>
          </div>
          <img
            :src="require(`@/assets/img/Home/svg/team/linkedin.svg`)"
            width="24"
            height="24"
            alt="Linkedin"
            class="meet-our-experts__expert-linkedin-link"
          >
          <a
            :href="expert.linkedin.url"
            rel="nofollow"
            target="_blank"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

export default {
  name: 'TeamCards',

  mixins: [animateOnScrollMixin({
    offset: 200,
    delay: 50,
    anchorPlacement: 'top-center',
    duration: 1000,
    once: true,
  })],

  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },

  data() {
    return {
      animation: this.slice.primary.animation,
    }
  },
}
</script>

<style lang="scss" scoped>
.meet-our-experts {
  background-color: $bgcolor--white-primary;

  &__main-title {
    @include h3-title;
    text-align: center;
    color: $text-color--black-lighter;
  }

  &__experts-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 14px;

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
    }
  }

  &__expert-item {
    position: relative;
    border: 1px solid;
    border-color: transparent;
    transition: all .2s ease;
    background-color: #F5F7F9;

    &:hover {
      border-color: $border-color--red;

      .meet-our-experts__expert {
        &-name,
        &-position {
          color: $text-color--white;
          background: $bgcolor--red;
        }
      }
    }

    &-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    a {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transition: all .3s ease;
    }
  }

  &__expert-bottom_content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: absolute;
    bottom: 18px;
  }

  &__expert-info {
    margin-left: 16px;
  }

  &__expert-linkedin-link {
    width: 24px;
    height: 24px;
    display: block;
    position: absolute;
    top: 16px;
    right: 28px;
  }

  &__expert-name,
  &__expert-position {
    width: max-content;
    padding: 4px 8px;
    background-color: $bgcolor--white-darken;
    letter-spacing: -0.02em;
    transition: all .2s ease;
  }

  &__expert-name {
    @include font('Inter', 17px, 700);
  }

  &__expert-position {
    @include font('Inter', 14px, 400);
  }

  @media only screen and (max-width: 1180px) {
    &__expert-name,
    &__expert-position {
      padding: 3px 4px;
    }

    &__expert-name {
      font-size: 13px;
    }

    &__expert-position {
      font-size: 10px;
    }

    &__expert-info {
      margin-left: 12px;
    }

    &__expert-linkedin-link {
      width: 16px;
      height: 16px;
    }
  }

  @media only screen and (max-width: 1024px) {
    &__expert-name,
    &__expert-position {
      padding: 2px 3px;
    }

    &__expert-name {
      font-size: 10px;
    }

    &__expert-position {
      font-size: 9px;
    }

    &__expert-info {
      margin-left: 8px;
    }

    &__expert-linkedin-link {
      top: 8px;
      right: 20px;
    }
  }

  @media screen and (max-width: 767px) {
    &__expert-name {
      font-size: 13px;
    }

    &__expert-position {
      font-size: 11px;
    }
  }

  @media screen and (max-width: 385px) {
    &__expert-name {
      font-size: 11px;
    }

    &__expert-position {
      font-size: 9px;
    }
  }

  @media screen and (max-width: 374px) {
    &__expert-name {
      font-size: 9px;
    }

    &__expert-position {
      font-size: 8px;
    }
  }
}
</style>
