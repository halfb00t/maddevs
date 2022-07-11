<template>
  <div class="footer-contacts">
    <div class="footer-contacts__head-content">
      <div class="footer-contacts__contact-item">
        <p class="footer-contacts__contact-title">
          {{ footerContacts.emailTitle }}
        </p>
        <a
          :href="`mailto:${footerContacts.email}`"
          class="footer-contacts__contact-link footer-contacts__contact-mail"
          @click="sendEvent('email')"
        >{{
          footerContacts.email
        }}
        </a>
      </div>
      <div class="footer-contacts__contact-item">
        <div class="footer-contacts__contact-title-wrapper">
          <div class="footer-contacts__contact-title-flag">
            <img
              v-lazy-load
              :data-src="require(`@/assets/img/Home/flags/uk.svg`)"
              width="19"
              height="14"
              alt="United Kingdom"
            >
          </div>
          <p class="footer-contacts__contact-title">
            {{ footerContacts.phoneNumberTitle }}
          </p>
        </div>
        <a
          :href="`tel:${footerContacts.phoneNumber}`"
          class="footer-contacts__contact-link footer-contacts__contact-phone-number"
          @click="sendEvent('phone')"
        >{{ footerContacts.phoneNumber }}</a>
      </div>
    </div>
    <div class="footer-contacts__lists-wrapper">
      <FooterSocialNetworks />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FooterSocialNetworks from '@/components/core/Footer/FooterSocialNetworks'
import { emailClickEvent, phoneClickEvent } from '@/analytics/events'
import { phoneClickPixelEvent, emailClickPixelEvent } from '@/analytics/pixelEvents'

export default {
  name: 'FooterContacts',
  components: {
    FooterSocialNetworks,
  },

  data() {
    return {
      mailLink: process.env.emailContact,
    }
  },

  computed: {
    ...mapGetters(['footerContacts']),
  },

  methods: {
    sendEvent(type) {
      if (type === 'email') {
        emailClickEvent.send()
        emailClickPixelEvent.send()
      }
      if (type === 'phone') {
        phoneClickEvent.send()
        phoneClickPixelEvent.send()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.noname-selector-for-deploy-one{
  display: none;
}
.footer-contacts {
  &__head-content {
    margin-bottom: 40px;
    flex-direction: column;
  }

  &__contact-item {
    margin-bottom: 30px;
  }

  &__head-content,
  &__messengers-list,
  &__messenger-item-wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__contact-title-wrapper {
    display: flex;
    align-items: center;
  }

  &__contact-title,
  &__messenger-name {
    @include font('Inter', 16px, 400);
    line-height: 24px;
    letter-spacing: -0.013em;
  }

  &__contact-title-flag {
    display: flex;
    align-items: center;
    margin-right: 8px;

    svg {
      width: 18px;
      height: 14px;
    }
  }

  &__contact-title,
  &__contact-link {
    color: $text-color--white-primary;
  }

  &__contact-link {
    @include font('Poppins', 34px, 600);
    display: inline-block;
    margin-top: 12px;
    line-height: 100%;
    letter-spacing: -1px;
    border-bottom: 1px solid $text-color--red-opacity;
    text-decoration: none;
  }

  &__messenger-item-wrapper {
    align-items: center;
    text-decoration: none;

    &:first-child {
      margin-left: -8px;
    }

    img {
      display: block;
      width: 42px;
      height: 42px;
      margin-right: 3px;
    }
  }

  &__messenger-name {
    color: $text-color--grey;
  }

}

@media screen and (max-width: 1320px) {
  .footer-contacts {
    &__contact-link {
      font-size: 20px;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1200px) {
  .footer-contacts {
    &__contact-item {
      margin-bottom: 42px;

      &:last-child {
        margin-top: 0;
        margin-bottom: 0;
      }
    }

    &__social-network-list-desktop {
      margin-top: 35px;
      padding-top: 40px;
    }
  }
}

@media screen and (max-width: 1100px) {
  .footer-contacts__messengers-list {
    width: max-content;
    display: grid;
    grid-template-columns: repeat(2, max-content);
    grid-column-gap: 70px;
  }
}

@media screen and (max-width: 991px) {
  .footer-contacts {
    &__head-content {
      flex-direction: row;
      margin-bottom: 48px;
      flex-wrap: wrap;
    }

    &__lists-wrapper {
      max-width: 100%;
    }
  }
}

@media screen and (max-width: 800px) {
  .footer-contacts__messengers-list {
    grid-column-gap: 60px;
  }
}

@media screen and (max-width: 767px) {
  .footer-contacts {
    &__contact-item {
      &:last-child {
        margin-top: 0;
        margin-bottom: 0;
      }
    }

    &__messenger-telegram {
      margin-left: 2px;
    }
  }
}

@media screen and (max-width: 640px) {
  .footer-contacts {
    &__contact-item {
      margin-bottom: 33px;
    }

    &__contact-title {
      font-size: 13px;
      line-height: 22px;
    }
  }
}

@media screen and (max-width: 600px) {
  .footer-contacts {
    &__head-content {
      flex-direction: column;
      margin-bottom: 48px;
      flex-wrap: wrap;
    }

    &__lists-wrapper {
      max-width: 100%;
    }

    &__messengers-list {
      width: max-content;
      display: grid;
      grid-template-columns: repeat(2, max-content);
      grid-column-gap: 70px;

      svg {
        width: 42px;
        height: 42px;
      }
    }
  }
}

@media screen and (max-width: 360px) {
  .footer-contacts__messengers-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, max-content);
    grid-column-gap: 33px;
  }
}
</style>
