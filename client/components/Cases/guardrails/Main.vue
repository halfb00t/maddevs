<template>
  <section>
    <About />
    <StoryBehindProject />
    <ProjectIssues />
    <Dashboard />
    <ApiForDashboard />
    <CliandKubernetes />
    <TechnicalAgility />
  </section>
</template>

<script>
import About from '@/components/Cases/guardrails/About'
import StoryBehindProject from '@/components/Cases/guardrails/StoryBehindProject'
import ProjectIssues from '@/components/Cases/guardrails/ProjectIssues'
import Dashboard from '@/components/Cases/guardrails/Dashboard'
import ApiForDashboard from '@/components/Cases/guardrails/ApiForDashboard'
import CliandKubernetes from '@/components/Cases/guardrails/CliandKubernetes'
import TechnicalAgility from '@/components/Cases/guardrails/TechnicalAgility'

export default {
  name: 'Main',
  components: {
    About,
    StoryBehindProject,
    ProjectIssues,
    Dashboard,
    ApiForDashboard,
    CliandKubernetes,
    TechnicalAgility,
  },
}
</script>
