<template>
  <div class="home__hero">
    <Cabecalho />
    <SobreNos class="mt-3" />
  </div>
</template>

<script>
import Cabecalho from '@/components/Cabecalho'
import SobreNos from '@/components/SobreNos'

export default {
  name: 'home-hero',
  components: {
    Cabecalho,
    SobreNos
  }
}
</script>

<style lang="scss">
  .home {
    &__logo {
      max-width: 60vw;
    }
  }
</style>
