<template>
  <section
    id="meet-our-experts"
    class="meet-our-experts"
  >
    <div class="container">
      <div
        class="meet-our-experts__experts-list"
        :class="{ 'aos-animate': alreadyAnimated }"
        :data-aos="animation"
      >
        <div
          v-for="expert in experts"
          :key="expert.name"
          class="meet-our-experts__expert-item"
          @mouseenter="expert.isHover ? toggleImageHanlde() : {}"
          @mouseleave="(expert.isHover && hoverCount >= 3) ? toggleImageHanlde() : {}"
        >
          <img
            :src="expert.isHover && !toggleImage ? expert.hoverImage.url : expert.image.url"
            :alt="expert.image.alt || 'Image'"
            width="295"
            height="401"
            class="meet-our-experts__expert-item-img"
            data-testid="item-img"
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
            v-if="expert.linkedin.url"
            v-lazy-load
            :data-src="require(`@/assets/img/Home/svg/team/linkedin.svg`)"
            width="24"
            height="24"
            alt="Linkedin"
            class="meet-our-experts__expert-linkedin-link"
          >
          <a
            :href="expert.linkedin.url"
            rel="nofollow"
            target="_blank"
            @click="sendLinkedinClickEvent($event)"
          >{{ expert.name }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'
import { linkedinUserClickEvent } from '@/analytics/events'

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
      animation: this.slice.primary?.animation,
      experts: this.slice.items,
      hoverCount: 0,
      toggleImage: true,
      alreadyAnimated: false, // needed to prevent the aos animation repeating on DOM changes
    }
  },

  methods: {
    sendLinkedinClickEvent(event) {
      if (event.target.href) {
        linkedinUserClickEvent.send()
        linkedinUserClickPixelEvent.send()
      }
    },

    toggleImageHanlde() {
      this.alreadyAnimated = true
      this.hoverCount += 1
      if (this.hoverCount >= 3) {
        this.toggleImage = !this.toggleImage
      }
    },
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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  &__expert-item {
    position: relative;
    border: 1px solid;
    flex: 0 0 calc(19.66% - 14px);
    margin: 7px;
    border-color: transparent;
    transition: all .2s ease;
    background-color: $bgcolor--cultured;
    @media screen and (max-width: 1300px) {
      flex: 0 0 calc(24.66% - 14px);
    }
    @media screen and (max-width: 1140px) {
      flex: 0 0 calc(33% - 14px);
    }
    @media screen and (max-width: 780px) {
      flex: 0 0 calc(49% - 14px);
    }

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
      vertical-align: middle;
    }

    a {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transition: all .3s ease;
      font-size: 0;
      line-height: 0;
      color: transparent;
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

  @media only screen and (max-width: 890px) {
    &__expert-name {
      font-size: 15px;
    }

    &__expert-position {
      font-size: 12px;
    }

    &__expert-info {
      margin-left: 12px;
    }
  }
  @media screen and (max-width: 780px) {
    &__expert-name {
      font-size: 13px;
    }

    &__expert-position {
      font-size: 11px;
    }
    &__expert-linkedin-link {
      top: 8px;
      right: 20px;
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
