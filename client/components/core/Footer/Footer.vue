<template v-if="footerStatus">
  <footer :class="`footer ${pageName}`">
    <div class="container">
      <div
        id="footer__top-line"
        class="footer__top-line"
      />
      <div class="footer__animated-icons">
        <div
          id="footer__animated-top-line-separator"
          class="footer__animated-top-line-separator"
        />
        <div
          id="footer__animated-icon--fire"
          class="footer__animated-icon footer__animated-icon--fire"
          :class="{ 'footer__animated-icon--active': activeIcon === 'fire', 'footer__animated-icon--active-unselected': !activeIcon }"
        >
          <svg
            width="38"
            height="58"
            viewBox="0 0 258 380"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M59.921 143.33C54.0944 169.409 55.3914 195.423 77.3015 219.53C66.6542 151.617 103.381 100.703 153.16 93.1287C146.599 99.0812 135.469 113.178 143.717 124.888C190.856 102.115 221.412 48.8023 231.636 0.340429C257.874 57.3084 259.406 123.095 212.72 163.051C180.391 191.581 196.669 237.592 239.871 173.606C286.762 272.616 236.648 394.854 112.625 377.817C127.263 369.336 209.653 336.174 173.955 248.602C161.825 301.992 121.099 286.159 108.211 337.837C97.0875 271.155 167.152 295.56 138.407 193.683C127.964 264.735 21.6955 253.184 60.0333 355.954C-33.0667 295.668 -5.49526 198.68 59.921 143.33Z"
              fill="#EC1C24"
            />
          </svg>
        </div>
        <div
          id="footer__animated-icon--diamond"
          class="footer__animated-icon"
          :class="{ 'footer__animated-icon--active': activeIcon === 'diamond'}"
        >
          <svg
            width="48"
            height="53"
            viewBox="0 0 287 375"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.663174 163.557L95.6912 112.551L258.177 188.406L286.038 288.207L74.8863 374.96L0.663174 163.557ZM97.1935 136.545L26.9797 174.367L76.5908 319.322L82.8036 211.229L52.7836 193.046L58.2435 182.917L89.9697 194.182L127.508 149.962L97.1935 136.545ZM201.731 182.817L146.658 158.439L109.804 201.943L191.321 238.345L201.731 182.817ZM181.243 257.004L102.424 221.687L91.9685 340.461L181.243 257.004ZM121.858 86.8667L148.346 33.6386L172.232 49.207L132.813 94.2432L121.858 86.8667ZM92.3616 0.267599L122.247 4.48716L105.94 81.2755L91.2764 81.6064L92.3616 0.267599ZM66.3599 89.0951L33.8201 48.452L58.5471 33.9364L76.2552 81.5229L66.3599 89.0951Z"
              fill="#EC1C24"
            />
          </svg>
        </div>
        <div
          id="footer__animated-icon--lightning"
          class="footer__animated-icon"
          :class="{ 'footer__animated-icon--active': activeIcon === 'lightning'}"
        >
          <svg
            width="29"
            height="58"
            viewBox="0 0 223 379"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M75.4497 208.179L0.640848 380.133L197.989 188.663L148.948 151.714L222.377 61.0557L94.6211 0.00148933L23.4378 173.298L75.4497 208.179Z"
              fill="#EC1C24"
            />
          </svg>
        </div>
      </div>

      <div class="footer__content-wrapper">
        <div class="footer__content footer__content--left-section">
          <FooterNavbar
            :navigations="mainNavigations"
            @changed-active-column="onChangeColumn"
          />
        </div>
        <div class="footer__content footer__content--right-section">
          <FooterContacts />
          <FooterStaticNavigations />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import FooterNavbar from '@/components/core/Footer/FooterNavbar'
import { navigationsSections as mainNavigations } from '@/data/footerNavigation'
import FooterContacts from '@/components/core/Footer/FooterContacts'
import FooterStaticNavigations from '@/components/core/Footer/FooterStaticNavigations'

export default {
  name: 'Footer',
  components: {
    FooterContacts,
    FooterNavbar,
    FooterStaticNavigations,
  },

  data() {
    return {
      pageName: '',
      mainNavigations,
      activeIcon: '',
    }
  },

  computed: {
    ...mapGetters(['footerMainNavigation']),

    iconIndent() {
      if (this.activeIcon === 'diamond') return 10
      if (this.activeIcon === 'lightning') return 20
      return 10
    },
  },

  created() {
    this.getFooterContent()
  },

  methods: {
    ...mapActions(['getFooterContent']),

    getActiveIconByColumnName(columnName) {
      if (!columnName) return ''
      if (columnName === 'company') return 'fire'
      if (columnName === 'services') return 'diamond'
      return 'lightning'
    },

    onChangeColumn(event, columnName) {
      this.activeIcon = this.getActiveIconByColumnName(columnName)
      const topLineSeparator = document.querySelector('#footer__animated-top-line-separator')

      if (columnName) {
        const columnPositions = event.target.getBoundingClientRect()
        const icon = document.querySelector(`#footer__animated-icon--${this.activeIcon}`)
        topLineSeparator.style.left = `${columnPositions.left}px`
        icon.style.left = `${columnPositions.left}px`
      } else {
        const firstColumn = document.querySelector('.footer-nav-column--company')
        const { left } = firstColumn.getBoundingClientRect()
        topLineSeparator.style.left = `${left}px`
        // Handle resize case
        const firstIcon = document.querySelector('#footer__animated-icon--fire')
        if (firstIcon) firstIcon.style.left = `${left}px`
      }
    },
  },

}
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  padding-top: 65px;
  padding-bottom: 130px;
  @media screen and (max-width: 991px) {
    padding-top: 48px;
    padding-bottom: 46px;
  }

  &__top-line {
    width: 100%;
    margin: 8px 0 55px;
    height: 1px;
    border: 1px none $border-color--red-opacity;
    border-top-style: solid;
    @media screen and (max-width: 991px) {
      display: none;
    }
  }

  &__content {
    &-wrapper {
      display: flex;
      @media screen and (max-width: 991px) {
        display: block;
      }
    }

    &--left-section {
      width: 66.66%;
      @media screen and (max-width: 991px) {
        display: none;
      }
    }

    &--right-section {
      @media screen and (min-width: 992px) {
        width: 33.33%;
        padding-left: 60px;
        border-left: 1px solid $border-color--grey-05-opacity;
      }
      @media screen and (min-width: 993px) and (max-width: 1320px) {
        padding-left: 25px;
      }
    }
  }

  &__animated {
    &-top-line-separator {
      background-color: $bgcolor--black;
      position: absolute;
      top: 63px;
      width: 68px;
      height: 20px;
      z-index: 4;
      transition: all;
      transition-timing-function: cubic-bezier(1, 0, .52, 1.65);
      transition-duration: 0.7s;
      left: 90px;
      @media screen and (max-width: 991px) {
        display: none;
      }
      @media screen and (min-width: 1420px) {
        left: calc((100vw - 1240px) / 2);
      }
    }

    &-icons {
      @media screen and (max-width: 991px) {
        display: none;
      }
    }

    &-icon {
      width: 68px;
      z-index: 5;
      transition: opacity .2s;
      position: absolute;
      top: 44px;
      opacity: 0;
      display: flex;
      justify-content: center;

      &--active-unselected path {
        fill: $bgcolor--white-primary;
        transition: all .2s;
      }

      & path {
        transition: all .2s;
      }

      &--active,
      &--active-unselected {
        opacity: 1;
        transition-delay: 0.4s;
      }
    }
  }
}

</style>
