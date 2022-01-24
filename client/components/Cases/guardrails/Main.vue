<template>
  <section>
    <About />
    <StoryBehindProject />
  </section>
</template>

<script>
import About from '@/components/Cases/guardrails/About'
import StoryBehindProject from '@/components/Cases/guardrails/StoryBehindProject'

export default {
  name: 'Main',
  components: {
    About,
    StoryBehindProject,
  },
}
</script>
