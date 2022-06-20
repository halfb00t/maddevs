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

        <div
          style="display:none"
          v-html="svgIconsSprite"
        />

        <div class="create-projects-slice__projects projects-list">
          <div
            v-for="(industryList, listIndex) in industriesList"
            :key="listIndex"
            class="projects-list__list_items"
          >
            <ul
              v-for="(industry, elementIndex) in industryList"
              :key="elementIndex"
              class="projects-list__item"
              data-testid="projects-list__item"
            >
              <li class="projects-list__item-industry">
                <svg class="projects-list__item-industry-icon">
                  <use :xlink:href="`#${industry.iconID}`" />
                </svg>
                <span class="projects-list__item-industry-name">
                  {{ industry.text }}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="create-projects-slice__separator" />
        <div
          class="create-projects-slice__image-wrapper"
        >
          <img
            v-lazy-load
            :data-src="$getMediaFromS3(`/images/custom/homepage/map.svg`)"
            alt="Global projects in 20+ countries"
            class="create-projects-slice__image"
            width="900"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import { industriesForMapVariation as industries } from '@/data/projectsFor'
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'
import setSliceBackground from '@/helpers/setSliceBackground'

export default {
  name: 'WeCreateProjectsForWithMap',

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
      screenBreakpoints: {
        tabletMax: 1024,
        mobileMax: 692,
      },

      currentScreenType: '',
      industriesList: [],
      windowWidth: 0,
      svgIconsSprite: '',
      svgIconsUrl: 'https://maddevsio.s3.eu-west-1.amazonaws.com/images/custom/homepage/we-created-projects-for-icons-sprite.svg',
      animation: this.slice?.primary?.animation,
      sliceBackground: setSliceBackground(this.slice?.primary?.background),
      industries,
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.windowWidth = window.innerWidth
      window.addEventListener('resize', this.onResize)
      this.checkScreenSize()
      this.getIconsFromS3()
    })
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    prepareList() {
      switch (this.currentScreenType) {
        case 'desktop':
          this.industriesList = this.spliceIndustryList(this.industries, 4) // columns count
          break
        case 'tablet':
          this.industriesList = this.spliceIndustryList(this.industries, 3) // columns count
          break
        case 'mobile':
          this.industriesList = this.spliceIndustryList(this.industries, 2) // columns count
          break
        default:
          // eslint-disable-next-line no-console
          console.error('Unable to set count of columns')
      }
    },

    async getIconsFromS3() {
      const { data } = await axios.get(this.svgIconsUrl)
      this.svgIconsSprite = data
    },

    checkScreenSize() {
      let newScreenSize = ''

      if (this.windowWidth && this.windowWidth > this.screenBreakpoints.tabletMax) {
        newScreenSize = 'desktop'
      }
      if (this.windowWidth
        && this.windowWidth <= this.screenBreakpoints.tabletMax
        && this.windowWidth > this.screenBreakpoints.mobileMax) {
        newScreenSize = 'tablet'
      }
      if (this.windowWidth
        && this.windowWidth < this.screenBreakpoints.mobileMax) {
        newScreenSize = 'mobile'
      }
      if (newScreenSize !== this.currentScreenType) {
        this.currentScreenType = newScreenSize
        this.prepareList()
      }
    },

    spliceIndustryList(array, chunkSize) {
      const industry = [...array]
      const result = []
      for (let i = chunkSize; i > 0; i -= 1) {
        result.push(industry.splice(0, Math.ceil(industry.length / i)))
      }
      return result
    },

    onResize() {
      this.windowWidth = window.innerWidth
      this.checkScreenSize()
    },
  },
}
</script>

<style lang="scss" scoped>
.create-projects-slice {

  &__title {
    @include h2-title;
    padding-top: 40px;
    margin-bottom: 23px;
    text-align: center;
    color: $text-color--white-primary;

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

  br {
    display: none;
  }

  &__image {
    width: 100%;
  }

  &-wrapper {
    display: flex;
    justify-content: center;
    @media screen and (max-width: 1024px) {
      padding: 0 40px;
    }

    @media screen and (max-width: 692px) {
      padding: 0 20px;
    }
  }

  &__separator {
    background: linear-gradient(90deg, $bgcolor--black 15%, $border-color--grey 50%, $bgcolor--black 85%);
    margin: 66px 0 55px;
    height: 1px;
  }
}

.projects-list {
  max-width: 900px;
  margin: 0 auto;
  color: white;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &__list_items {
    display: inline;
    @media screen and (max-width: 692px) {
      width: 45%;
      gap: 20px;
    }
  }

  &__item {
    &-industry {
      display: flex;
    }

    &-industry-icon {
      max-width: 22px;
      max-height: 22px;
      margin-right: 10px;
      display: inline-block;
    }

    &-industry-name {
      margin-bottom: 24px;
      color: $text-color--white-primary;
      @media screen and (max-width: 1024px) {
        @include font('Inter', 16px, 400);
      }

      @media screen and (max-width: 692px) {
        @include font('Inter', 14px, 400);
        text-wrap: normal;
      }
    }
  }
}
</style>
