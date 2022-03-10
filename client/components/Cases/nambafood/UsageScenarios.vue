<template>
  <section class="container_regular">
    <h2 class="case_title_h2 case_text-align-center m-96_top m-24_bottom media-m-48_top media-m-12_bottom">
      Typical usage scenarios and user roles
    </h2>
    <TextParagraph class="case_text-align-center m-48_bottom media-m-24_bottom">
      Namba Food involves several user journeys for different roles. Each user journey required different sets of
      functionalities and user interfaces.
    </TextParagraph>
    <div class="case_usage-scenarios">
      <Card
        v-for="useCase in usageScenarios"
        :key="useCase.title"
        :class="useCase.classList.cardColor"
        class="case_usage-scenarios-card"
      >
        <CardUseCase
          :title="useCase.title"
          :description="useCase.description"
          :file-name="useCase.fileName"
          :file-extension="useCase.fileExtension"
          :alt="useCase.alt || 'Image'"
          :class-list="useCase.classList"
          picture-folder="nambafood"
        />
      </Card>
    </div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Card from '@/components/Cases/shared/Card'
import CardUseCase from '@/components/Cases/nambafood/cards/CardUseCase'
import { usageScenarios } from '@/data/caseNambafood'

export default {
  name: 'UsageScenarios',
  components: {
    TextParagraph,
    Card,
    CardUseCase,
  },

  data() {
    return {
      usageScenarios,
    }
  },
}
</script>
