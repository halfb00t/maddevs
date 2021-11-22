<template>
  <section
    :id="id"
    class="success-message"
  >
    <div class="success-message__conten-wrapper">
      <img
        src="@/assets/img/common/success-message-hand.svg"
        alt="Hand"
      >
      <div class="success-message__text-content">
        <div
          class="success-message__title"
          v-html="title"
        />
        <div
          class="success-message__info-text"
          v-html="message"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SuccessMessage',
  props: {
    title: {
      type: String,
      default: 'Thanks for your <br> interest in Mad Devs',
    },

    id: {
      type: String,
      default: '',
    },

    message: {
      type: String,
      default: 'The form has been submitted. <br> We will contact you as soon as possible.',
    },
  },
}
</script>

<style lang="scss" scoped>
.success-message {
  background-color: $modal-bg-color;

  @media screen and (max-width: 640px) {
    display: flex;
    justify-content: center;
  }

  &__title {
    @include font('Poppins', 40px, 700);
    padding-top: 28px;
    color: $text-color--white;
    letter-spacing: -1px;

    @media screen and (max-width: 968px) {
      @include font('Poppins', 32px, 700);
      padding-top: 20px;
    }

    @media screen and (max-width: 640px) {
      @include font('Poppins', 26px, 700);
      padding-top: 10px;
      line-height: 1.2;
    }
  }

  &__info-text {
    @include font('Inter', 18px, 400);
    padding-top: 23px;
    color: $text-color--grey;
    letter-spacing: -0.03em;

    @media screen and (max-width: 968px) {
      @include font('Poppins', 16px, 400);
      padding-top: 15px;
    }

    @media screen and (max-width: 640px) {
      @include font('Poppins', 14px, 400);
      padding-top: 10px;
    }
  }
}

.success-modal {
  &_success-message {
    padding: 30px 60px;
  }
}

@media screen and (max-width: 640px) {
  .success-message {
    padding: 0 20px;
  }

  .success-modal {
    &_success-message {
      padding-top: 70px;
    }
  }
}
</style>
