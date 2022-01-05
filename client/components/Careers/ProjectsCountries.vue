<template>
  <div
    class="projects-countries container"
  >
    <h2
      class="projects-countries_title"
    >
      {{ $t('careers.section-2.title') }}
    </h2>
    <p
      class="projects-countries_description"
    >
      {{ $t('careers.section-2.description') }}
    </p>
    <div class="projects-countries_img-wrap">
      <img
        v-lazy-load
        :data-src="$getMediaFromS3('/images/Careers/svg/map.svg')"
        alt="lobal projects in 20+ countries"
        class="projects-countries_img"
        width="1240"
        height="558"
      >
    </div>
    <UICustomersList
      class="projects-countries_customers-list"
      :customers="careersCustomers"
    />
    <div class="projects-countries_link-btn">
      <NuxtLink to="/case-studies/">
        <UIButton>{{ $t('careers.section-2.btn') }}</UIButton>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import UICustomersList from '@/components/shared/UICustomersList'
import UIButton from '@/components/shared/UIButton'
import { careersCustomers } from '@/data/customers'

export default {
  name: 'ProjectsCountries',
  components: {
    UICustomersList,
    UIButton,
  },

  data() {
    return {
      careersCustomers,
    }
  },
}
</script>

<style lang="scss" scoped>
.projects-countries {
  margin-bottom: 150px;

  &_title,
  &_description {
    letter-spacing: -0.04em;
    line-height: 72px;
    text-align: center;
    color: $text-color--white;
  }

  &_title {
    @include font('Poppins', 60px, 700);
  }

  &_description {
    margin-bottom: 9px;
    @include font('Inter', 20px, 400);
  }

  &_img-wrap {
    min-width: 481px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  &_img {
    width: 100%;
    height: 100%;
  }

  &_customers-list {
    margin-bottom: 40px;
  }

  &_link-btn {
    text-align: center;
    a {
      display: inline-block;
      .ui-button {
        @include font('Inter', 15px, 400);
        width: 100%;
        padding: 15px 31px 15px 28px;
        line-height: 100%;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 98px;

    &_title {
      margin-bottom: 7px;
      font-size: 44px;
      line-height: 50px;
    }

    &_description {
      margin-bottom: 15px;
      font-size: 18px;
      line-height: 27px;
    }
  }

  @media screen and (max-width: 620px) {
    &_title {
      font-size: 34px;
      line-height: 118%;
    }

    &_description {
      margin-bottom: 35px;
    }

    &_link-btn a {
      display: block;
    }
  }
}
</style>
