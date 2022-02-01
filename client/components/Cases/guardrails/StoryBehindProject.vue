<template>
  <section
    class="container_regular"
    data-aos="fade-up"
    data-aos-anchor-placement="bottom"
  >
    <h2 class="case_title_h2 m-24_bottom">
      The story behind the project
    </h2>
    <TextParagraph class="m-24_bottom media-m-12_bottom">
      By the time the Mad Devs experts got involved in the project, GuardRails had already had a prototype up and
      running. After the installation, the app could scan code looking for its vulnerabilities. Once a security issue
      was detected, the app created a pull request (PR) comment in the repository so that the user could review the scan
      report.
    </TextParagraph>
    <TextParagraph class="m-24_bottom media-m-12_bottom">
      Having only a PR with a short lifespan, the user lacked information about the security problems and could not
      track them. So the customer’s top priority was to improve the usability of the product by making it more
      functional and user-friendly.
    </TextParagraph>
    <TextParagraph class="m-24_bottom media-m-12_bottom">
      Initially, the GuardRails app was an open-source GitHub solution. Integrating with other Version Control Systems
      (VCSs) was important for acquiring new users. In addition, it was necessary to optimise the overall app
      performance, that was, to speed up continuous security monitoring and testing, increase the accuracy of
      vulnerability detection, and improve the stability of the app.
    </TextParagraph>
    <TextParagraph class="m-96_bottom media-m-24_bottom">
      By maximising the app’s potential, GuardRails wanted to take their product to a new level. This would
      allow for raising funds and thus increasing the product’s business value to a greater degree.
    </TextParagraph>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'

export default {
  name: 'StoryBehindProject',
  components: {
    TextParagraph,
  },
}
</script>

<style lang="scss" scoped>

</style>
