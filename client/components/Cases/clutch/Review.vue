<template>
  <section class="container_regular">
    <TextQuoteAuthor
      class="case_text-align-center m-72_bottom p-48_top media-m-48_bottom"
      author="Stan Misiurev"
      position="Head of Technology Clutch"
      file="stan-misiurev"
      extension="png"
      alt="Stan Misiurev"
      folder="clutch"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom"
    >
      The website's performance and reliability have improved as a result of the efforts. Mad Devs has integrated
      smoothly with the partner's team and helps them build more tools. They maintain effective communication and
      implement an efficient project management style.
    </TextQuoteAuthor>
  </section>
</template>

<script>
import TextQuoteAuthor from '@/components/Cases/shared/TextQuoteAuthor'

export default {
  name: 'Review',
  components: {
    TextQuoteAuthor,
  },
}
</script>
