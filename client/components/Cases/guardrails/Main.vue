<template>
  <section>
    <About />
    <StoryBehindProject />
    <ProjectIssues />
    <Dashboard />
  </section>
</template>

<script>
import About from '@/components/Cases/guardrails/About'
import StoryBehindProject from '@/components/Cases/guardrails/StoryBehindProject'
import ProjectIssues from '@/components/Cases/guardrails/ProjectIssues'
import Dashboard from '@/components/Cases/guardrails/Dashboard'

export default {
  name: 'Main',
  components: {
    About,
    StoryBehindProject,
    ProjectIssues,
    Dashboard,
  },
}
</script>
