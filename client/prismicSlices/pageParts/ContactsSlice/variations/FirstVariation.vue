<template>
  <div class="container contacts-slice__content">
    <div class="contacts-slice__content-info">
      <ContactFields class="contacts-slice__content-fields" />
      <Messengers class="contacts-slice__content-messengers" />
      <Socials class="contacts-slice__content-socials" />
    </div>
    <OrderForm class="contacts-slice__content-form" />
  </div>
</template>

<script>
import ContactFields from '../components/ContactFields'
import Messengers from '../components/Messengers'
import Socials from '../components/Socials'
import OrderForm from '../components/OrderForm'

export default {
  name: 'FirstVariation',
  components: {
    ContactFields,
    Messengers,
    Socials,
    OrderForm,
  },
}
</script>

<style lang="scss" scoped>
.contacts-slice__content {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  @media screen and (max-width: 1160px) {
    padding: 0 42px;
  }
  @media screen and (max-width: 768px) {
    flex-flow: column wrap;
  }
  @media screen and (max-width: 440px) {
    padding: 0 24px;
  }
  &-info {
    padding-right: 35px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px) {
      padding-right: 0;
    }
  }
  &-messengers {
    margin-top: 73px;
    @media screen and (max-width: 1024px) {
      margin-top: 50px;
    }
  }
  &-socials {
    margin-top: 57px;
    @media screen and (max-width: 1024px) {
      margin-top: 48px;
    }
  }
  &-form {
    box-sizing: border-box;
    width: 100%;
    max-width: 490px;
    @media screen and (max-width: 768px) {
      margin-top: 72px;
      width: calc(100% + 8px);
      max-width: calc(100% + 8px);
      margin-left: -4px;
    }
  }
}
</style>
