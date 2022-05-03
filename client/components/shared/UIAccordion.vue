<template>
  <div class="accordion">
    <div class="accordion__question-wrapper">
      <h4>
        <button
          :id="accordId"
          ref="accordionQuestion"
          :aria-expanded="expanded.toString()"
          :aria-controls="`section-${sectionId}`"
          class="accordion__question"
          data-testid="accordionBtn"
          @click="showAnswer"
        >
          <span class="accordion__question-text">{{ question }}</span>
          <span
            ref="accordionIcon"
            class="accordion__question-icon"
          >
            <svg
              width="11"
              height="6"
              viewBox="0 0 11 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.5 1.09905L1.62126 0L5.5 3.80191L9.37874 0L10.5 1.09905L5.5 6L0.5 1.09905Z"
                fill="#CFCFD0"
              />
            </svg>
          </span>
        </button>
      </h4>
    </div>
    <transition name="fade">
      <div
        v-show="expanded"
        :id="`section-${sectionId}`"
        ref="accordionAnswer"
        :aria-labelledby="`${accordId}`"
        class="accordion__answer"
      >
        <div
          v-if="isPrismic"
          class="prismic-html-tags"
          v-html="answer"
        />
        <slot v-else />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'UIAccordion',
  props: {
    sectionId: {
      type: Number,
      required: true,
    },

    accordionId: {
      type: String,
      required: true,
    },

    question: {
      type: String,
      default: '',
    },

    answer: {
      type: String,
      default: '',
    },

    isPrismic: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      expanded: false,
      accordId: this.accordionId.replace(/ /g, '-').toLowerCase(),
    }
  },

  methods: {
    showAnswer() {
      this.expanded = !this.expanded
      this.$refs.accordionQuestion.classList.toggle('accordion__question--active')
      this.$refs.accordionIcon.classList.toggle('accordion__question-icon--active')
    },
  },
}
</script>

<style lang="scss" scoped>
// This styles need for animation in transition tag
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.accordion {
  margin-bottom: 48px;
  padding-bottom: 32px;
  border-bottom: 1px solid $border-color--grey-20-percent;
  @media screen and (max-width: 768px) {
    margin-bottom: 32px;
  }
  &:last-child {
    margin-bottom: 0;
  }

  &__question {
    @include font('Inter', 26px, 400);
    line-height: 34px;
    letter-spacing: -1px;
    color: $bgcolor--chinese-black;
    transition: 0.3s linear;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    width: 100%;
    padding: 0;
    @media screen and (max-width: 768px) {
      font-size: 21px;
      line-height: 30px;
    }

    @media screen and (max-width: 580px) {
      align-items: flex-start;
    }

    &-wrapper {
      margin-bottom: 16px;
    }

    &--active {
      color: $text-color--red;
    }
    &-text {
      @media screen and (max-width: 580px) {
        width: 70%;
      }
    }
    &-icon {
      padding: 9px 7px;
      display: grid;
      place-items: center;
      border-radius: 50%;
      border: 2px solid $border-color--grey-20-percent;
      transition: 0.3s linear;
      svg path {
        transition: 0.3s linear;
      }
      &--active {
        border-color: $border-color--red;
        transform: rotate(180deg);
        svg path {
          fill: $text-color--red;
        }
      }
    }
  }

  .prismic-html-tags {
    ::v-deep a {
      text-decoration: underline;
      color: inherit;
      font-family: inherit;
      font-weight: inherit;
    }

    ::v-deep img {
      max-width: 100%;
      height: auto;
      vertical-align: middle;
    }

    ::v-deep hr {
      border-bottom: none;
      border-left: none;
      border-right: none;
      border-top: 1px solid $border-color--grey-20-percent;
      margin: 48px 0;
    }

    ::v-deep strong {
      font-weight: 700;
    }

    ::v-deep ul,
    ::v-deep ol {
      padding-left: 18px;
    }

    ::v-deep ul {
      list-style: disc;
    }

    ::v-deep ol {
      list-style: decimal;
    }

    ::v-deep p,
    ::v-deep li {
      font-size: 17px;
      line-height: 28px;
      letter-spacing: -0.02em;
    }

    ::v-deep li {
      margin-bottom: 8px;
      &:last-child {
        margin-bottom: 0;
      }
    }

    ::v-deep p {
      margin: 12px 0;
      & + p {
        margin-top: 24px;
      }
      &:first-child {
        margin-top: 0;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }

    ::v-deep pre {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 14px;
      font-weight: 400;
      padding: 20px;
      overflow: auto;
      background: $bgcolor--grey-light;
      border-radius: 2px;
      line-height: 24px;
    }
  }
}
</style>
