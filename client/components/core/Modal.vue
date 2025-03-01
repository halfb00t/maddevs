<template>
  <transition
    name="main-fade"
    mode="out-in"
  >
    <div
      v-if="isVisible"
      v-append-to-body
      class="modal"
    >
      <transition name="made">
        <div
          v-if="isOverlay"
          class="modal_overlay"
          @click="close"
        />
      </transition>
      <transition name="fade">
        <div
          v-if="contentLoaded"
          class="modal_container"
          :class="[`modal_container-${background}-theme`]"
        >
          <div class="modal_head">
            <p class="modal_title">
              {{ modalTitle }}
            </p>
            <div
              class="modal_close"
              @click="close"
            >
              <img
                src="@/assets/img/common/close-icon-circle.svg"
                alt="Close modal"
              >
            </div>
          </div>
          <Simplebar
            ref="content"
            class="modal_content safari-only"
            @success="makeSuccess"
          >
            <div
              v-if="isSuccess"
              class="success-modal"
            >
              <!-- id is needed for google analytics, don't remove it -->
              <SuccessMessage :id="id" />
            </div>
            <slot v-else />
          </Simplebar>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import Simplebar from 'simplebar-vue'
import SuccessMessage from '@/components/core/modals/SuccessMessage'
import scrollOnBody from '@/mixins/scrollOnBody'
import { Cookies } from '@/helpers/cookies'

export default {
  name: 'Modal',
  components: { Simplebar, SuccessMessage },
  directives: {
    appendToBody: {
      inserted(el) {
        document.body.appendChild(el)
      },

      unbind(el) {
        if (el.parentNode) {
          el.parentNode.removeChild(el)
        }
      },
    },
  },

  mixins: [scrollOnBody],

  props: {
    id: {
      type: String,
      default: '',
    },

    appendToBody: {
      type: Boolean,
      default: false,
    },

    modalTitle: {
      type: String,
      default: '',
    },

    modalBackground: {
      type: String,
      default: 'white',
    },

    whereIsCalled: {
      type: String,
      required: false,
      default: '',
    },

    ebookSendpulseTemplateId: {
      type: Number,
      default: 763889, // default value is a template ID of  "Ebooks - Pricing Strategies"
    },
  },

  data() {
    return {
      isVisible: false,
      contentLoaded: false,
      isOverlay: false,
      isSuccess: false,
    }
  },

  computed: {
    background() {
      if (this.isSuccess) return 'black'
      if (this.modalBackground === 'white') return 'white'
      return 'black'
    },
  },

  beforeMount() {
    document.addEventListener('keydown', this.onKeydown)
  },

  beforeDestroy() {
    document.removeEventListener('keydown', this.onKeydown)
  },

  methods: {
    makeSuccess() {
      this.isSuccess = true
    },

    close() {
      setTimeout(() => {
        this.isVisible = false
        this.enableScrollOnBody()
      }, 200)
      setTimeout(() => {
        this.contentLoaded = false
      }, 50)
      setTimeout(() => {
        this.isOverlay = false
        this.$emit('on-close')
        this.isSuccess = false
      }, 100)
      if (this.whereIsCalled === 'ebook' && this.ebookSendpulseTemplateId) {
        Cookies.setCookie({
          name: `sawModal_${this.ebookSendpulseTemplateId}`,
          value: true,
          expires: 30,
        })
      }
    },

    show() {
      this.disableScrollOnBody()
      this.isVisible = true
      setTimeout(() => {
        this.contentLoaded = true
      }, 50)
      setTimeout(() => {
        this.isOverlay = true
        this.$emit('on-show')
      }, 100)
    },

    onKeydown(e) {
      if (e.keyCode === 27) {
        this.close()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.modal {
  width: 100%;
  height: auto;
  display: flex;
  position: fixed !important;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 90;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px 15px;
  overflow: hidden;
  box-sizing: border-box;

  &_overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 10;
  }

  &_close {
    position: absolute;
    padding: 25px 25px 12px;
    top: 25px;
    right: 60px;
    cursor: pointer;
    z-index: 1;
    background-color: transparent;
    border: 0;

    img {
      display: block;
    }
  }

  &_head {
    position: relative;
    padding: 52px 84px 40px;
    max-width: 660px;
  }

  &_title {
    @include font('Inter', 40px, 800);
    line-height: 100%;
    letter-spacing: -0.04em;
    color: $text-color--silver;
  }

  &_container {
    width: 660px;
    max-width: 660px;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 12;
    margin: auto;
    padding: 0 0 53px;
    box-sizing: border-box;
    transition: top 0.4s ease;
    overflow: hidden;
    box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.45);
    border-radius: 3px;
    &-black-theme{
      background-color: $modal-bg-color;
    }
    &-white-theme{
      background-color: $modal-bg-color-white;
    }
  }

  &_content {
    max-height: calc(80vh - 150px);
    padding: 0 84px;
    box-sizing: border-box;
  }

  /deep/ .fade-enter-active,
  .fade-leave-active {
    transition: all 0.3s;
  }

  /deep/ .fade-enter,
  .fade-leave-to {
    transform: scale(0.95);
    opacity: 0;
  }

  /deep/ .made-enter-active,
  .made-leave-active {
    transition: all 0.3s;
  }

  /deep/ .made-enter,
  .fade-leave-to {
    opacity: 0;
  }

  /deep/ .simplebar-vertical {
    right: 10px;
    cursor: pointer !important;

    &::before {
      content: '';
      width: 3px;
      height: 100%;
      position: absolute;
      top: 0;
      right: 50%;
      transform: translateX(50%);
      background-color: $bgcolor--white-primary;
      opacity: 0.2;
    }

    .simplebar-scrollbar {
      &::before {
        background: #999;
      }
    }

    .simplebar-scrollbar.simplebar-visible::before {
      opacity: 1;
    }
  }
}

@media screen and (max-width: 768px) {
  .modal {
    .modal_close {
      margin-right: auto;
    }
  }
}

@media screen and (max-width: 640px) {
  .modal {
    padding: 0;

    &_container {
      width: 100%;
      max-width: 100%;
      height: 100%;
      margin: 0;
    }

    &_head {
      padding-left: 10px;
    }

    &_content {
      padding: 0 10px;
      max-height: 85vh;
      min-height: 70%;
    }

    &_close {
      right: 0;
      top: 0;
    }

    /deep/ .simplebar-vertical {
      right: 0;
    }
  }
}

@media screen and (max-width: 370px) {
  .modal {
    &_title {
      font-size: 32px;
    }

    &_head {
      padding-bottom: 30px;
    }
  }
}

/* iphone 5 */
@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (-webkit-device-pixel-ratio: 2) {
  _::-webkit-full-page-media,
  _:future,
  :root .safari-only {
    max-height: calc(100vh - 177px) !important;
  }
}
/* iphone 6, 6s, 7, 8 */
@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (-webkit-device-pixel-ratio: 2) {
  _::-webkit-full-page-media,
  _:future,
  :root .safari-only {
    max-height: calc(100vh - 177px) !important;
  }
}
/* iphone 6+, 6s+, 7+, 8+ */
@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (-webkit-device-pixel-ratio: 3) {
  _::-webkit-full-page-media,
  _:future,
  :root .safari-only {
    max-height: calc(100vh - 177px) !important;
  }
}
/* iphone X , XS, 11 Pro */
@media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  _::-webkit-full-page-media,
  _:future,
  :root .safari-only {
    max-height: calc(100vh - 205px) !important;
  }
}
/* iphone XR, 11 */
@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
  _::-webkit-full-page-media,
  _:future,
  :root .safari-only {
    max-height: calc(100vh - 205px) !important;
  }
}
/* iphone XS Max, 11 Pro Max */
@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
  _::-webkit-full-page-media,
  _:future,
  :root .safari-only {
    max-height: calc(100vh - 205px) !important;
  }
}
</style>
