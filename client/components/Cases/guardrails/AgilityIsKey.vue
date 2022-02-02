<template>
  <div class="m-96_bottom media-m-48_bottom">
    <div class="container_regular">
      <h2 class="case_title_h2 m-12_bottom">
        Agility is the key
      </h2>
      <TextParagraph class="m-48_bottom">
        Technical agility yields better results when combined with agile management and communication - either within an
        internal team or in customer relationships. On top of that, agility becomes vitally important when the product
        is ready to grow and needs more resources for further development.
      </TextParagraph>
      <TextParagraph class="m-48_bottom">
        Successful staff augmentation is impossible without tech talents that fit customer requirements and adapt to
        established company processes and development methodologies. The Mad Devs engineers adopt the best practices
        used by the customer and support them with their own development methods and workflow to provide transparency
        and seamless collaboration. We give proactive feedback on established management processes to improve the team’s
        capacity and create a user-oriented product.
      </TextParagraph>
      <TextParagraph class="m-48_bottom">
        Instead of the standard Agile, GuardRails uses the Shape Up methodology. This facilitates building a meaningful
        product in a short time by giving a development team much freedom in their work.
      </TextParagraph>
      <TextQuoteBox class="m-72_bottom">
        Shape Up is about increasing the team’s freedom and motivation. We
        switched to Shape Up in days to ensure maximum convenience to the customer
      </TextQuoteBox>
    </div>

    <div class="container_regular">
      <h4 class="case_title_h4 m-12_bottom">
        Shape Up workflow methodology
      </h4>
      <TextParagraph class="m-48_bottom">
        The Shape Up Method helps the GuardRails team to think more deeply about the
        right problems much earlier in the development process and start shipping meaningful features and improvements
        on time.
      </TextParagraph>
    </div>
    <div class="case-lottie-wrapper background-color-outer-space m-48_bottom">
      <div class="container_regular">
        <LottieMad
          class="case_lottie"
          height="329"
          :lottie-link="$getMediaFromS3(`/images/Cases/guardrails/lottie/workflow-methodology.json`)"
          :autoplay="true"
        />
      </div>
    </div>
    <div class="container_regular">
      <TextParagraph class="m-24_bottom">
        Shape Up enables managers to spend less time supervising developers and dedicate more time to shaping the
        project
        and its needs. For such a development method to be successful, a deep level of commitment on the developers’
        side
        is required.
      </TextParagraph>
      <TextParagraph class="m-24_bottom">
        Within a four-week cycle, the Mad Devs development team was left with greater
        autonomy to define tasks, make adjustments to the scope, and manage their working processes. This is why their
        responsible approach was a key in achieving results with Shape Up.
      </TextParagraph>
      <TextParagraph class="m-24_bottom">
        The main idea behind the Shape Up methodology is that no one works alone. The
        team members communicate clearly and constantly to report progress and map things to do.
      </TextParagraph>
      <TextParagraph class="m-24_bottom">
        Staying in sync with everyone on the team and the customer, Mad Devs coordinated
        each part of the development process, searching for solutions, evaluating risks, and solving problems together.
      </TextParagraph>

      <TextParagraph class="case_paragraph--bold m-24_bottom">
        Being agile in project management, communication, and software development, the
        Mad Devs team managed to deliver the GuardRails project on time and in accordance with the customer
        expectations.
      </TextParagraph>

      <TextQuote class="m-auto m-96_top m-96_bottom media-m-48_top media-m-48_bottom">
        "I have learned a lot from GuardRails CEO Stefan Streichsbier who is a truly inspirational and awesome leader
        with a brilliant mind. He not only gives me and my brothers in arms the freedom to build things the right way
        with the right tooling but also allows us to use the most interesting and modern tools. Stefan is super
        approachable and supportive, his excellent people skills in combination with a great vision have already made
        GuardRails a success, and we hope to see more developer teams adopting our solution in the future. What was
        delivered by a happy team is born to make the users' lives happier, too!”
        <span class="case-quote--workflow">
          Emir Sabyrkulov, Full-Stack Developer, Mad Devs
        </span>
      </TextQuote>
    </div>
  </div>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import LottieMad from '@/components/shared/LottieMad'
import TextQuoteBox from '@/components/Cases/shared/TextQuoteBox'
import TextQuote from '@/components/Cases/shared/TextQuote'

export default {
  name: 'AgilityIsTheKey',
  components: {
    TextParagraph,
    LottieMad,
    TextQuoteBox,
    TextQuote,
  },

}
</script>

<style lang="scss" scoped>
.case {
  &-case_paragraph--bold {
    font-weight: 500;
  }

  &-guardrails-image {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  &-quote--workflow {
    display: block;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #a0a0a1;
    font-style: italic;
    line-height: 166%;
    letter-spacing: -0.035em;
    margin-top: 8px;
  }
  &-lottie-wrapper{
    padding: 80px 0;
  }
  /deep/
  &_blockquote {
    font-size: 18px;
  }
}
</style>
