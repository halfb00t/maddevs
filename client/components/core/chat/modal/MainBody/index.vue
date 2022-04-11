<template>
  <div class="main-body">
    <div class="main-body__dm-message">
      <Message
        position="left"
        author-name="Anatoliy Fedorenko"
        author-spec="Delivery Manager"
        logo-name="anatoliy.jpg"
        alt-logo="Anatoly"
      >
        <p>Hello! How can we help you?</p>
      </Message>
    </div>

    <div class="main-body__my-message">
      <Message
        position="right"
      >
        <p>I'm interested in ...</p>
      </Message>
    </div>

    <div v-if="isShowMessage">
      <Message
        position="left"
        author-name="Anatoliy Fedorenko"
        author-spec="Delivery Manager"
        logo-name="anatoliy.jpg"
        alt-logo="Anatoly"
      >
        <p>
          On the <a
            href="https://maddevs.io/careers/"
            style="color: red"
          >page</a> you will find information on all current vacancies at Mad Devs
        </p>
      </Message>
    </div>

    <div
      v-else
      class="main-body__buttons"
    >
      <ChatButtons />
    </div>
  </div>
</template>

<script>
import ChatButtons from '@/components/core/chat/modal/MainBody/ChatButtons'
import Message from '@/components/core/chat/modal/MainBody/Message'

export default {
  name: 'MainBody',

  components: {
    ChatButtons,
    Message,
  },

  props: {
    isShowMessage: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.main-body {
  padding: 50px 20px 40px;
  background-color: $bgcolor--white-primary;
  user-select: none; /* standard syntax */
  -webkit-user-select: none; /* webkit (safari, chrome) browsers */
  -moz-user-select: none; /* mozilla browsers */
  -khtml-user-select: none; /* webkit (konqueror) browsers */
  -ms-user-select: none; /* IE10+ */

  @media screen and (max-width: 480px) {
    height: 100vh;
  }

  &__dm-message {
    margin-bottom: 60px;
  }

  &__my-message {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 60px;
  }
}
</style>
