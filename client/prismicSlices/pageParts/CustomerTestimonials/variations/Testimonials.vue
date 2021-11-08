<template>
  <section
    id="testimonials"
    class="testimonials"
  >
    <div
      :data-aos="animation"
      class="container"
      data-testid="testimonials-container"
    >
      <h2
        class="testimonials__title"
        v-html="title"
      />
      <div class="testimonials__testimonials-list">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.text"
          class="testimonials__testimonials-item"
        >
          <blockquote class="testimonials__testimonials-text paragraph-md">
            {{ testimonial.text }}
          </blockquote>
          <div class="testimonials__customer-info">
            <div class="testimonials__profile">
              <img
                v-lazy-load
                :data-src="require(`@/assets/img/DeliveryModels/png/customers/${testimonial.author.image}.png`)"
                :alt="testimonial.alt || 'Image'"
                class="testimonials__customer-image"
                width="42"
                height="42"
              >
              <span class="testimonials__customer-name paragraph-sm">
                {{ testimonial.author.name }} <span>{{ testimonial.author.position }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { testimonials } from '@/data/deliveryModels'

export default {
  name: 'Testimonials',

  props: {
    title: {
      type: String,
      default: 'Testimonials',
    },

    animation: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      testimonials,
    }
  },
}
</script>

<style lang="scss" scoped>
.testimonials {
  background-color: #f5f7f9;

  &__title {
    @include h2-title;
  }

  &__testimonials {
    &-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    &-item:first-child {
      flex: 66.3333333%;
      & blockquote {
        font-size: 40px;
        line-height: 51px;
        font-weight: 700;
        padding-right: 128px;

        @media screen and (max-width: 834px) {
          font-size: 24px;
          line-height: 29px;
          font-weight: normal;
          padding-right: 80px;
        }

        @media screen and (max-width: 768px) {
          font-size: 14px;
          line-height: 20px;
          padding-right: 0px;
        }
      }
    }

    &-item {
      flex: calc(33.333333% - 80px);
      padding: 0 20px 0 0;
      padding-bottom: 80px;

      @media screen and (max-width: 834px) {
        padding-bottom: 50px;
      }

      @media screen and (max-width: 768px) {
        flex: 100%;
        padding-left: 0px;
        padding-right: 0px;
      }
    }

    &-text {
      font-size: 24px;
      line-height: 29px;
      letter-spacing: -0.013em;
      color: #101113;
      margin: 0 0 20px;

      @media screen and (min-width: 768px) and (max-width: 1024px) {
        font-size: 12px;
        line-height: 20px;
        height: auto;
      }

      @media screen and (max-width: 767px) {
        font-size: 14px;
        line-height: 20px;
        margin: 0 0 17px;
      }
    }
  }

  &__profile {
    display: flex;
    align-items: flex-start;
  }

  &__customer {
    &-image {
      border-radius: 4px;
      margin-right: 8px;

      @media screen and (min-width: 1025px) {
        width: 42px;
        min-width: 42px;
        height: 42px;
      }

      @media screen and (max-width: 1024px) {
        width: 34px;
        min-width: 34px;
        height: 34px;
        margin-right: 10px;
      }
    }

    &-info {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      @media screen and (max-width: 1080px) {
        flex-direction: column;

        .customer-testimonials__project {
          align-self: flex-start;
          margin-top: 15px;
        }
      }

      @media screen and (max-width: 767px) {
        flex-direction: row;

        .customer-testimonials__project {
          margin-top: 0;
          align-self: center;
        }
      }
    }

    &-name {
      color: #6d7a7d;
      font-size: 14px;
      line-height: 18px;
      margin-top: 3px;

      @media screen and (max-width: 1024px) {
        font-size: 12px;
        line-height: 16px;
        letter-spacing: -0.02em;
      }

      span {
        display: block;
      }
    }
  }
}
</style>
