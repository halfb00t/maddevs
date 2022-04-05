<template v-if="footerStatus">
  <footer :class="`footer ${pageName}`">
    <div class="container">
      <div
        id="footer__top-line"
      />
      <div class="footer__animated-icons">
        <div
          id="footer__animated-black-block"
          class="footer__animated-black-block"
        />
        <div
          id="footer__animated-icon--fire"
          class="footer__animated-icon active-unselected"
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
import FooterNavbar from '@/components/core/FooterV2/FooterNavbar'
import { navigationsSections as mainNavigations } from '@/data/footerNavigation'
import FooterContacts from '@/components/core/FooterV2/FooterContacts'
import FooterStaticNavigations from '@/components/core/FooterV2/FooterStaticNavigations'

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
      footerAnimation: {},
    }
  },

  computed: {
    ...mapGetters(['footerMainNavigation', 'footerIsLoaded']),
  },

  watch: {
    footerIsLoaded(enabled, disabled) {
      console.log('\n\n\n\n\n\n\n\n')
      if (enabled) {
        setTimeout(() => { // todo это какой то ебаный пиздец.
          this.createIcon()
        }, 1500) // todo это какой то ебаный пиздец.
      } else {
        console.log(disabled)
      }
      console.log('\n\n\n\n\n\n\n\n')
    },
  },

  created() {
    this.getFooterContent()
  },

  beforeMount() {
    this.createIcon()
  },

  methods: {
    ...mapActions(['getFooterContent']),

    createIcon() {
      console.log('icon created')
      const company = document.querySelector('.footer-nav-column-company')
      const services = document.querySelector('.footer-nav-column-services')
      const clients = document.querySelector('.footer-nav-column-clients')
      this.footerAnimation.companyPosition = company.getBoundingClientRect()
      this.footerAnimation.servicesPosition = services.getBoundingClientRect()
      this.footerAnimation.clientsPosition = clients.getBoundingClientRect()
      // console.log('company position left', companyPosition.left)
      // console.log('services position left', servicesPosition.left)
      // console.log('clients position left', clientsPosition.left)
      const blackBlock = document.querySelector('#footer__animated-black-block')
      const fire = document.querySelector('#footer__animated-icon--fire')
      const diamond = document.querySelector('#footer__animated-icon--diamond')
      const lightning = document.querySelector('#footer__animated-icon--lightning')
      fire.style.left = `${this.footerAnimation.companyPosition.left}px`
      diamond.style.left = `${this.footerAnimation.servicesPosition.left}px`
      lightning.style.left = `${this.footerAnimation.clientsPosition.left}px`
      // console.log(`${clientsPosition.left}px`)
      blackBlock.style.left = `${this.footerAnimation.companyPosition.left - 15}px`
    },

    onChangeColumn(columnName) {
      const allColumns = document.querySelectorAll('.footer__animated-icon')
      allColumns.forEach(column => {
        column.classList.remove('active')
        column.classList.remove('active-unselected')
      })
      // const element = document.querySelector(`.footer-nav-column-${columnName}`)

      const blackBlock = document.querySelector('#footer__animated-black-block')
      console.log(blackBlock)
      const fireIcon = document.querySelector('#footer__animated-icon--fire')
      const diamondIcon = document.querySelector('#footer__animated-icon--diamond')
      const lightning = document.querySelector('#footer__animated-icon--lightning')
      // this.footerAnimation.companyPosition.left
      // this.footerAnimation.servicesPosition.left
      // this.footerAnimation.clientsPosition.left
      switch (columnName) {
        case 'company':
          fireIcon.classList.add('active')
          blackBlock.style.left = `${this.footerAnimation.companyPosition.left - 15}px`
          console.log(this.footerAnimation.companyPosition.left - 15)
          break
        case 'services':
          diamondIcon.classList.add('active')
          blackBlock.style.left = `${this.footerAnimation.servicesPosition.left - 11}px`
          console.log(this.footerAnimation.servicesPosition.left - 15)
          break
        case 'clients':
        case 'insights':
        case 'industries':
          lightning.classList.add('active')
          blackBlock.style.left = `${this.footerAnimation.clientsPosition.left - 20}px`
          break
        default:
          fireIcon.classList.add('active-unselected')
          blackBlock.style.left = `${this.footerAnimation.companyPosition.left - 15}px`
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
  @media only screen and (max-width: 991px) {
    padding-top: 48px;
    padding-bottom: 46px;
  }

  &__content {
    &-wrapper {
      display: flex;
    }

    &--left-section {
      width: 66.66%;
    }

    &--right-section {
      width: 33.33%;
      padding-left: 60px;
      border-left: 1px solid rgba(236, 28, 36, .5);
    }
  }
}

#footer__top-line{
  width: 100%;
  margin: 8px 0 55px;
  height: 1px;
  border: 1px none rgba(236, 28, 36, .5);
  border-top-style: solid;
}

.footer__animated-black-block{
  background-color: #111213;
  position: absolute;
  top: 63px;
  width: 68px;
  height: 20px;
  z-index: 666;
  transition-timing-function: cubic-bezier(1,0,.52,1.65);
  transition-duration: 0.7s;

}
.footer__animated-icon path{
  transition: all .2s;
}
.footer__animated-icon.active-unselected path{
  fill: #ffffff;
  transition: all .2s;
}

.footer__animated-icon.active,
.footer__animated-icon.active-unselected {
  visibility: visible;
  opacity: 1;
  transition-delay: 0.4s;
}
.footer__animated-icon{
  z-index: 999;
  transition: all .2s;
  position: absolute;
  top: 44px;
  visibility: hidden;
  opacity: 0;
}
</style>
