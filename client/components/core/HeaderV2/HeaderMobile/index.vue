<template>
  <div class="header-mobile">
    <div class="header-mobile__scroll safary-only container">
      <div class="header-mobile__content-wrapper">
        <div class="header-mobile__content">
          <nav class="header-mobile__navigation">
            <HeaderMobileNavigation
              :navigation="navigation"
              @changed-page="onChangePage"
            />
          </nav>
          <div class="header-mobile__contacts">
            <HeaderMobileContacts />
          </div>
          <UIModalTriggerButton
            color="red"
            label="Order a project now"
            class="header-mobile__contact-btn"
            @click="$emit('open-modal')"
          />
        </div>
        <div class="header-mobile__socials">
          <HeaderMobileSocials />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UIModalTriggerButton from '@/components/shared/UIModalTriggerButton'
import HeaderMobileNavigation from '@/components/core/HeaderV2/HeaderMobile/HeaderMobileNavigation'
import HeaderMobileContacts from '@/components/core/HeaderV2/HeaderMobile/HeaderMobileContacts'
import HeaderMobileSocials from '@/components/core/HeaderV2/HeaderMobile/HeaderMobileSocials'

export default {
  name: 'HeaderMobile',
  components: {
    UIModalTriggerButton,
    HeaderMobileNavigation,
    HeaderMobileContacts,
    HeaderMobileSocials,
  },

  props: {
    navigation: {
      type: Array,
      default: () => ([]),
    },
  },

  methods: {
    onChangePage() {
      this.$emit('changed-page')
    },
  },
}
</script>

<style lang="scss" scoped>
.header-mobile {
  z-index: 2;
  overflow: hidden;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  min-height: calc(100vh - (100vh - 100%)); // 100vh height for mobile Safari browser
  padding-top: 63px; // 63px - height of sticky header
  background-color: $bgcolor--black;
  @media screen and (max-width: 1012px) {
    padding-top: 48px;
  }

  &__scroll {
    position: relative;
    height: calc(100vh - 63px);
    overflow: auto;
    @media screen and (max-width: 1012px) {
      height: calc(100vh - 48px);
    }
  }

  &__content-wrapper {
    position: relative;
    padding-top: 62px;
    padding-bottom: 200px;
    color: $text-color--white-primary;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: flex-start;
    }
  }

  &__navigation,
  &__contacts {
    box-sizing: border-box;
  }

  &__navigation {
    order: 1;
    flex: 1;
    max-width: 50%;
    @media screen and (max-width: 768px) {
      width: 100%;
      max-width: 100%;
    }
  }

  &__contacts {
    order: 2;
    width: auto;
    padding-top: 6px;
    padding-left: 40px;
    @media screen and (max-width: 768px) {
      order: 3;
      width: 100%;
      padding: 0;
      margin-top: 22px;
    }
  }

  &__contact-btn {
    order: 3;
    margin-top: 50px;
    display: block;
    width: 100%;
    height: 60px;
    font-size: 16px;
    letter-spacing: -0.02em;
    @media screen and (max-width: 768px) {
      order: 2;
    }
  }
}

/* iphone 5 */
@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (-webkit-device-pixel-ratio: 2) {
  _::-webkit-full-page-media,
  _:future,
  :root .safari-only {
    max-height: calc(100vh - 120px) !important;
  }
}

/* iphone 6, 6s, 7, 8 */
@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (-webkit-device-pixel-ratio: 2) {
  _::-webkit-full-page-media,
  _:future,
  :root .safari-only {
    max-height: calc(100vh - 120px) !important;
  }
}

/* iphone 6+, 6s+, 7+, 8+ */
@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (-webkit-device-pixel-ratio: 3) {
  _::-webkit-full-page-media,
  _:future,
  :root .safari-only {
    max-height: calc(100vh - 120px) !important;
  }
}

/* iphone X , XS, 11 Pro */
@media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  _::-webkit-full-page-media,
  _:future,
  :root .safari-only {
    max-height: calc(100vh - 157px) !important;
  }
}

/* iphone XR, 11 */
@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
  _::-webkit-full-page-media,
  _:future,
  :root .safari-only {
    max-height: calc(100vh - 157px) !important;
  }
}

/* iphone XS Max, 11 Pro Max */
@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
  _::-webkit-full-page-media,
  _:future,
  :root .safari-only {
    max-height: calc(100vh - 157px) !important;
  }
}
</style>
