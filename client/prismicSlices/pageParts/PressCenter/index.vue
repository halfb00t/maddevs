<template>
  <section class="section">
    <div class="container">
      <div class="press-center">
        <!--  primary zone  -->
        <!--   \/  \/  \/   -->
        <div class="press-center-main ps-main-card">
          <div class="ps-main-card-section ps-main-card-section--left">
            <h2 class="ps-main-card__title">
              {{ title }}
            </h2>
            <div
              class="ps-main-card__description"
            >
              {{ shortDescription(description) }}
            </div>
            <div class="ps-main-card__footer">
              <span class="ps-main-card__date">{{ formattedDate(date) }}</span>
              <a
                :href="link.url"
                class="ps-main-card__link"
              >
                <span class="ps-main-card__link-label">
                  {{ linkLabel }}
                </span>
              </a>
            </div>
          </div>
          <div class="ps-main-card-section ps-main-card-section--right">
            <img
              :src="image.url"
              :alt="image.alt"
              class="ps-main-card__image"
            >
            <img
              :src="linkedCompanyLogo.url"
              :alt="linkedCompanyLogo.alt"
              class="ps-main-card__linked-logo"
            >
          </div>
        </div>
        <!--   /\  /\  /\   -->
        <!--primary zone end-->
        <!-------------------->
        <!--repeatable zone -->
        <!--   \/  \/  \/   -->
        <div class="press-center-sub ps-sub-cards">
          <div
            v-for="(item, i) in subPosts"
            :key="`slice-item-${i}`"
            class="press-center-sub-wrapper ps-sub-card-wrapper"
          >
            <div

              class="press-center-sub ps-sub-card"
            >
              <div class="ps-sub-card-section ps-sub-card-section--left">
                <img
                  :src="item.image.url"
                  :alt="item.image.alt"
                  class="ps-sub-card__image"
                >
                <img
                  :src="item.linkedCompanyLogo.url"
                  :alt="item.linkedCompanyLogo.alt"
                  class="ps-sub-card__linked-logo"
                >
              </div>
              <div class="ps-sub-card-section ps-sub-card-section--right">
                <h2 class="ps-sub-card__title">
                  {{ item.title }}
                </h2>
                <div
                  class="ps-sub-card__description"
                >
                  {{ shortDescriptionForSubPosts(item.description) }}
                </div>
                <div class="ps-sub-card__footer">
                  <span class="ps-sub-card__date">{{ formattedDate(item.date) }}</span>
                  <a
                    :href="item.link.url"
                    class="ps-sub-card__link"
                  >
                    <span class="ps-sub-card__link-label">
                      {{ item.linkLabel }}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--    /\  /\  /\     -->
        <!--repeatable zone end-->
      </div>
    </div>
  </section>
</template>

<script>
import textEllipsis from '@/helpers/textEllipsis'
import formatDate from '@/helpers/formatDate'

export default {
  name: 'PressCenter',

  props: {
    slice: {
      type: Object,

      default() {
        return {}
      },
    },
  },

  data() {
    return {
      title: this.slice?.primary?.title,
      description: this.slice?.primary?.description,
      date: this.slice?.primary?.date,
      link: this.slice?.primary?.link,
      linkLabel: this.slice?.primary?.linkLabel,
      image: this.slice?.primary?.image,
      linkedCompanyLogo: this.slice?.primary?.linkedCompanyLogo,
      subPosts: this.slice?.items,
    }
  },

  mounted() {
  },

  methods: {
    shortDescription(text) {
      const limit = 150
      return textEllipsis(text, { limit })
    },

    shortDescriptionForSubPosts(text) {
      const limit = 90
      return textEllipsis(text, { limit })
    },

    formattedDate(date) {
      return formatDate(date)
    },

  },

}

</script>

<style lang="scss" scoped>
.press-center {
  background-color: $bgcolor--white-primary;
}

//primary section styles
.ps-main-card {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  &__footer{
    margin-top: auto;
    display: flex;
    justify-content: space-between;
  }
  &__link{
    color: $text-color--black;
  }
  &-section {
    max-width: 50%;

    &--left {
      background-color: $bgcolor--white;
      box-sizing: border-box;
      width: 50%;
      padding: 40px 60px 35px;
      display: flex;
      flex-direction: column;
      max-height: 285px;
    }

    &--right {
      box-sizing: border-box;
      width: 50%;
      overflow: hidden;
      position: relative;
      max-height: 285px;
    }
  }

  &__title{
    @include font('Poppins', 26px, 700);
    line-height: 32px;
    text-transform: lowercase; //todo delete this line
    color: $text-color--black;
    margin-bottom: 15px;
  }
  &__description {
    @include font('Poppins', 14px, 400);
    color: $text-color--grey-pale;
    line-height: 20px;
    letter-spacing: -0.4px;

  }
  &__date{
    @include font('Poppins', 12px, 400);
    color: $text-color--grey;
  }
  &__link-label{
    @include font('Poppins', 16px, 600);
    &:hover{
      color: $text-color--red;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__linked-logo{
    position: absolute;
    right: 30px;
    bottom: 25px;
    height: 30px;
    width: auto;
  }
}
//primary section styles end
// -------------------------
//repeatable section styles

.ps-sub-cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 20px;
}

.ps-sub-card {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  &-wrapper{
    width: 50%;
    box-sizing: border-box;
    margin-bottom: 24px;
    &:nth-child(odd){
      padding-right: 24px;
    }
  }
  &__footer{
    margin-top: auto;
    display: flex;
    justify-content: space-between;
  }

  &__link{
    color: $text-color--black;
  }

  &-section {
    max-width: 50%;

    &--left {
      box-sizing: border-box;
      width: 50%;
      overflow: hidden;
      max-height: 285px;
      position: relative;
    }

    &--right {
      background-color: $bgcolor--white;
      box-sizing: border-box;
      width: 50%;
      padding: 18px;
      display: flex;
      flex-direction: column;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__linked-logo{
    position: absolute;
    right: 20px;
    bottom: 20px;
    height: 20px;
    width: auto;
  }

  &__title{
    @include font('Poppins', 18px, 700);
    line-height: 24px;
    text-transform: lowercase; //todo delete this line
    color: $text-color--black;
    margin-bottom: 10px;
  }
  &__description {
    @include font('Poppins', 12px, 400);
    color: $text-color--grey-pale;
    line-height: 18px;
    margin-bottom: 18px;
  }
  &__date{
    @include font('Poppins', 12px, 400);
    color: $text-color--grey;
  }
  &__link-label{
    @include font('Poppins', 16px, 600);
    &:hover{
      color: $text-color--red;
    }
  }
}

</style>
