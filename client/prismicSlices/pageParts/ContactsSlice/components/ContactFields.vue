<template>
  <div class="contacts-slice-fields">
    <div class="contacts-slice-fields__item">
      <img
        :src="require(`@/assets/img/Footer/svg/location.svg`)"
        alt="Location."
        class="contacts-slice-fields__item-icon"
        width="40"
        height="40"
      >
      <div class="contacts-slice-fields__item-content">
        <p class="contacts-slice-fields__item-label">
          Our Office:
        </p>
        <p class="contacts-slice-fields__item-value">
          London, <br> United Kingdom
        </p>
      </div>
    </div>
    <div class="contacts-slice-fields__item">
      <img
        :src="require(`@/assets/img/Footer/svg/mail.svg`)"
        alt="Mail."
        class="contacts-slice-fields__item-icon"
        width="40"
        height="41"
      >
      <div class="contacts-slice-fields__item-content">
        <p class="contacts-slice-fields__item-label">
          Text us:
        </p>
        <a
          :href="`mailto:${mailLink}`"
          class="contacts-slice-fields__item-value"
        >
          {{ mailLink }}
        </a>
      </div>
    </div>
    <div class="contacts-slice-fields__item">
      <img
        :src="require(`@/assets/img/Footer/svg/phone.svg`)"
        alt="Phone."
        class="contacts-slice-fields__item-icon"
        width="40"
        height="40"
      >
      <div class="contacts-slice-fields__item-content">
        <p class="contacts-slice-fields__item-label">
          <img
            :src="require(`@/assets/img/Home/flags/uk.svg`)"
            width="19"
            height="14"
            alt="United Kingdom"
          >
          Call us:
        </p>
        <a
          href="tel:+442039848555"
          class="contacts-slice-fields__item-value"
        >
          +44 20 3984 8555
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactFields',

  data() {
    return {
      mailLink: process.env.emailContact,
    }
  },
}
</script>

<style lang="scss" scoped>
.contacts-slice-fields {
  display: flex;
  flex-direction: column;
  &__item {
    margin-top: 25px;
    display: flex;
    align-items: flex-end;
    @media screen and (max-width: 768px) {
      margin-top: 48px;
    }
    &:first-of-type {
      margin-top: 0;
    }
    &-icon {
      display: block;
      width: 40px;
      min-width: 40px;
      margin-right: 26px;
      user-select: none;
    }
    &-label {
      display: flex;
      align-items: center;
      @include font('Inter', 16px, 400);
      line-height: 24px;
      letter-spacing: -0.02em;
      margin-bottom: 6px;
      color: $text-color--white;
      img {
        display: block;
        margin-right: 8px;
        user-select: none;
      }
      @media screen and (max-width: 1024px) {
        font-size: 14px;
      }
    }
    &-value {
      @include font('Poppins', 34px, 600);
      line-height: 34px;
      letter-spacing: -1px;
      display: block;
      text-decoration: none;
      color: $text-color--white;
      border-bottom: 1px solid $text-color--red-opacity;
      br {
        display: none;
      }
      @media screen and (max-width: 1180px) {
        br {
          display: block;
        }
      }
      @media screen and (max-width: 1024px) {
        font-size: 28px;
        line-height: 36px;
      }
      @media screen and (max-width: 768px) {
        font-size: 20px;
        line-height: 20px;
        br {
          display: none;
        }
      }
    }
  }
}
</style>
