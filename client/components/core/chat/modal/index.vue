<template>
  <section>
    <div class="chat-header">
      <div class="chat-header__message">
        <img
          class="chat-header__message-icon"
          :src="require('@/components/core/chat/images/shape.jpg')"
          alt="Shape"
          width="14"
          height="13"
        >
        <div class="chat-header__message-arrow" />
      </div>
      <p class="chat-header__paragraph">
        Hey there, 👋<br>Welcome to Mad Devs website!
      </p>
      <div
        class="chat-header__close"
        @click.self="onClose"
      />
    </div>

    <div v-if="showMainBody">
      <MainBody
        :is-show-dm-message="isShowDmMessage"
        @changeModal="changeModal"
      />
    </div>
    <div
      v-else-if="showDevelopmentBody"
    >
      <Development
        :is-company="isCompany"
        :is-partnership="isPartnership"
      />
    </div>
  </section>
</template>

<script>
import MainBody from '@/components/core/chat/modal/MainBody'
import Development from '@/components/core/chat/modal/DevelopmentBody'

export default {
  name: 'ChatModal',

  components: {
    MainBody,
    Development,
  },

  data() {
    return {
      showMainBody: true,
      showDevelopmentBody: false,
      isCompany: false,
      isShowDmMessage: false,
      isPartnership: false,
    }
  },

  methods: {
    onClose() {
      this.$emit('close')
    },

    changeModal(e) {
      // checking first button ('Software development')
      if (+e.target.id === 1) {
        this.showMainBody = false
        this.showDevelopmentBody = true
        this.isCompany = true
        this.isPartnership = false
      }
      // checking second button ('Partnership')
      if (+e.target.id === 2) {
        this.showMainBody = false
        this.showDevelopmentBody = true
        this.isCompany = false
        this.isPartnership = true
      }
      // checking third button ('getting link')
      if (+e.target.id === 3) {
        this.showMainBody = true
        this.isShowDmMessage = true
        this.showDevelopmentBody = false
        this.isCompany = false
        this.isPartnership = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.chat-header {
  padding: 20px;
  background-color: $bgcolor--chinese-black;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
  border: 1px solid $border-color--grey-pale;
  user-select: none; /* standard syntax */
  -webkit-user-select: none; /* webkit (safari, chrome) browsers */
  -moz-user-select: none; /* mozilla browsers */
  -khtml-user-select: none; /* webkit (konqueror) browsers */
  -ms-user-select: none; /* IE10+ */

  &__message {
    position: relative;
    width: 28px;
    height: 22px;
    background: $bgcolor--white-primary;
    border-radius: 3px;
    z-index: 999;
    margin-right: 10px;
    margin-top: -8px;

    &-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 999;
    }

    &-arrow {
      width: 0;
      height: 0;
      border-top: 12px solid transparent;
      border-bottom: 11px solid transparent;
      border-right: 15px solid $border-color--white;
      position: absolute;
      top: 29%;
      left: 20%;
    }
  }

  &__paragraph {
    color: $text-color--white-primary;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 128.5%;
    letter-spacing: -0.02em;
    margin-right: 30px;
  }

  &__close {
    position: relative;
    width: 13px;
    height: 13px;

    &:hover {
      cursor: pointer;
    }

    &:before, &:after {
      position: absolute;
      left: 6px;
      content: ' ';
      height: 13px;
      width: 2px;
      top: 1px;
      background-color: $bgcolor--grey-selected;
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }
  }
}
</style>
