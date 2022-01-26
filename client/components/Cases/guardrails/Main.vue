<template>
  <section>
    <About />
    <StoryBehindProject />
    <ProjectIssues />
    <Dashboard />
    <ApiForDashboard />
  </section>
</template>

<script>
import About from '@/components/Cases/guardrails/About'
import StoryBehindProject from '@/components/Cases/guardrails/StoryBehindProject'
import ProjectIssues from '@/components/Cases/guardrails/ProjectIssues'
import Dashboard from '@/components/Cases/guardrails/Dashboard'
import ApiForDashboard from '@/components/Cases/guardrails/ApiForDashboard'

export default {
  name: 'Main',
  components: {
    About,
    StoryBehindProject,
    ProjectIssues,
    Dashboard,
    ApiForDashboard,
  },
}
</script>
