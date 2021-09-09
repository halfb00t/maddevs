<template>
  <section
    ref="caseBody"
    class="case_body"
  >
    <About />
  </section>
</template>

<script>

import About from '@/components/Cases/citycam/About'

export default {
  name: 'Main',
  components: {
    About,
  },
}
</script>
