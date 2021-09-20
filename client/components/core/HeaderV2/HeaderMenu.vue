<template>
  <div class="header-menu">
    <p
      v-if="menuName"
      class="header-menu__name"
    >
      {{ menuName }}
    </p>
    <ul class="header-menu__list">
      <li
        v-for="{label, link} in menuRoutes"
        :key="label"
        class="header-menu__item"
      >
        <NuxtLink
          v-if="!extractLink(link).isExternalLink"
          :to="extractLink(link).url"
        >
          {{ label }}
        </NuxtLink>
        <a
          v-else
          :href="extractLink(link).url"
          :target="extractLink(link).target"
        >
          {{ label }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeaderMenu',

  props: {
    menuName: {
      type: String,
      default: '',
    },

    menuRoutes: {
      type: Array,
      default: () => ([]),
    },
  },

  methods: {
    extractLink({
      link_type = '', // eslint-disable-line
      url = '/',
      target = null,
      type: documentType,
      uid: documentUID,
    }) {
      const linkType = link_type.toLowerCase()

      if (linkType === 'web') {
        if (url.includes(process.env.domain)) {
          return {
            isExternalLink: false,
            target,
            url: url.split(process.env.domain)[1],
          }
        }
        return {
          isExternalLink: true,
          target: '_blank',
          url,
        }
      }

      if (
        linkType === 'document'
        && (documentType === 'post' || documentType === 'customer_university')
        && documentUID
      ) {
        return {
          isExternalLink: false,
          target: null,
          url: this.getPostPath(documentType, documentUID),
        }
      }

      if (linkType === 'media') {
        return {
          isExternalLink: true,
          target: '_blank',
          url,
        }
      }

      return {
        isExternalLink: false,
        target: null,
        url: '/',
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.header-menu {
  box-sizing: border-box;
  width: 100%;

  a {
    color: $text-color--white-primary;
  }

  &__name {
    @include font('Inter', 15px, 400);
    line-height: 25px;
    color: $text-color--grey-pale;
    margin-bottom: 2px;
  }

  &__list {
    width: 100%;
  }

  &__item {
    @include font('Inter', 15px, 400);
    line-height: 25px;
    letter-spacing: -0.1px;
    display: flex;
    &::before {
      content: '';
      display: block;
      opacity: 0;
      transform: translate(-100%, 20px) scale(0.6);
      margin-left: -18px;
      margin-right: 8px;
      width: 10px;
      height: 3px;
      background-color: $bgcolor--red;
      transition: all .15s ease-in;
    }
    &:hover {
      a {
        color: $text-color--red;
      }
      &::before {
        opacity: 1;
        transform: translate(-100%, 20px) scale(1);
      }
    }
    a {
      padding: 8px 0;
      display: block;
      width: 100%;
      color: $text-color--white-primary;
      transition: all .15s ease;
    }
    &--active {
      font-weight: 700;
      a {
        cursor: default;
        color: $text-color--red !important;
      }
      &:hover::before  {
        display: none;
      }
    }
  }
}
</style>
