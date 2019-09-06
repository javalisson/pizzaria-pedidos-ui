<template>
  <div class="lista-sabores row">
    <h3 class="col-12">Nossos sabores</h3>
    <div v-for="pizza in pizzas" :key="pizza.id" class="col-12 col-md-6 my-3">
      <Pizza :sabor="pizza" />
    </div>
  </div>
</template>

<script>
import pizzas from '@/assets/data/pizzas'

import Pizza from '@/components/Pizza'

export default {
  name: 'nossos-sabores',
  components: {
    Pizza
  },
  data: function () {
    return {
      pizzas
    }
  }
}
</script>
