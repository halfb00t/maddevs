<template>
  <section class="container_regular">
    <h3 class="case_title_h2 m-24_bottom media-m-12_bottom">
      Project in numbers
    </h3>
    <TextParagraph class="m-48_bottom media-m-24_bottom">
      Being a small, highly customised video streaming and online cinema platform, the service remains popular, with its
      audience sharing new feature requests for Mad Devs.
    </TextParagraph>
    <div class="m-96_bottom media-m-48_bottom">
      <Card style="padding: 0;">
        <CardProjectInNumbers />
      </Card>
    </div>
  </section>
</template>

<script>
import Card from '@/components/Cases/shared/Card'
import CardProjectInNumbers from '@/components/Cases/yourcast/CardProjectInNumbers'
import TextParagraph from '@/components/Cases/shared/TextParagraph'

export default {
  name: 'ProjectInNumbers',
  components: {
    Card,
    CardProjectInNumbers,
    TextParagraph,
  },
}
</script>
