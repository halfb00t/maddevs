<template>
  <section>
    <About />
    <StoryBehindProject />
    <ProjectIssues />
    <Dashboard />
    <ApiForDashboard />
    <CliandKubernetes />
    <TechnicalAgility />
    <AgilityIsKey />
    <ResultsAndAchievements />
    <Technologies />
    <Team />
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
import AgilityIsKey from '@/components/Cases/guardrails/AgilityIsKey'
import ResultsAndAchievements from '@/components/Cases/guardrails/ResultsAndAchievements'
import Technologies from '@/components/Cases/guardrails/Technologies'
import Team from '@/components/Cases/guardrails/Team'

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
    AgilityIsKey,
    ResultsAndAchievements,
    Technologies,
    Team,
  },

}

</script>
