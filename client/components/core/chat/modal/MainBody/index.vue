<template>
  <div class="main-body">
    <div class="main-body__dm-message">
      <DmMessage />
    </div>
    <div class="main-body__my-message">
      <MyMessage />
    </div>
    <div class="main-body__buttons">
      <ChatButtons />
    </div>
  </div>
</template>

<script>
import DmMessage from '@/components/core/chat/modal/MainBody/DmMessage'
import ChatButtons from '@/components/core/chat/modal/MainBody/ChatButtons'
import MyMessage from '@/components/core/chat/modal/MainBody/MyMessage'

export default {
  name: 'MainBody',

  components: {
    DmMessage,
    ChatButtons,
    MyMessage,
  },
}
</script>

<style lang="scss" scoped>
.main-body {
  padding: 50px 20px 40px;
  background-color: $bgcolor--white-primary;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  user-select: none; /* standard syntax */
  -webkit-user-select: none; /* webkit (safari, chrome) browsers */
  -moz-user-select: none; /* mozilla browsers */
  -khtml-user-select: none; /* webkit (konqueror) browsers */
  -ms-user-select: none; /* IE10+ */

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
