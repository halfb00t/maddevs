<template>
  <section>
    <div class="chat-header">
      <div class="chat-header__logo">
        <MessageIcon>
          <HeaderLogo :show-text="false" />
        </MessageIcon>
      </div>
      <p class="chat-header__paragraph">
        Hey there, 👋<br>Welcome to Mad Devs website!
      </p>
      <button
        class="chat-header__close"
        @click="onClose"
      />
    </div>
    <div
      v-if="showMainBody"
      class="modal-wrapper"
    >
      <Simplebar
        class="modal_content"
      >
        <MainBody
          :is-show-message="isShowMessage"
          @changeModal="changeModal"
        />
      </Simplebar>
    </div>
    <div
      v-else-if="showDevelopmentBody"
      class="modal-wrapper"
    >
      <Simplebar
        class="modal_content"
      >
        <Development
          :is-company="isCompany"
          :is-partnership="isPartnership"
          @close="onClose"
        />
      </Simplebar>
    </div>
  </section>
</template>

<script>
import Simplebar from 'simplebar-vue'
import MainBody from '@/components/core/chat/ChatModal/MainBody'
import Development from '@/components/core/chat/ChatModal/DevelopmentBody'
import HeaderLogo from '@/components/core/HeaderV2/HeaderLogo'
import MessageIcon from '@/components/core/chat/ChatIcon/MessageIcon'

export default {
  name: 'ChatModal',

  components: {
    MainBody,
    Development,
    Simplebar,
    HeaderLogo,
    MessageIcon,
  },

  data() {
    return {
      showMainBody: true,
      showDevelopmentBody: false,
      isCompany: false,
      isShowMessage: false,
      isPartnership: false,
    }
  },

  methods: {
    onClose() {
      this.$emit('close')
    },

    changeModal(id) {
      // checking first button ('Software development')
      if (Number(id) === 0) {
        this.showMainBody = false
        this.showDevelopmentBody = true
        this.isCompany = true
        this.isPartnership = false
      }
      // checking second button ('Partnership')
      if (Number(id) === 1) {
        this.showMainBody = false
        this.showDevelopmentBody = true
        this.isCompany = false
        this.isPartnership = true
      }
      // checking third button ('getting link')
      if (Number(id) === 2) {
        this.showMainBody = true
        this.isShowMessage = true
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
  display: flex;
  align-items: center;
  border: 1px solid $border-color--grey-pale;
  user-select: none; /* standard syntax */
  -webkit-user-select: none; /* webkit (safari, chrome) browsers */
  -moz-user-select: none; /* mozilla browsers */
  -khtml-user-select: none; /* webkit (konqueror) browsers */
  -ms-user-select: none; /* IE10+ */
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  @media screen and (max-width: 420px) {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  &__logo {
    margin-right: 8px;
    margin-top: -8px;
  }

  &__paragraph {
    color: $text-color--white-primary;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 128.5%;
    letter-spacing: -0.02em;
  }

  &__close {
    position: relative;
    width: 13px;
    height: 13px;
    margin-left: auto;
    background: transparent;
    border: none;
    cursor: pointer;

    &:before, &:after {
      position: absolute;
      left: 50%;
      content: ' ';
      height: 13px;
      width: 2px;
      top: 50%;
      background-color: $bgcolor--grey-selected;
    }

    &:before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &:after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
}

.modal_content {
  max-height: calc(100vh - 250px);

  @media screen and (max-width: 420px) {
    max-height: calc(100vh - 100px);
  }
}
</style>
