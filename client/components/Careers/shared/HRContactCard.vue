<template>
  <div class="hr-contact">
    <div class="hr-contact__image">
      <img
        v-lazy-load
        :data-src="$getMediaFromS3(`/images/Careers/jpg/EkaterinaHr.jpg`)"
        alt="Ekaterina"
      >
    </div>
    <div class="hr-contact__info">
      <p class="hr-contact__title">
        {{ $t('careers.detailPage.hr.name') }}
      </p>
      <p class="hr-contact__description">
        {{ $t('careers.detailPage.hr.description') }}
        <a
          :href="`mailto:${mailCV}`"
          @click="sendEmailClickEvent"
        >
          <img
            src="@/assets/img/common/gmail.svg"
            width="20"
            height="17"
            alt="Gmail"
          >
          <span>{{ mailCV }}</span>
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import { emailClickEvent } from '@/analytics/events'

export default {
  name: 'CareersAuthorCard',
  computed: {
    mailCV() {
      return process.env.emailCV
    },
  },

  methods: {
    sendEmailClickEvent() {
      emailClickEvent.send()
    },
  },
}
</script>

<style lang="scss" scoped>
.hr-contact {
  display: flex;
  color: $text-color--black-oil;
  &__image {
    margin-right: 20px;
    width: 101px;
    min-width: 101px;
    height: 101px;
    border-radius: 20px;
    background-color: $bgcolor--silver;
    overflow: hidden;
    img {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 20px;
      object-fit: cover;
    }
  }
  &__title {
    @include font('Poppins', 33px, 600);
    line-height: 43px;
    letter-spacing: -0.04em;
  }
  &__description {
    margin-top: 10px;
    font-size: 17px;
    line-height: 27px;
    letter-spacing: -0.013em;
    a {
      display: inline-flex;
      align-items: center;
      color: $text-color--blue;
      text-decoration: none;
      letter-spacing: normal;
      line-height: normal;

      img {
        margin-right: 5px;
        transform: translateY(1px);
      }
    }
  }

  @media screen and (max-width: 576px) {
    &__image {
      width: 68px;
      min-width: 68px;
      height: 68px;
    }
    &__title {
      font-size: 23px;
      line-height: 30px;
    }
  }
}
</style>
