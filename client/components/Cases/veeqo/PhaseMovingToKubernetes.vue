<template>
  <div class="container_regular">
    <h2 class="case_title_h2 m-12_bottom">
      Phase 5. Moving to Kubernetes
    </h2>
    <TextParagraph class="m-72_bottom media-m-48_bottom">
      Kubernetes and the team were ready for each other. Kubernetes was growing stable, well-integrated with all the major AWS services, and well-equipped for high production loads. The team, in turn, stabilized the development processes and needed better automation. Kubernetes provided a unified platform for app launching and Docker containers orchestration: we wanted to have a unified platform to safeguard Veeqo’s future growth. Having one platform to handle everything meant being independent of cloud providers and being able to launch instances in any clouds. We were going more cloud agnostic: Kubernetes allows moving workloads seamlessly.
    </TextParagraph>
    <h3 class="case_title_h3 m-12_bottom">
      Use of resources
    </h3>
    <TextParagraph>
      There are four main types of resources: CPU, RAM, disc, and network. The way a service uses them depends on its type. Our objective was to arrange the services so that they don’t overlap in terms of the use of resources and—importantly—so that not too many resources are idle.
    </TextParagraph>
    <TextQuoteBox
      class="m-48_top m-48_bottom media-m-24_top media-m-24_bottom m-auto"
      author="Andrew Sapozhnikov, Head of DevOps"
    >
      There’s nothing more expensive than idle resources. At the same time, you don’t want to load the nodes to their maximum capacity because a) it’ll lead to performance degradation and b) you do need some idle resource to handle load spikes. Kubernetes finds balance.
    </TextQuoteBox>
    <TextParagraph class="m-48_bottom">
      The balance is found based on thorough continuous calculations. Kubernetes shuffles services from node to node so that resources are not overused and creates optimal distribution that a human admin could never possibly achieve manually.
    </TextParagraph>
    <h3 class="case_title_h3 m-12_bottom">
      Kubernetes and containerization
    </h3>
    <TextParagraph class="m-24_bottom media-m-12_bottom">
      Kubernetes specializes in resource management and orchestration, but it needs a containerization service alongside it. We used Docker to standardize the runtime for application. The two worked perfectly together.
    </TextParagraph>
    <TextParagraph class="m-72_bottom media-m-24_bottom">
      Kubernetes provides an environment where Ops and Devs can speak the same language: the language of YAML configurations and Kubernetes objects. We get system resources on one end, containers on the other, and in the middle, Kubernetes works its magic.
    </TextParagraph>
  </div>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import TextQuoteBox from '@/components/Cases/shared/TextQuoteBox'

export default {
  name: 'PhaseMovingToKubernetes',
  components: {
    TextParagraph,
    TextQuoteBox,
  },
}
</script>
