<template>
  <section
    class="create-projects-slice"
    :style="{ backgroundColor: sliceBackground }"
  >
    <div class="container">
      <div
        :data-aos="animation"
        class="create-projects-slice__content"
        data-testid="create-projects-slice__content"
      >
        <h2 class="create-projects-slice__title">
          We create <br> IT projects for:
        </h2>
        <div class="create-projects-slice__projects projects-list">
          <div
            v-for="[first, second] in industriesEntries"
            :key="first"
            class="projects-list__item"
            data-testid="projects-list__item"
          >
            <p class="projects-list__item-paragraph">
              {{ first }}
              <br>
              {{ second }}
            </p>
          </div>
        </div>
        <ul class="create-projects-slice__flags flags-list">
          <li
            v-for="country in countries"
            :key="country"
            class="flags-list__item"
            data-testid="flags-list__item"
          >
            <img
              :src="require(`@/assets/img/Home/flags/${country}.svg`)"
              :alt="country"
              width="32"
              height="32"
            >
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { countries, industriesEntries } from '@/data/projectsFor'
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

export default {
  name: 'WeCreateProjectsFor',

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
      countries,
      industriesEntries,
      animation: this.slice?.primary?.animation,
    }
  },

  computed: {
    sliceBackground() {
      if (this.slice?.primary?.background === 'white') return '#ffffff'
      if (this.slice?.primary?.background === 'grey') return '#f5f7f9'
      if (this.slice?.primary?.background === 'black') return '#111213'
      return null
    },
  },
}
</script>

<style lang="scss" scoped>
.create-projects-slice {
  @media screen and (max-width: 576px) {
    background-color: $bgcolor--white !important;
  }

  &__content {
    padding: 0 45px 45px;
    text-align: center;
    background-color: $bgcolor--white;
    @media screen and (max-width: 1040px) {
      padding: 0 33px 45px;
    }
    @media screen and (max-width: 576px) {
      padding-left: 0;
      padding-right: 0;
      text-align: left;
    }
  }

  &__title {
    @include h2-title;
    padding-top: 40px;
    margin-bottom: 23px;
    br {
      display: none;
    }
    @media screen and (max-width: 1024px) {
      br {
        display: block;
      }
    }
    @media screen and (max-width: 834px) {
      padding-top: 33px;
      margin-bottom: 3px;
      br {
        display: none;
      }
    }
    @media screen and (max-width: 576px) {
      padding-top: 34px;
      margin-bottom: 1px;
      br {
        display: block;
      }
    }
  }

  &__projects {
    margin-bottom: 63px;
    @media screen and (max-width: 1040px) {
      margin-bottom: 40px;
    }
    @media screen and (max-width: 576px) {
      margin-bottom: 27px;
    }
  }
}

.projects-list {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 26px;
  }

  &__item {
    width: 100%;
    box-sizing: border-box;
    &-paragraph {
      @include font('Inter', 18px, 400);
      letter-spacing: -0.02em;
      line-height: 34px;
      @media (min-width: 1200px) and (max-width: 1270px) {
        font-size: 16px;
      }
      @media screen and (max-width: 834px) {
        font-size: 14px;
        line-height: 25px;
      }
      @media screen and (max-width: 576px) {
        font-size: 16px;
        line-height: 33px;
        letter-spacing: -0.02em;
      }
      @media screen and (max-width: 345px) {
        font-size: 14px;
      }
    }
  }
}

.flags-list {
  display: grid;
  grid-template-columns: repeat(22, max-content);
  justify-content: space-between;
  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(11, max-content);
    grid-row-gap: 19px;
  }

  &__item {
    display: block;
    width: 32px;
    height: 23px;
    img {
      display: block;
      width: 32px;
      height: 23px;
      transition: opacity 0.3s ease-in;
    }
    @media screen and (max-width: 1040px) {
      &,
      img {
        width: 21px;
        height: 15px;
      }
    }
    @media screen and (max-width: 576px) {
      &,
      img {
        width: 23px;
        height: 19px;
      }
    }
  }
}
</style>
