<template>
  <section>
    <About />
    <StoryBehindProject />
    <ProjectIssues />
  </section>
</template>

<script>
import About from '@/components/Cases/guardrails/About'
import StoryBehindProject from '@/components/Cases/guardrails/StoryBehindProject'
import ProjectIssues from '@/components/Cases/guardrails/ProjectIssues'

export default {
  name: 'Main',
  components: {
    About,
    StoryBehindProject,
    ProjectIssues,
  },
}
</script>
