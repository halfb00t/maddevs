<template>
  <section
    id="read-online-anchor"
    class="ebook-read"
  >
    <div class="container">
      <h2 class="ebook-read__title">
        Read articles online
      </h2>

      <div class="ebook-read__cards">
        <ReadCard
          v-for="(post, i) of posts"
          :key="`post-card_${i}`"
          :post="post"
        />
      </div>

      <div class="ebook-read__form">
        <img
          v-lazy-load
          class="ebook-read__form-img"
          width="110"
          height="155"
          data-src="@/assets/img/Ebook/book.svg"
          alt="Pricing strategies"
        >
        <h2 class="ebook-read__form-title">
          Get your copy of “Custom Software Development: Pricing Strategies”
        </h2>
        <ReadForm @form-sended="handleSendedForm" />
      </div>
    </div>

    <!-- id is needed for google analytics, don't remove it -->
    <Modal
      id="read-success-modal"
      ref="modalEbook"
    >
      <SuccessMessage
        title="Thank you!"
        :message="successMessage"
      />
    </Modal>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ReadCard from '@/components/Ebook/ReadCard'
import ReadForm from '@/components/Ebook/ReadForm'
import Modal from '@/components/core/Modal'
import SuccessMessage from '@/components/core/modals/SuccessMessage'

export default {
  name: 'EbookRead',
  components: {
    ReadCard,
    ReadForm,
    Modal,
    SuccessMessage,
  },

  data() {
    return {
      successMessage: null,
    }
  },

  computed: {
    ...mapGetters(['CUPosts']),
    posts() {
      if (this.CUPosts.length) {
        const posts = [...this.CUPosts]
        return posts
          .sort(this.sortedPosts)
          .filter(({ tags }) => tags && tags.includes('Pricing strategies'))
      }
      return []
    },
  },

  created() {
    this.getCustomerUniversityPosts()
  },

  methods: {
    ...mapActions(['getCustomerUniversityPosts']),
    sortedPosts(a, b) {
      return (Number(a.data.title[0].text.match(/(\d+)/g)[0])
        - Number((b.data.title[0].text.match(/(\d+)/g)[0])))
    },

    handleSendedForm(payload) {
      this.successMessage = `The letter with the PDF file was successfully sent to mail ${payload.email}. <br><br> Please check your email.`
      this.$refs.modalEbook.show()
    },
  },
}
</script>

<style lang="scss" scoped>
.ebook-read {
  padding: 96px 0 64px;
  background-color: #fff;

  &__form {
    width: 440px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 42px 48px;
    background-color: #F4F4F4;
    border-radius: 4px;
    box-sizing: border-box;
    align-self: flex-start;

    @media only screen and (min-width: 1024px) and (max-width: 1094px) {
      width: 364px;
    }

    @media screen and (max-width: 992px) {
      width: 100%;
      max-width: 100%;
      margin-bottom: 96px;
      order: 1;
    }

    @media screen and (max-width: 540px) {
      margin-bottom: 48px;
    }

    @media screen and (max-width: 540px) {
      padding: 32px 38px;
    }

    @media screen and (max-width: 376px) {
      padding: 22px 28px;
    }

    &-img {
      width: 100%;
      max-width: 140px;
      height: auto;
      transform: rotate(9deg);

      @media screen and (max-width: 992px) {
        margin: 0 auto;
      }
    }

    &-title {
      @include font('Inter', 22px, 400);
      line-height: 30px;
      letter-spacing: -1px;
      color: #111;
      margin-bottom: 24px;
      width: 100%;
      margin-top: 15px;

      @media screen and (max-width: 992px) {
        text-align: center;
        margin-top: 30px;
      }
    }

    /deep/ .read-form {
      &__caption {
        width: 100%;

        @media screen and (max-width: 992px) {
          text-align: center;
        }
      }

      &__button {
        @media screen and (max-width: 992px) {
          width: 100%;
        }
      }
    }
  }

  > .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media screen and (max-width: 1024px) {
    padding: 64px 0 56px;
  }

  @media screen and (max-width: 540px) {
    padding: 72px 0;
  }

  &__title {
    width: 100%;
    @include font('Inter', 42px, 600);
    line-height: 46px;
    letter-spacing: -1.3px;
    color: #111;
    margin-bottom: 32px;

    @media screen and (max-width: 992px) {
      order: 2;
    }

    @media screen and (max-width: 540px) {
      @include font('Inter', 28px, 600);
      line-height: 32px;
    }
  }

  &__cards {
    @include grid(repeat(2, 1fr), auto, 30px, 30px);

    @media screen and (max-width: 992px) {
      order: 3;
      @include grid(repeat(3, 1fr), auto, 30px, 30px);
    }

    @media screen and (max-width: 768px) {
      @include grid(repeat(2, 1fr), auto, 30px, 30px);
    }

    @media screen and (max-width: 540px) {
      @include grid(repeat(1, 1fr), auto, 0, 30px);
    }

    > a {
      @media only screen and (min-width: 1184px) and (max-width: 1260px) {
        width: 220px;
      }

      @media only screen and (min-width: 1024px) and (max-width: 1184px) {
        width: 210px;
      }

      @media only screen and (min-width: 992px) and (max-width: 1024px) {
        width: 220px;
      }

      @media screen and (max-width: 992px) {
        width: 100%;
      }
    }
  }
}
</style>
