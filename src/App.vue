<template>
  <div id="app">
    <Navegacao />
    <div class="container bg-white">
      <router-view />
    </div>
    <Rodape />
  </div>
</template>

<script>
import Navegacao from '@/components/Navegacao'
import Rodape from '@/components/Rodape'

export default {
  name: 'app',
  components: {
    Navegacao,
    Rodape
  }
}
</script>

<style lang="scss">
@import "./assets/styles/custom";
@import "../node_modules/bootstrap/scss/bootstrap";

body {
  background: #eee;
}
</style>
